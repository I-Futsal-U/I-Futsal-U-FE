"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function ReactQuery({ children }: Props) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
