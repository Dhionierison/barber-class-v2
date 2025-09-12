"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

/**
 * Componente que encapsula a aplicação com o provedor de tema para gerenciar o modo claro/escuro.
 * Ele utiliza a biblioteca `next-themes` para lidar com a lógica de alternância.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // O componente ThemeProvider da next-themes deve ser um componente cliente,
  // por isso a diretiva "use client" é necessária.
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
