import { Routes, Route, useRoutes } from "react-router-dom";
import routes from "tempo-routes";
import Home from "@/components/home";

function App() {
  // Handle Tempo routes
  const tempoRoutes =
    import.meta.env.VITE_TEMPO === "true" ? useRoutes(routes) : null;

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      {tempoRoutes}
      <Routes>
        <Route path="/" element={<Home />} />
        {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
