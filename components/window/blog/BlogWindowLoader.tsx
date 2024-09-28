"use client";

import BlogWindowReader from "./BlogWindowReader";
import { getCoverSrc } from "@/lib/blog/helper";
import { readEntryOnClient } from "@/lib/dataLayer/client/clientEntryReader";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/widgets/LoadingScreen";
import blogWindowStyle from "./blog-window.module.css";
import { useBlogWindow } from "@/components/contexts/BlogWindowContext";

interface Props {
  slug: string;
}

export default function BlogWindowLoader({ slug }: Props) {
  const [post, setPost] = useState<PostEntry | null>(null);
  const { contentRef } = useBlogWindow();

  const readEntry = async () => {
    const entry = (await readEntryOnClient(slug, "blog/text", "markdown", [
      "title",
      "date",
      "slug",
      "author",
      "content",
      "coverImage",
      "description",
      "authorId",
      "displayCover",
      "tags",
      "lastEditedDate",
      "compatibleCover",
      "unlisted",
    ])) as PostEntry;

    setPost({
      ...entry,
      coverImage: getCoverSrc(entry.coverImage, entry.slug) || "data:null;,",
      slug,
    });
  };

  useEffect(() => {
    readEntry();
  }, [slug]);

  if (!post) {
    return <LoadingScreen className="bg-widget-80" />;
  }

  return (
    <div
      className={`w-full h-full overflow-y-auto ${blogWindowStyle.padding} pt-12 pb-8 bg-widget-80 relative`}
      ref={contentRef}
    >
      <BlogWindowReader {...post} />
    </div>
  );
}