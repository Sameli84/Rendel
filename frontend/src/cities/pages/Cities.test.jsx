import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import Cities from "./Cities";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("The Cities Page", () => {
  it("Should show a loading spinner while fetching content", () => {
    render(<Cities />, { wrapper });
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });
});
