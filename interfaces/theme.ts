type ThemeKey =
  | "photos"
  | "projects"
  | "home"
  | "blog"
  | "about"
  | "midnight"
  | "glitter"
  | "birthday"
  | "plainLight"
  | "plainDark"
  | "rainbow"
  | "bubbles"
  | "stars"
  | "christmas"
  | "grass"
  | "halloween"
  | "gold"
  | "autumnal"
  | "cherry"
  | "marina"
  | "mori"
  | "sky"
  | "storm"
  | "vitreous"
  | "pixelland"
  | "scintillating"
  | "verdant"
  | "custom"
  | "penumbra"
  | "bewitched"
  | "spookfest"
  | "underwater"
  | "crimson"
  | "eep"
  | "vibrant";

type ThemeAnimatedBackgroundKey =
  | "photos"
  | "projects"
  | "home"
  | "blog"
  | "midnight"
  | "glitter"
  | "birthday"
  | "rainbow"
  | "bubbles"
  | "stars"
  | "christmas"
  | "grass"
  | "halloween"
  | "about"
  | "gold"
  | "sky"
  | "storm"
  | "pixelland"
  | "verdant"
  | "bewitched"
  | "underwater"
  | "crimson"
  | "eep";

interface ThemeMiscOptions {
  readingBlur?: number;
}

interface ThemeDataConfig {
  palette: RawColorPaletteData;
  siteThemeColor: HexColor;
  favicon: FaviconConfig;
  animatedBackgroundKey?: ThemeAnimatedBackgroundKey;
  misc?: ThemeMiscOptions;
}

interface RawColorPaletteData {
  primary: ColorTriplet;
  saturated: ColorTriplet;
  middle: ColorTriplet;
  soft: ColorTriplet;
  pastel: ColorTriplet;
  light: ColorTriplet;
  page: ColorGradient[];
  pageMinimal?: ColorGradient[];
  widget: ColorGradient[];
}

interface GradientStop {
  color: ColorTriplet;
  opacity: number; // [0.0, 1.0]
  isWidgetOpacity?: boolean;
  at: number; // in percentage
}

interface LinearGradientData {
  angle: number; // [0, 359]
}

interface KeywordLinearGradientData {
  linearGradientKeyword?: boolean;
  linearHorizontalOrientation?: LinearGradientLeftOrRight;
  linearVerticalOrientation?: LinearGradientTopOrBottom;
}

interface RadialGradientData {
  posX: number; // in percentage
  posY: number;
  sizeX: number;
  sizeY: number;
}

interface CircleRadialGradientAdditionalData {
  isCircle?: boolean;
  sizeKeyword?: RadialGradientSizeKeyword;
}

type RadialGradientSizeKeyword =
  | "closest-side"
  | "closest-corner"
  | "farthest-side"
  | "farthest-corner";

type LinearGradientLeftOrRight = "left" | "right";

type LinearGradientTopOrBottom = "top" | "bottom";

interface CustomGradientData {
  content: string;
}

type ColorGradient = {
  type: EditorGradientMode | "custom";
  stops?: GradientStop[];
  disabled?: boolean;
  colorInterpolation?: ColorInterpolationData;
} & Partial<LinearGradientData> &
  Partial<KeywordLinearGradientData> &
  Partial<RadialGradientData> &
  Partial<CircleRadialGradientAdditionalData> &
  Partial<CustomGradientData>;

type ColorTriplet = [number, number, number];

interface ColorInterpolationData {
  colorSpace: GradientColorSpace | "default";
  hueInterpolationMethod?: HueInterpolationMethod; // defaults to shorter
}

type GradientColorSpace =
  | "srgb"
  | "srgb-linear"
  | "display-p3"
  | "a98-rgb"
  | "prophoto-rgb"
  | "rec2020"
  | "lab"
  | "oklab"
  | "xyz"
  | "xyz-d50"
  | "xyz-d65"
  | PolarColorSpace;

type PolarColorSpace = "hsl" | "hwb" | "lch" | "oklch";

type HueInterpolationMethod =
  | "shorter"
  | "longer"
  | "increasing"
  | "decreasing";

type AccentColors =
  | "primary"
  | "saturated"
  | "middle"
  | "soft"
  | "pastel"
  | "light"
  | "site";

type GradientCategory = "page" | "pageMinimal" | "widget";

type EditorGradientMode =
  | "linear-gradient"
  | "radial-gradient"
  | "repeating-linear-gradient"
  | "repeating-radial-gradient"
  | "conic-gradient"
  | "repeating-conic-gradient";

type FaviconMode = "backdrop" | "outline" | "separate" | "overall" | "custom";

type CustomFaviconKey = "pixelland";

interface FaviconGradientStop {
  color: HexColor;
  offset: number; // [0.0, 1.0]
}

interface FaviconGradientStopsConfig {
  stops: FaviconGradientStop[];
  angle?: number;
}

type FaviconGradientConfig =
  | [
      FaviconGradientStopsConfig,
      FaviconGradientStopsConfig,
      FaviconGradientStopsConfig
    ]
  | [FaviconGradientStopsConfig];

interface FaviconConfig {
  mode: FaviconMode;
  outline?: AccentColors | HexColor;
  customKey?: CustomFaviconKey;
  gradient?: FaviconGradientConfig;
  backdropGradient?: ColorGradient[];
  backdropProhibitSVG?: boolean;
}
