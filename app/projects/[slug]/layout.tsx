import ImageViewer from "@/components/widgets/ImageViewer";
import MobileDesktopEntryRenderer from "@/components/widgets/MobileDesktopEntryRenderer";
import ReadingBlur from "@/components/widgets/ReadingBlur";
import {
  fetchAllEntries,
  fetchEntryBySlug,
} from "@/lib/dataLayer/server/awsEntryFetcher";
import { imageViewerTextParser } from "@/lib/imageUtil";
import { ReactNode } from "react";
import ProjectsArticle from "../ProjectsArticle";
import ProjectsWindow from "../ProjectsWindow";
import { Metadata } from "next";
import { restoreDisplayText } from "@/lib/lightMarkUpProcessor";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const entry = (await fetchEntryBySlug(
    params.slug,
    "projects/entries",
    "json"
  )) as ProjectsEntry;
  return {
    title: `${entry.title} | Projects - Zimo Web`,
    description: restoreDisplayText(entry.description),
    openGraph: {
      type: "article",
      title: entry.title,
      description: restoreDisplayText(entry.description),
      url: `/projects/${entry.slug}`,
    },
    twitter: {
      card: "summary",
      title: entry.title,
      description: restoreDisplayText(entry.description),
    },
    keywords: "Zimo Web, Project, Coding, Programming, Personal Website",
  };
}

interface Props {
  children?: ReactNode;
  params: { slug: string };
}

export default async function ProjectsArticleLayout({
  children,
  params,
}: Props) {
  const { slug } = params;
  const entry = (await fetchEntryBySlug(slug, "projects/entries", "json", [
    "title",
    "slug",
    "description",
    "links",
    "date",
    "authors",
    "faviconFormat",
    "content",
    "images",
  ])) as ProjectsEntry;

  const processedEntry = {
    ...entry,
    content: (entry.content as unknown as string[]).join("\n") || "",
  } as ProjectsEntry;

  const parsedImage = imageViewerTextParser(processedEntry.images);

  return (
    <MobileDesktopEntryRenderer
      mobile={
        <>
          <ReadingBlur />
          <div className="pt-16 bg-widget-90">
            <div className="mb-0 mx-6">
              <ImageViewer
                url={parsedImage.url}
                text={parsedImage.text}
                aspectRatio={parsedImage.aspectRatio}
                original={parsedImage.original}
                respectDefaultGridViewSettings={true}
              />
            </div>
            <div className="mt-4">
              <ProjectsArticle {...processedEntry} />
            </div>
          </div>
        </>
      }
      desktop={<ProjectsWindow {...processedEntry} />}
    />
  );
}

export async function generateStaticParams() {
  const entries = await fetchAllEntries("projects/entries", "json", ["slug"]);

  return entries.map((entry) => {
    return {
      slug: entry.slug as string,
    };
  });
}

export const revalidate = 24;
