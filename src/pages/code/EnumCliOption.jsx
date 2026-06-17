import CodeBlock from "../../components/CodeBlock";
import img from "../../assets/enum_cli_option.png";

export const DISPLAY_NAME = "enum-cli-option: a simple C++ boost add-on";
export const DISPLAY_IMAGE = img;
export const CREATION_DATE = new Date("2026/04/10");

function EnumCliOption() {
  return (
    <div>
      <h2>
        <a
          href="https://github.com/frnkwang/cpp-snippets/tree/main/enum-cli-option"
          target="_blank"
          rel="noopener noreferrer"
        >
          enum-cli-option
        </a>
        : a simple C++ boost add-on
      </h2>
      <i>
        and the process of making something out of simply saying "this could be
        better"
      </i>
      <br />
      <br />
      <h4>Stumbling across an inconvenience</h4>
      <p>
        One of the most common things you might do in a Python script is use
        argparse for command-line argument parsing:
        <CodeBlock
          language="python"
          code={`
import argparse

LUNCH_OPTIONS = ["sandwich", "pasta", "sushi"]

parser = argparse.ArgumentParser()
parser.add_argument("--lunch", choices=LUNCH_OPTIONS)
args = parser.parse_args() # errors if --lunch is an invalid value
print(args.my_option) # one of LUNCH_OPTIONS`}
        />
        As you can see, Python's built-in argparse library provides a pretty
        natural way to allow the user to select from a list of values. This is
        needed fairly often, for example, when selecting from one of a few modes
        or options, like above.
        <br />
        <br />
        Most of my work, however, is in C++. And often, we come across the same
        pattern, where we would like to limit the user's command line input to
        one of several options. For example, we might want something fairly
        similar to the above python code in C++. To avoid dealing with argc and
        argv directly, as well as c-style strings, I tend to just use boost to
        parse arguments. This isn't part of the standard library, but is fairly
        common:
        <CodeBlock
          language="cpp"
          code={`
#include <boost/program_options.hpp>
#include <iostream>

namespace po = boost::program_options;

int main(int argc, char *argv[])
{
    std::array<std::string, 3> choices{"sandwich", "pasta", "sushi"};

    po::options_description desc("Allowed options");
    desc.add_options()
      ("help", "produce help message")
      ("lunch", po::value<std::string>()->required(), "lunch option")
    ;

    po::variables_map vm;
    po::store(po::parse_command_line(argc, argv, desc), vm);
    po::notify(vm);

    std::string choice = vm.at("lunch").as<std::string>();
    if (std::find(choices.begin(), choices.end(), choice) == choices.end())
    {
        std::cout << "invalid lunch option";
        return 1;
    }

    std::cout << "enjoy your " << choice << std::endl;
    return 0;
}`}
        />
        However, this feels clunky to me. For starters, we have to manually
        check that --lunch is a valid option. Python's argparse was able to do
        that for us automatically. But also, using a string here to represent
        the choice feels un-cpp-ish to me. In Python, we're often okay with
        using strings to represent one of a few types of choices because it's
        convenient to use and compare strings. But in C++, and actually in just
        C, we have a built-in way to represent "one of a few types of choices":
        an enum. Python as a language doesn't respect enums in the same way
        (they weren't even added until python 3.4), but if we're going to work
        in C++, we should do this the "right" way with enums.
        <br />
        <br />
        That is, what I really want to be able to do in C++ is declare an enum,
        and use boost::program_options to limit the user to select from one of
        those enum types. Something vaguely like this:
        <CodeBlock
          language="cpp"
          code={`
#include <boost/program_options.hpp>
#include <iostream>

namespace po = boost::program_options;

enum Lunch
{
    Sandwich,
    Pasta,
    Sushi
};

int main(int argc, char *argv[])
{
    std::array<std::string, 3> choices{"sandwich", "pasta", "sushi"};

    po::options_description desc("Allowed options");
    desc.add_options()
      ("help", "produce help message")
      ("lunch", po::value<Lunch>()->required(), "lunch option")
    ;

    po::variables_map vm;
    po::store(po::parse_command_line(argc, argv, desc), vm);
    po::notify(vm); // automatically throw if --lunch isn't one of the types in the enum

    Lunch choice = vm.at("lunch").as<Lunch>();
    std::cout << "enjoy your " << choice << std::endl;
    return 0;
}`}
        />
        Here's the process of how I did this.
      </p>
      <h4>First guesses</h4>
      <p>
        My first instinct was to use templates. I can't claim to know everything
        about C++, and template metaprogramming always seemed like a bit of
        magic to me. Why not give it a shot?
        <CodeBlock
          language="cpp"
          code={`
template<typename... EnumValues>
class EnumCommandLineOption {
    // magic magic
};

class Sandwich{};
class Pasta{};
class Sushi{};

class Lunch : EnumCommandLineOption<Sandwich, Pasta, Sushi>{};`}
        />
        Okay, this seems like an alright interface. I like the simplicity of
        declaring the enum itself. It's a bit odd to have to separately define
        each of the enum values (Sandwich, Pasta, Sushi) as their own class, but
        this isn't awful.
        <br />
        <br />
        The next step is figuring out how to get boost to parse out the correct
        value. boost does this by using the &lt;&lt; operator. In other words,
        we need a way to be able to convert each class name into a string and
        vice versa. Then EnumCommandLineOption's internals would be able to
        compare the command line input with a string representation of the class
        name and determine which one to use. Something like this:
        <CodeBlock
          language="cpp"
          code={`template <typename... EnumValues>
class EnumCommandLineOption
{
public:
    template <typename Val, typename... OtherVals>
    void setValue(std::string const &s)
    {
        if constexpr (Val::getName() == s)
        {
            value = Val{};
        }
        else
        {
            setValue<OtherVals...>(s);
        }
    }
    std::variant<EnumValues...> getValue() const
    {
        return value;
    }

private:
    std::variant<EnumValues...> value;

    void setValue()
    {
        throw std::invalid_argument{};
    }
};

template <typename... EnumValues>
std::istream &operator>>(std::istream &is, EnumCommandLineOption<EnumValues...> const &c)
{
    std::string s;
    is >> s;
    c.setValue(s);
    return is;
}`}
        />
        Here, we're using a template-recursive setValue() member function to
        iterate over all the potential EnumValues we have. For each of them, we
        check if the string value passed in on the command line is equal to the
        EnumValue's getName(). There's also a base case for if none of them
        match; in that case, we just throw an invalid argument.
        <br />
        <br />
        Of course, this requires us to define getName() for each potential class
        we're going to use as an EnumValue:
        <CodeBlock
          language="cpp"
          code={`class Sandwich
{
public:
    static std::string getName()
    {
        return "Sandwich";
    }
};
class Pasta
{
public:
    static std::string getName()
    {
        return "Pasta";
    }
};
class Sushi
{
public:
    static std::string getName()
    {
        return "Sushi";
    }
};`}
        />
        And for good measure, we should probably also create a constraint on
        this to enforce that everything we instantiate EnumCommandLineOption
        with does indeed have a getName():
        <CodeBlock
          language="cpp"
          code={`template <typename T>
concept EnumValue = requires(T a) {
    { T::getName() } -> std::convertible_to<std::string>;
};

template <typename... EnumValues>
    requires(EnumValue<EnumValues> && ...)
class EnumCommandLineOption{...}`}
        />
        Okay... This is seeming pretty bloated now. It felt somewhat fine to
        define a class for each enum value since that was so little overhead.
        But now we have to also define a getName() function for each? And
        there's the complexity of a template-recursive function too.
        <br />
        <br />
        What are we trying to solve with this getName() function? Clearly, it's
        to be able to get the class's name. Unfortunately, C++ doesn't have a
        built-in way to do this - that's what reflection in C++26 will solve.
        And that's the mistake I made, because the goal I had in mind originated
        from a language with reflection. But for now, without that, we're forced
        to do this, or use other workarounds like std::source_location and
        string parsing, or other preprocessor macros.
        <br />
        <br />
        Wait, preprocessor macros? Why not try those? They could help clean up
        all this syntax too. Let's see what we can do.
      </p>
      <h4>Creating a specific case</h4>
      <p>
        Since preprocessor macros basically let us do arbitrary text
        manipulation before compilation, we might as well use this chance to
        improve the syntax of our enum command line option. Here's a relatively
        simple design that I think is hard to argue with:
        <CodeBlock
          language="cpp"
          code={`ENUM_COMMAND_LINE_OPTION(MyTestOption,
    ValueA,
    ValueB,
    ValueC
)
// enum is called MyTestOption; values are listed afterwards
int main(int argc, char* argv[]) {
    po::options_description desc("Allowed options");
    desc.add_options()
        ("help", "produce help message")
        ("option", po::value<MyTestOption::Option>()->required(), "option")
    ;

    po::variables_map vm;
    po::store(po::parse_command_line(argc, argv, desc), vm);
    po::notify(vm);

    std::cout << MyTestOption::toString(vm.at("option").as<MyTestOption::Option>()) << std::endl;
}`}
        />
        Great. Let's try to make just this specific case work for now, and we
        can generalize afterwards. We'll pretend to be the preprocessor right
        now - we have four inputs (one enum name; three options) and we can
        place them anywhere in some source code we want to write. Here's the
        specific implementation I came up with. In other words, this is what
        ENUM_COMMAND_LINE_OPTION should expand to:
        <CodeBlock
          language="cpp"
          code={`namespace TestOption{

enum class Option {
    ValueA,
    ValueB,
    ValueC,
};

Option parse(const std::string& str) {
    if (str == "ValueA") return Option::ValueA;
    if (str == "ValueB") return Option::ValueB;
    if (str == "ValueC") return Option::ValueC;
    throw std::invalid_argument(std::format("Invalid TestOption: {}", str));
}

std::string toString(Option option) {
    switch (option) {
        case Option::ValueA: return "ValueA";
        case Option::ValueB: return "ValueB";
        case Option::ValueC: return "ValueC";
        default: throw std::invalid_argument("Unknown TestOption");
    }
}

std::istream& operator>>(std::istream& is, TestOption::Option& option) {
    std::string str;
    is >> str;
    try {
        option = TestOption::parse(str);
    } catch (const std::invalid_argument& e) {
        is.setstate(std::ios::failbit);
    }
    return is;
}
}`}
        />
        It's qutie an obvious implementation, actually. We just represent each
        enum value as a string and convert from that. Since we're just
        manipulating the text of a source C++ file (as we're pretending to be
        the preprocessor), this is easy to just copy and paste. Also, since
        we're representing this as an actual enum under the hood, we get all the
        nice properties of that too. For example, if the user provides duplicate
        values, we'll fail to compile too.
      </p>
      <h4>Generalizing</h4>
      <p>
        Now we just tell the preprocessor to do exactly what we did to implement
        the ENUM_COMMAND_LINE_OPTION macro. Since we already implemented a
        specific case, this is no more than copy-pasting, then replacing some
        strings with the inputs to the macro itself:
        <CodeBlock
          language="cpp"
          code={`#define PARSE_CASE(value) \\
    if (str == #value) return Option::value;
#define TO_STRING_CASE(value) \\
    case Option::value: return #value;


#define ENUM_COMMAND_LINE_OPTION(name, ...) \\
namespace name { \\
    enum class Option { __VA_ARGS__ }; \\
    Option parse(const std::string& str) { \\
        FOR_EACH(PARSE_CASE, __VA_ARGS__) \\
        throw std::invalid_argument(std::format("Invalid {}: {}", #name, str)); \\
    } \\
    std::string toString(Option option) { \\
        switch (option) { \\
            FOR_EACH(TO_STRING_CASE, __VA_ARGS__) \\
            default: throw std::invalid_argument(std::format("Unknown {} option", #name)); \\
        } \\
    } \\
    std::istream& operator>>(std::istream& is, Option& option) { \\
        std::string str; \\
        is >> str; \\
        try { \\
            option = parse(str); \\
        } catch (const std::invalid_argument& e) { \\
            is.setstate(std::ios::failbit); \\
        } \\
        return is; \\
    } \\
}`}
        />
        One cool thing to notice is that preprocessor macros can also take
        variadic args. In this case, you can't name them - they're always just
        called __VA_ARGS__ and will always expand. Luckily, we can still make
        use of a FOR_EACH macro to help us loop over the variadic args of the
        macro and call other macros like PARSE_CASE and TO_STRING_CASE. Under
        the hood, this uses some other boost macro helpers:
        <CodeBlock
          language="cpp"
          code={`#include <boost/preprocessor.hpp>

#define ID_OP(_, f, elem) f(elem)

#define FOR_EACH(macro, ...) \\
    BOOST_PP_SEQ_FOR_EACH(ID_OP, macro, BOOST_PP_VARIADIC_TO_SEQ(__VA_ARGS__))`}
        />
        To be completely honest, I don't fully understand how this works yet
        either - I just found it somewhere online. But it does exactly what
        you'd expect it to do!
        <br />
        <br />
        And that's all it takes. You can check out the final code here:{" "}
        <a
          href="https://github.com/frnkwang/cpp-snippets/tree/main/enum-cli-option"
          target="_blank"
          rel="noopener noreferrer"
        >
          enum-cli-option
        </a>
        .
      </p>
      <h4>Reflecting on the process</h4>
      <p>
        I don't write much code outside of work anymore, but I think this was a
        good self-contained example of making a feature.
        <ul>
          <li>You stumble across something that you think could be better</li>
          <li>You try some stuff, and it doesn't work or it seems ugly</li>
          <li>You try some other stuff and things seem promising</li>
          <li>
            You start with a specific case, not worrying about generalizability
            first
          </li>
          <li>You go and generalize it</li>
          <li>
            You go and google stuff and don't really understand what's going on,
            but it works (the power of abstraction!)
          </li>
        </ul>
        These are all things we as programmers like to talk about, but sometimes
        it's easy to forget about them in the actual process of coding and
        debugging. This is a good concrete example of all those ideas we talk
        about.
      </p>
    </div>
  );
}

export default EnumCliOption;
