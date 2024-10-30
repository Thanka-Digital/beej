import ChkProvider from "./providers/chakra/ChkProvider";
import AppProvider from "./providers/Context/AppContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <ChkProvider>
      <AppProvider>
        <AppRouter />;
      </AppProvider>
    </ChkProvider>
  );
}

export default App;
