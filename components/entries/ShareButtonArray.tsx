"use client";

import { useEffect, useState } from "react";
import { baseUrl } from "@/lib/constants/navigationFinder";
import ShareButton from "./ShareButton";

type Props = {
  title: string;
  description: string;
  slug: string;
  section: EntrySection;
  platforms?: string[];
};

const defaultPlatforms = ["twitter", "facebook", "reddit", "linkedin"];

export default function ShareButtonBar({
  title,
  description,
  slug,
  section,
  platforms = defaultPlatforms,
}: Props) {
  const url = new URL(`${section}/${slug}`, baseUrl).href;
  const [isMobileShareAvailable, setIsMobileShareAvailable] = useState(false);
  const [isBarHidden, setIsBarHidden] = useState(true);

  useEffect(() => {
    setIsMobileShareAvailable("share" in navigator);
  }, []);

  useEffect(() => {
    setIsBarHidden(false);
  }, []);

  return (
    <div className={`${isBarHidden ? "hidden" : "flex"} space-x-3`}>
      {isMobileShareAvailable ? (
        <ShareButton
          title={title}
          description={description}
          url={url}
          platform="mobile"
        />
      ) : (
        platforms.map((platform) => (
          <ShareButton
            key={platform}
            title={title}
            description={description}
            url={url}
            platform={platform as SharingPlatform}
          />
        ))
      )}
      <ShareButton
        title={title}
        description={description}
        url={url}
        platform="copy"
      />
    </div>
  );
}
