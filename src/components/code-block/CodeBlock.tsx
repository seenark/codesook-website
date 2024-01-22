import { component$, useStyles$ } from "@builder.io/qwik";
// import rehypeHighlight from "rehype-highlight";
// import rehypeParse from "rehype-parse";
// import rehypeSanitize from "rehype-sanitize";
// import rehypeStringify from "rehype-stringify";
// import { unified } from "unified";
import hljs from "highlight.js";
import ts from "highlight.js/lib/languages/typescript";
import theme from "highlight.js/styles/github-dark.css?inline";

type Props = {
  code: string;
};
export default component$<Props>(({ code }) => {
  useStyles$(theme);
  hljs.registerLanguage("ts", ts);
  const language = "ts";
  const escapedContent = code.replace(/</g, "<").replace(/>/g, ">");
  const newCode = hljs.highlight(escapedContent, {
    language: "ts",
  });
  const content = `<pre><code class="language-${language} hljs">${newCode.value}</code></pre>`;
  return (
    <div
      class="overflow-scroll rounded-xl"
      dangerouslySetInnerHTML={content}
    ></div>
  );
});
