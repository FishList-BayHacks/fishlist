import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import DiveSiteFishPage from "./pages/DiveSiteFishPage";
import DiveSitesPage from "./pages/DiveSitesPage";
import HomePage from "./pages/HomePage";
import { MainProvider } from "./context/Context";
import NotFoundPage from "./pages/NotFoundPage";
import ThemeProvider from "./providers/theme-provider";
import FishList from "./pages/FishListPage";

function App() {
  return (
    <MainProvider>
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
            <Route path="/fish-list" element={<FishList />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </MainProvider>
  );
}

export default App;
