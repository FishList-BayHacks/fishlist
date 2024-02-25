import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import DiveSiteFishPage from "./pages/DiveSiteFishPage";
import DiveSitesPage from "./pages/DiveSitesPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ThemeProvider from "./providers/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/divesites/:county" element={<DiveSitesPage />} />
          <Route
            path="/divesite-fish/:county/:siteId"
            element={<DiveSiteFishPage />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
