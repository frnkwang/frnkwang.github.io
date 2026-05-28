import hljs from "highlight.js/lib/core"; // Use core to avoid massive bundle bloat
import python from "highlight.js/lib/languages/python"; // Explicitly grab Python
import cpp from "highlight.js/lib/languages/cpp";
import "highlight.js/styles/github-dark.css";

hljs.registerLanguage("python", python);
hljs.registerLanguage("cpp", cpp);

function CodeBlock({ language, code }) {
  if (!hljs.listLanguages().includes(language)) {
    console.warn(`Trying to format unregistered language: ${language}`);
    return (
      <pre>
        <code>{code.trim()}</code>
      </pre>
    );
  }

  return (
    <pre>
      <code
        className={`hljs language-${language} fs-3`}
        dangerouslySetInnerHTML={{
          __html: hljs.highlight(code, { language }).value.trim(),
        }}
      />
    </pre>
  );
}

export default CodeBlock;
