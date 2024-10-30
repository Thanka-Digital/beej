import { Toaster } from "sonner";
import AppRouter from "@/router/AppRouter";
import AppProvider from "@/providers/Context/AppContext";

function App() {
  return (
    <AppProvider>
      <Toaster richColors position="top-right" />
      <AppRouter />
    </AppProvider>
  );
}

export default App;
