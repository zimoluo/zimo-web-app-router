"use client";

import { readEntryOnClient } from "@/lib/dataLayer/client/clientEntryReader";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/widgets/LoadingScreen";
import { useEntryWindow } from "@/components/contexts/EntryWindowContext";
import _ from "lodash";
import ErrorScreen from "@/components/widgets/ErrorScreen";
import WindowDisplay from "@/components/widgets/WindowDisplay";
import CommentAreaWrapper from "@/components/comments/CommentAreaWrapper";
import CommentCardContainer from "@/components/comments/CommentCardContainer";
import { CommentProvider } from "@/components/contexts/CommentContext";
import PhotosTitleCard from "@/app/photos/PhotosTitleCard";
import PhotosCommentTypingBar from "@/app/photos/PhotosCommentTypingBar";
import EntryLikeButton from "@/components/comments/EntryLikeButton";

interface Props {
  slug: string;
}

export default function PhotosWindowLoader({ slug }: Props) {
  const [entry, setEntry] = useState<PhotosEntry | null>(null);
  const [isError, setIsError] = useState(false);
  const { contentRef } = useEntryWindow();

  const readEntry = async () => {
    const entry = (await readEntryOnClient(slug, "photos/entries", "json", [
      "title",
      "date",
      "author",
      "authorProfile",
      "slug",
      "location",
      "images",
      "instagramLink",
      "unlisted",
    ])) as PhotosEntry;

    if (_.isEmpty(entry)) {
      setIsError(true);
      return;
    }

    setIsError(false);

    setEntry({
      ...entry,
      slug,
    });
  };

  useEffect(() => {
    readEntry();
  }, [slug]);

  if (isError) {
    return <ErrorScreen className="bg-widget-90" />;
  }

  if (!entry) {
    return <LoadingScreen className="bg-widget-90" />;
  }

  return (
    <div
      className={`w-full h-full overflow-y-auto bg-widget-90 relative`}
      ref={contentRef}
    >
      <CommentProvider
        location={`photos/comments/${entry.slug}.json`}
        likeIconType="heart"
      >
        <WindowDisplay
          className="bg-widget-90"
          imageData={entry.images}
          display={
            <div className="flex flex-col min-h-full">
              <article className="w-full px-4 pt-4 pb-4 mb-2">
                <PhotosTitleCard {...entry} />
                <hr className="border-saturated border-opacity-80 border-t-0.8 -mt-10 mb-8 -mx-4 select-none pointer-events-none" />
                <CommentAreaWrapper>
                  <CommentCardContainer />
                </CommentAreaWrapper>
              </article>
              <div
                className="flex-grow pointer-events-none select-none"
                aria-hidden="true"
              />
              <div className="sticky bottom-0 w-full">
                <PhotosCommentTypingBar
                  inMiddle={false}
                  likeButton={
                    <EntryLikeButton
                      resourceLocation={`photos/likedBy/${entry.slug}.json`}
                      likeIconType="heart"
                    />
                  }
                />
              </div>
            </div>
          }
        />
      </CommentProvider>
    </div>
  );
}
