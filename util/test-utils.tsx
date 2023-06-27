import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, RenderOptions } from "@testing-library/react";

interface ReactQueryProviderProps {
  children: React.ReactNode;
}

const queryTestClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
  logger: {
    log: console.log,
    warn: console.warn,
    error: process.env.NODE_ENV === "test" ? () => null : console.error,
  },
});

function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryTestClient}>
      {children}
    </QueryClientProvider>
  );
}

const renderWithQueryClient = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: ReactQueryProvider, ...options });

// eslint-disable-next-line import/prefer-default-export
export { renderWithQueryClient as render };
