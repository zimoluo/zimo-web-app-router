import ArticleCard from "@/components/widgets/ArticleCard";
import ArticleListLayout from "@/components/widgets/ArticleListLayout";
import { fetchAllEntries } from "@/lib/dataLayer/server/awsEntryFetcher";

export default async function ManagementLayout() {
  const allPosts = await fetchAllEntries("about/text", "markdown", [
    "title",
    "date",
    "slug",
    "description",
    "unlisted",
  ]);

  const filteredPosts = allPosts.filter((post) => !post.unlisted);

  const postKeywords = filteredPosts.map((post) => ({
    title: post.title,
    description: post.description,
  }));

  const articleCards = filteredPosts.map((post) => (
    <ArticleCard
      {...(post as ArticleCardDisplay)}
      section={"management"}
      slug={post.slug}
      useCalendarDate={true}
      omitSectionType={true}
    />
  ));

  return (
    <ArticleListLayout
      title="Management"
      subtitle="Find articles on Zimo Web's management and policies here."
      components={articleCards}
      keywords={postKeywords}
      searchBarPromptKeyword="management article"
    />
  );
}

export const revalidate = 24;
