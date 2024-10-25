import { Toaster } from "sonner";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <Toaster richColors position="top-right" />
      <AppRouter />
    </>
  );
}

export default App;
