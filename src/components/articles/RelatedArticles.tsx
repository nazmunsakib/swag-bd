import type { Article } from "@/data/types";
import { ArticleCard } from "@/components/editorial/ArticleCard";

type Props = {
  articles: Article[];
};

export function RelatedArticles({ articles }: Props) {
  return (
    <section className="border-t border-line py-16 sm:py-20">
      <div className="container-site">
        <p className="label-editorial mb-8">Keep reading</p>
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}