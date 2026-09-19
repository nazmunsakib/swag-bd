import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle, getRelatedArticles, articles } from "@/data/articles";
import { getCategory, siteConfig } from "@/data/categories";
import { getCatalogRelated } from "@/data/products";
import { ArticleBody } from "@/components/articles/ArticleBody";
import { TableOfContents } from "@/components/articles/TableOfContents";
import { ShareButtons } from "@/components/articles/ShareButtons";
import { RelatedArticles } from "@/components/articles/RelatedArticles";
import { RelatedProducts } from "@/components/articles/RelatedProducts";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema } from "@/lib/schema";
import { NewsletterCta } from "@/components/NewsletterCta";
import { articleImage } from "@/data/images";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const category = getCategory(article.categorySlug);
  const image = articleImage(article);
  const url = `${siteConfig.url}/guides/${article.slug}`;
  const title = article.title;

  return {
    title,
    description: article.excerpt,
    alternates: { canonical: `/guides/${article.slug}` },
    openGraph: {
      type: "article",
      title,
      description: article.excerpt,
      url,
      siteName: siteConfig.name,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      section: category?.name ?? article.category,
      authors: [article.author.name],
      images: [{ url: image.src, width: 1200, height: 630, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: article.excerpt,
      images: [image.src],
    },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const category = getCategory(article.categorySlug);
  const relatedArticles = getRelatedArticles(slug);
  const relatedProducts = getCatalogRelated(article.categorySlug);

  return (
    <>
      <JsonLd data={articleSchema(article)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: category?.name ?? article.category, href: `/${article.categorySlug}` },
          { name: article.title, href: `/guides/${article.slug}` },
        ]}
      />

      <article>
        <header className="container-site">
          <div className="mx-auto max-w-[760px]">
            <p className="label-editorial-accent mb-5">
              <a href={`/${article.categorySlug}`} className="transition-colors hover:text-clay-deep">
                {article.category}
              </a>
            </p>
            <h1 className="font-display text-display-md font-extrabold text-ink">
              {article.title}
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-muted sm:text-lg">
              {article.excerpt}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-line py-4">
              <span className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center bg-ink font-sans text-[11px] font-bold uppercase text-paper">
                  {article.author.initials}
                </span>
                <span className="text-[13px] font-medium text-ink">{article.author.name}</span>
              </span>
              <span aria-hidden className="text-stone">/</span>
              <time dateTime={article.publishedAt} className="text-[12px] uppercase tracking-label text-mist">
                {formatDate(article.publishedAt)}
              </time>
              {article.updatedAt ? (
                <>
                  <span aria-hidden className="text-stone">/</span>
                  <span className="text-[12px] uppercase tracking-label text-mist">
                    Updated {formatDate(article.updatedAt)}
                  </span>
                </>
              ) : null}
              <span aria-hidden className="text-stone">/</span>
              <span className="text-[12px] uppercase tracking-label text-mist">
                {article.readingTime} min read
              </span>
            </div>
          </div>
        </header>

        <div className="container-site py-10 sm:py-14">
          <div className="mx-auto max-w-[1120px]">
            <ImagePlaceholder
              image={articleImage(article)}
              aspect="16 / 9"
              label={article.category}
              caption="Editorial"
              className="w-full"
            />
          </div>
        </div>

        <div className="container-site">
          <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-12 lg:grid-cols-[1fr_260px] lg:gap-16">
            <div className="min-w-0">
              <ArticleBody article={article} />
              <div className="mt-12 max-w-measure">
                <ShareButtons title={article.title} />
              </div>
            </div>
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents article={article} />
                <div className="mt-6 border border-line bg-paper p-5">
                  <p className="label-editorial mb-2">Author</p>
                  <p className="font-display text-[15px] font-semibold text-ink">
                    {article.author.name}
                  </p>
                  <p className="mt-0.5 text-[12px] text-ink-muted">{article.author.role}</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">
                    {article.author.bio}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div className="mt-16 lg:hidden">
          <div className="container-site">
            <div className="border border-line bg-paper p-5">
              <p className="label-editorial mb-2">Author</p>
              <p className="font-display text-[15px] font-semibold text-ink">{article.author.name}</p>
              <p className="mt-0.5 text-[12px] text-ink-muted">{article.author.role}</p>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">{article.author.bio}</p>
            </div>
          </div>
        </div>

        <div className="container-site py-16 sm:py-20">
          <NewsletterCta />
        </div>

        <RelatedProducts products={relatedProducts} />
        <RelatedArticles articles={relatedArticles} />
      </article>
    </>
  );
}