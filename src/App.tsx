import { BrowserRouter } from "react-router";
import AppRoutes from "./AppRoutes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/config/client";

const App = () => {
  return (
    <div className="w-dvw h-dvh overflow-x-hidden">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
};

export default App;
