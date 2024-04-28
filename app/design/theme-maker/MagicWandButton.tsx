"use client";

import { useSettings } from "@/components/contexts/SettingsContext";
import { generateShadeMap } from "@/lib/themeMaker/colorShadeCalculator";
import { useAccentColor } from "./AccentColorContext";
import { rgb, hex } from "color-convert";
import {
  invertedIndexMap,
  regularIndexMap,
} from "@/lib/themeMaker/colorHelper";
import MagicWandIcon from "@/components/assets/entries/colorPickerMode/MagicWandIcon";

export default function MagicWandButton() {
  const { settings } = useSettings();
  const { selectedAccent } = useAccentColor();
  const { updateAccentColor, updateSiteThemeColor } = useSettings();

  const applyColorMagic = () => {
    const { index, shadeMap } = generateShadeMap(
      (selectedAccent === "site"
        ? settings.customThemeData[settings.customThemeIndex].siteThemeColor
        : rgb.hex(
            ...settings.customThemeData[settings.customThemeIndex].palette[
              selectedAccent
            ]
          )) as HexColor
    );

    let indexMap = index > 4 ? invertedIndexMap : regularIndexMap;

    if (["primary", "saturated", "middle"].includes(selectedAccent)) {
      indexMap = index > 4 ? regularIndexMap : invertedIndexMap;
    }

    (
      ["primary", "saturated", "middle", "soft", "pastel", "light"] as Exclude<
        AccentColors,
        "site"
      >[]
    ).forEach((accentType) => {
      updateAccentColor(accentType, hex.rgb(shadeMap[indexMap[accentType]]));
    });

    updateSiteThemeColor(shadeMap[indexMap["site"]]);
  };

  return (
    <button
      className="transition-transform duration-150 ease-out hover:scale-110"
      onClick={applyColorMagic}
    >
      <MagicWandIcon className="w-6 h-auto aspect-square" />
    </button>
  );
}
