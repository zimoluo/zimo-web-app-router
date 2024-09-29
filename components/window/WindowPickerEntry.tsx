"use client";

import BlogIcon from "../assets/navigation/BlogIcon";
import BlogWindowFrame from "./blog/BlogWindowFrame";
import ProjectsIcon from "../assets/navigation/ProjectsIcon";
import ManagementIcon from "../assets/navigation/ManagementIcon";
import windowPickerStyle from "./window-picker.module.css";
import ManagementWindowFrame from "./management/ManagementWindowFrame";
import PhotosIcon from "../assets/navigation/PhotosIcon";
import { useWindow } from "../contexts/WindowContext";
import { useRef } from "react";

interface Props {
  entry: WindowPickerEntry;
}

const entryMap: Record<
  WindowPickerEntry,
  {
    icon: typeof BlogIcon;
    title: string;
    window?: PartialBy<WindowData, "uniqueId">;
  }
> = {
  blog: {
    icon: BlogIcon,
    title: "Blog Article",
    window: {
      content: <BlogWindowFrame />,
      defaultHeight: 580,
      defaultWidth: 440,
      minWidth: 416,
      minHeight: 420,
      maxWidth: 960,
      maxHeight: 760,
    },
  },
  projects: { icon: ProjectsIcon, title: "Projects Entry" },
  photos: { icon: PhotosIcon, title: "Album Entry" },
  management: {
    icon: ManagementIcon,
    title: "Management Article",
    window: {
      content: <ManagementWindowFrame />,
      defaultHeight: 580,
      defaultWidth: 440,
      minWidth: 416,
      minHeight: 420,
      maxWidth: 960,
      maxHeight: 760,
    },
  },
};

export default function WindowPickerEntry({ entry }: Props) {
  const { appendWindow } = useWindow();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { icon: Icon, title, window } = entryMap[entry] || {};
  return Icon ? (
    <div className={`${windowPickerStyle.entry}`}>
      <div className="w-full h-full flex items-center justify-center">
        <button
          className="aspect-square h-10 w-auto"
          ref={buttonRef}
          onClick={() => {
            if (!window) {
              return;
            }

            appendWindow({
              ...window,
              defaultCenterX:
                (buttonRef.current?.getBoundingClientRect().left ?? 0) +
                (buttonRef.current?.getBoundingClientRect().width ?? 0) / 2,
              defaultCenterY:
                (buttonRef.current?.getBoundingClientRect().top ?? 0) +
                (buttonRef.current?.getBoundingClientRect().height ?? 0) / 2,
            });
          }}
        >
          <Icon className="h-full w-auto aspect-square" />
        </button>
      </div>
      <p>{title}</p>
    </div>
  ) : null;
}
