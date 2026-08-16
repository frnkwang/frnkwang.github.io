import img from "../../assets/claude.jpg";

export const DISPLAY_NAME = "AI and Its Effect on My Work";
export const DISPLAY_IMAGE = img;
export const CREATION_DATE = new Date("2026/08/16");

function PostGradWorkingLife() {
  return (
    <div>
      <h2>AI and Its Effect on My Work</h2>Because I work with computers, many
      people ask me what I think about AI. I feel somewhat qualified to talk
      about it, having learned about how these models work from college, but AI
      and machine learning are by no means my specialty in CS.
      <h3>My Perspective</h3>Instead, I think much more of my opinion is
      validated from using AI in my job now. I get (not unlimited, but plenty
      of) access to Cursor and Claude Code. Especially because AI does a
      spectacular job of writing code compared to other tasks (such as writing
      and analysis), I find myself using it extensively compared to my
      non-software peers. This has led to changes in the way I work.
      <br />
      <br />
      I also think I have a special perspective on AI at work, just due to the
      timing of when I started working. Most other employees at my job are well
      into their careers. They have lots of institutional knowledge and
      experience that I don’t, and their established workflows are much faster.
      They don’t have to learn how the existing systems work, like I do. So they
      might benefit less from AI than me. Having AI explain how our systems work
      and how to interact with them isn’t as beneficial to them, because they
      already know it.
      <br />
      <br />
      But on the other hand, I’ve had about 1.5 years as a new-hire before AI
      really became big. I’ve had to learn how to code professionally, and I’ve
      had to manually figure out how a complex backend system works (because, as
      expected, our team’s documentation was sparse). This is a distinction from
      future new-grad hires, who will likely never work in an AI-less workplace.
      So I have a pre-AI world to compare against that future new grads won’t.
      <br />
      <br />
      With that said, here are some things that have changed for me at work
      since AI started becoming reliable.
      <h3>Faster Development</h3>
      Obvious, right?
      <br />
      <br />
      To a lot of people, AI was made to write code faster. And to that extent,
      it surpasses my expectations. I’ve found that Claude Code on the Fable
      model in particular is my favorite. It just seems to do the best job of
      figuring out how the code works, how to design a new feature around it,
      and potential pitfalls to avoid.
      <br />
      <br />
      I also like the plan mode that Claude Code has. For those unfamiliar, this
      mode forces Claude to make sure it has all the requirements and design
      figured out before starting to code. Only once you approve its plan does
      it actually start coding. I find that, without plan mode, Claude often
      goes off the rails. It makes one change that it thinks is the correct fix,
      but then I have to tell it something’s wrong, before it makes another bad
      patch, I have to correct it again, and so on. Plan mode helps keep it
      focused and implement fixes correctly the first time.
      <br />
      <br />
      With that being said, one downside of having an agent code for me is that
      I understand “my own” code less. I learn best by doing: theorizing how
      something should work, implementing it, seeing it not work, figuring out
      why, and fixing it. In that process, I learn not only what the finished
      code looks like, but what things could go wrong, because I created those
      bugs during development. With AI, since you just tell it what to do and it
      comes back with the completed product, I don’t get that same learning
      experience. I try my best to mitigate this by not only self-reviewing the
      output code, but also by reading the AI’s logs during its development. It
      makes mistakes just like I do, and I can glean some insight from its logs
      on top of just the finished code. It’s not the same as experiencing the
      bugs myself, but it’s something.
      <br />
      <br />
      Anyway, the result of this is that pumping out code is much faster. In the
      early days of AI, I remember feeling like I was getting through tickets
      way faster than before. Which is a good thing, don’t get me wrong. But
      paradoxically now, I often find myself wishing I could write more code
      “manually.” It’s been months since I developed a feature on my own, and I
      miss the experience of designing, coding, and debugging on my own. I
      rarely even have to open my IDE anymore. The frustrating part is, with the
      knowledge that I could do it with AI, there’s almost no reason to do
      things manually anymore. But perhaps this is just me being sentimental
      more than rational here.
      <h3>Code Exploration and Documentation</h3>
      Similar to writing code, exploring code is faster. This is the most
      relevant for new hires, and I would’ve appreciated it when I started. With
      agents, you can simply ask it to explore the code and give you a
      high-level understanding: I/O, design patterns, concurrency gotchas, etc.
      Several times, I’ve asked it to just straight-up write documentation for
      me, and this will make it even faster for future new-hire onboarding too.
      <br />
      <br />
      However, like with writing code, AI’s explanations and documentation need
      to be thoroughly reviewed. Frequently, it makes assumptions about what
      functions do based on the function name, without actually diving deeper. I
      constantly have to tell it to “cite its source” before examining the code
      myself and verifying the explanation. Still, it’s much faster than reading
      the code manually, especially when the code is a bit messy.
      <h3>Testing a Lot</h3>
      This is a natural consequence of faster development. With more code being
      pumped out, more tests are needed too. AI can automate some unit testing
      too, which is great. But when more features are getting released faster,
      it also demands more integration testing to make sure that the features
      don’t conflict with each other. It just so happens that my team’s systems
      weren’t designed very well for integration testing in mind, so it becomes
      a lot of manual effort on our end. I’m sure other teams with better
      integration testing infrastructure feel this problem less.
      <br />
      <br />
      But another reason I find myself testing more is because I just trust the
      code less now. There’s something innately… odd about having someone (AI)
      do something and just report back to me that “hey, it’s done now!” I
      imagine this is what it feels like to be a manager, and maybe I’m just not
      used to it yet. But on top of that, knowing that a lot of these models
      aren’t really “thinking,” they’re just generating tokens, makes me
      cautious of them. Empirically, yes, they generate code well and often
      correctly. But in theory, they don’t actually understand it, and so I find
      myself doubting the code and testing more.
      <h3>Internal Tool Creation</h3>
      With code being written faster, that also frees up time for other
      development work. One nice thing that my team has been doing is using AI
      to make niche internal tools. Things like test visualization dashboards,
      shared resource usage dashboards, and version deployment dashboards. None
      of these are production-critical - they just make life a lot better for us
      as developers. And the nice thing is, because they’re not in prod, we
      don’t really need to review or test them quite as thoroughly. We still do,
      of course - but if they break, no worries, we can just throw another agent
      at it.
      <h3>Context Switching</h3>
      This is an interesting one. It’s not really code-related at all - it’s
      more workstyle related. Because you simply tell AI agents what to do and
      then wait for them to do it, it’s natural to start doing more things at
      once. I rarely have just one agent going anymore. Instead, it’s usually
      4-6 agents going simultaneously on different tasks in different repos (or
      even the same repo with worktrees).
      <br />
      <br />
      While this is great for boosting efficiency, this also means I have to
      jump between tasks much more frequently. Unfortunately, me personally, I’m
      very bad at this. I have a pretty bad memory and switching around between
      different tasks so much leaves me prone to forgetting where I was last
      time. It’s still much faster to work with agents, but that little bit of
      context switching takes a bit of a mental toll on me. It’s just the same
      as with OS thread context-switching: it can greatly improve overall
      efficiency, but it comes with a little bit of a cost on each switch too.
      <h3>Slop Code and Slop Reviews</h3>
      This is the biggest downside I’ve noticed since AI became big. I strive to
      understand all the code my agents produce, but that doesn’t guarantee that
      everyone will do the same. This results in code reviews with many, many
      review cycles. As reviewers poke holes in the code, the assignee might not
      even understand how the code works or how to fix it. Sometimes, this
      results in the assignee simply throwing the comments over to their agent
      to fix it. But without truly understanding what the code change is doing,
      this simply exacerbates the problem as the agent continues to fumble
      around.
      <br />
      <br />
      This problem is made worse by the fact that AI agents love writing really
      long comments. Like, really long. I used to be a proponent of leaving
      comments, but I found agents often leave 3-5 line comments to explain a
      2-line piece of code that’s already perfectly legible. The comments just
      clog up the code, and many of my team’s review comments became “we don’t
      need this comment.” Even telling the agent to write less comments barely
      helped.
      <br />
      <br />
      Another issue is that AI agents code way faster than humans, so merge
      requests tend to be significantly larger. Of course, that makes it much
      harder for humans to review. You might think of making an AI review the
      large code changes that humans can’t. This is a good idea, especially for
      small nitpicky fixes, but it points us to a larger question:
      <h3>Who is Code For?</h3>
      I think this question has existed for a while now, but AI presses it into
      our face more now. Should it be designed for and maintained by humans, or
      should AI handle all the code now?
      <br />
      <br />
      Historically, I’ve primarily been a believer that code should be for
      humans. It should be designed to be read by humans, understood by humans,
      maintained by humans, and expanded on by humans. This is especially
      important in the event of critical prod incidents - people need to know
      how the code works to be able to quickly diagnose and solve problems.
      <br />
      <br />
      But now with AI, I find myself questioning that belief. The primary
      difference now is the sheer versatility of AI - it can do everything we
      need now. Why should code really need to be understood by humans if an AI
      can understand it and explain it? Why should code need to be maintained or
      written by humans if an AI can do it? And even in the case of prod
      incidents - AI is reasonably fast now, and it could diagnose prod
      incidents and resolve them quickly.
      <br />
      <br />
      The only good argument I see remaining against making code for humans is
      that I don’t really trust AI that much yet. I don’t want it touching my
      prod environment yet. But this is purely a matter of how much I trust the
      AI - I think it could effectively do everything I’d want to do in prod.
      And even though this is the only reason I can think of now, I still
      maintain that it’s a pretty good reason. Until we as humans can learn to
      trust AI more, whether it’s by the models becoming better or by us simply
      learning how to prompt them better, I don’t want any AI in my production.
    </div>
  );
}

export default PostGradWorkingLife;
