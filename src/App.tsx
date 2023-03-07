import { ThemeProvider } from "react-bootstrap";
import { CustomThemeProvider } from "./providers";
import { Root } from "./pages";

function App() {
  return (
    <ThemeProvider breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}>
      <CustomThemeProvider>
        <Root />
      </CustomThemeProvider>
    </ThemeProvider>
  );
}

export default App;
