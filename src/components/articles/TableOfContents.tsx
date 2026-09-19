import type { Article } from "@/data/types";

type Props = {
  article: Article;
};

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function TableOfContents({ article }: Props) {
  const headings = article.content.filter((block) => block.type === "h2") as Extract<
    Article["content"][number],
    { type: "h2" }
  >[];

  if (headings.length < 2) return null;

  return (
    <nav aria-label="Table of contents" className="border border-line bg-paper p-5">
      <p className="label-editorial mb-4">On this page</p>
      <ol className="space-y-2.5">
        {headings.map((heading) => (
          <li key={slugify(heading.text)}>
            <a
              href={`#${slugify(heading.text)}`}
              className="text-[13px] leading-snug text-ink-soft transition-colors hover:text-clay"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}