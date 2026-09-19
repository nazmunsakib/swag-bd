import type { Article } from "@/data/types";
import { slugify } from "./TableOfContents";

type Props = {
  article: Article;
};

export function ArticleBody({ article }: Props) {
  return (
    <div className="prose-article max-w-measure">
      {article.content.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={index} id={slugify(block.text)} className="scroll-mt-24">
                {block.text}
              </h2>
            );
          case "h3":
            return <h3 key={index}>{block.text}</h3>;
          case "ul":
            return (
              <ul key={index}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={index}
                className="my-10 border-l-2 border-clay pl-6 font-display text-[20px] font-semibold leading-snug text-ink"
              >
                {block.text}
              </blockquote>
            );
          default:
            return <p key={index}>{block.text}</p>;
        }
      })}
    </div>
  );
}