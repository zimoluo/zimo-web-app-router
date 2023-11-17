"use client";

import React, { useMemo, useState } from "react";
import GeneralSharingIcon from "../images/sharing/GeneralSharingIcon";
import FacebookLogo from "../images/sharing/FacebookLogo";
import TwitterLogo from "../images/sharing/TwitterLogo";
import LinkedinLogo from "../images/sharing/LinkedinLogo";
import CopyIcon from "../images/sharing/copy/CopyIcon";
import CopySuccessIcon from "../images/sharing/copy/CopySuccessIcon";
import CopyFailedIcon from "../images/sharing/copy/CopyFailedIcon";
import RedditLogo from "../images/sharing/RedditLogo";
import DownloadIcon from "../images/sharing/DownloadIcon";
import { downloadHtml } from "@/lib/downloadEntry";

type Props = {
  title: string;
  description: string;
  url: string;
  platform: SharingPlatform;
  className?: string;
};

const iconMap: { [key: string]: typeof GeneralSharingIcon } = {
  mobile: GeneralSharingIcon,
  facebook: FacebookLogo,
  twitter: TwitterLogo,
  linkedin: LinkedinLogo,
  copy: CopyIcon,
  copied: CopySuccessIcon,
  copyFailed: CopyFailedIcon,
  reddit: RedditLogo,
  downloadHtml: DownloadIcon,
};

export default function ShareButton({
  title,
  description,
  url,
  platform,
  className = "",
}: Props) {
  const [iconState, setIconState] = useState<string>(platform);
  const [isOpaque, setOpacity] = useState<boolean>(true);
  const [shareInProgress, setShareInProgress] = useState<boolean>(false);
  const [isButtonAvailable, setButtonAvailable] = useState<boolean>(true);

  const initiateAnimation = (newIconState: string) => {
    setOpacity(false);
    setButtonAvailable(false);
    setTimeout(() => {
      setIconState(newIconState);
      setOpacity(true);
    }, 300); // animation duration
    setTimeout(() => {
      setOpacity(false);
    }, 1300); // time until next fade-out
    setTimeout(() => {
      setIconState(platform);
      setOpacity(true);
    }, 1600); // time until icon reset
    setTimeout(() => {
      setButtonAvailable(true);
    }, 1900);
  };

  const handleShare = () => {
    if (!isButtonAvailable) return;

    if (platform === "mobile") {
      handleMobileShare();
      return;
    }

    if (platform === "copy") {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          initiateAnimation("copied");
        })
        .catch(() => {
          initiateAnimation("copyFailed");
        });
      return;
    }

    if (platform === "download") {
      downloadHtml(description, title);
      return;
    }

    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          url
        )}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(
          description
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          title
        )}&url=${encodeURIComponent(url)}`;
        break;
      case "reddit":
        shareUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(
          url
        )}&title=${encodeURIComponent(title)}`;
        break;
    }
    window.open(shareUrl, "_blank");
  };

  const handleMobileShare = async () => {
    if (shareInProgress) return;

    setShareInProgress(true);
    try {
      await navigator.share({ text: title, url });
    } catch (e) {
    } finally {
      setShareInProgress(false);
    }
  };

  const ShareButtonSprite = useMemo(() => {
    return iconMap[iconState];
  }, [iconState]);

  return (
    <button
      onClick={handleShare}
      className={`${
        isOpaque ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300 ease-in-out ${className}`}
      disabled={shareInProgress || !isButtonAvailable}
    >
      <ShareButtonSprite className="h-6 w-6 transition-transform duration-300 ease-in-out hover:scale-110" />
    </button>
  );
}
