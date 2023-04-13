import PostHeader from "./PostHeader";
import styles from "./PostContent.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    p: ({ node, ...props }) => {
      if (node.children[0].tagName && node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{props.children}</p>;
    },
    code(code) {
      console.log(code)
      const array = code.className.split("-");
      const language = array[1];

      return (
        <SyntaxHighlighter language={language} style={atomDark}>
          {code.children[0]}
        </SyntaxHighlighter>
      );
    },
  };
  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
