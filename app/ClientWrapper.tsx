'use client'

import { ThemeProvider } from "@/src/context/ThemeContext";
import FixedThemeToggle from "./FixedThemeToggle";
import FixedPDFButtons from "./FixedPDFButtons";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <FixedThemeToggle />
      <FixedPDFButtons />
      {children}
    </ThemeProvider>
  );
}
