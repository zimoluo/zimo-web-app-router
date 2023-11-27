"use client";

import { ReactNode, useMemo } from "react";
import { ThemeProvider } from "@/components/contexts/ThemeContext";
import { useSettings } from "../contexts/SettingsContext";
import { useNavigation } from "@/lib/navigationHook";

interface Props {
  children?: ReactNode;
}

export default function ThemeInitializer({ children }: Props) {
  const navigationKey = useNavigation();
  const { settings } = useSettings();

  const theme = useMemo(() => {
    return settings.pageTheme[navigationKey];
  }, [navigationKey]);

  return <ThemeProvider defaultThemeKey={theme}>{children}</ThemeProvider>;
}
