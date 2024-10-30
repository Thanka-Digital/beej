import { Toaster } from "sonner";
import AppRouter from "@/router/AppRouter";
import AppProvider from "@/providers/Context/AppContext";
import AppMantineProvider from "./providers/mantine/AppMantineProvider";

function App() {
  return (
    <AppMantineProvider>
      <AppProvider>
        <Toaster richColors position="top-right" />
        <AppRouter />
      </AppProvider>
    </AppMantineProvider>
  );
}

export default App;
