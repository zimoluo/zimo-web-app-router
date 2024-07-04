"use client";

import { rgb } from "color-convert";
import { useFaviconEditor } from "./FaviconEditorContext";
import { useSettings } from "@/components/contexts/SettingsContext";
import { useMemo } from "react";
import selectorStyle from "./outline-selector.module.css";

interface Props {
  mode: AccentColors | "custom";
}

export default function OutlineSelectorButton({ mode }: Props) {
  const { faviconConfig } = useFaviconEditor();
  const { currentCustomThemeConfig, updateFaviconConfig } = useSettings();
  const outline = faviconConfig.outline ?? "primary";
  const isSelected =
    mode === outline || (outline.startsWith("#") && mode === "custom");

  const displayColor = useMemo(() => {
    if (mode !== "custom") {
      if (mode === "site") {
        return currentCustomThemeConfig.siteThemeColor;
      }
      return `#${rgb.hex(
        currentCustomThemeConfig.palette[mode]
      )}`.toLowerCase();
    }

    if (isSelected) {
      return outline;
    }

    return "#ffffff";
  }, [isSelected, currentCustomThemeConfig, outline]);

  const selectOutline = () => {
    if (isSelected) {
      return;
    }

    if (mode !== "custom") {
      updateFaviconConfig({ outline: mode });
      return;
    }

    const rgbArrays: number[][] = [
      "primary",
      "saturated",
      "middle",
      "soft",
      "pastel",
      "light",
    ].map(
      (key) =>
        currentCustomThemeConfig.palette[key as Exclude<AccentColors, "site">]
    );

    const createdCustomOutline = `#${rgb.hex(
      rgbArrays[0].map((_, i) => {
        const sum = rgbArrays.reduce((acc, array) => acc + array[i], 0);
        return Math.round(sum / rgbArrays.length);
      }) as ColorTriplet
    )}`.toLowerCase();

    updateFaviconConfig({ outline: createdCustomOutline as HexColor });
  };

  return (
    <button
      className="w-8 h-8 rounded-full relative shrink-0"
      onClick={selectOutline}
    >
      <div
        className={`w-0 h-0 absolute rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
          selectorStyle.selected
        } transition-opacity duration-300 ease-out ${
          isSelected ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className="w-full h-full relative rounded-full"
        style={{
          backgroundImage:
            mode === "custom" && !isSelected
              ? "linear-gradient(135deg, #ff988c, #ffd18c, #fbff8c, #8cff8c, #8cffdb, #8cc7ff, #c08cff)"
              : `linear-gradient(135deg, ${displayColor} 40%, color-mix(in srgb, #e0e0e0 33%, ${displayColor}) 110%)`,
        }}
      />
    </button>
  );
}
