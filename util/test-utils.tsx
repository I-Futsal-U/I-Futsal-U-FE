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
    error:
      process.env.NODE_ENV === "test"
        ? () => {
            return null;
          }
        : console.error,
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
) => {
  return render(ui, { wrapper: ReactQueryProvider, ...options });
};

export { renderWithQueryClient as render };
