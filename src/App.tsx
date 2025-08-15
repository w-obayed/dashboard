import WiseSportsAIDashboard from "./component/dashboard-area";
import { ThemeProvider } from "./component/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <WiseSportsAIDashboard />
    </ThemeProvider>
  );
}

export default App;
