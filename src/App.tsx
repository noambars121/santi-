import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "@/components/home";
import routes from "tempo-routes";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Tempo routes */}
      {import.meta.env.VITE_TEMPO && useRoutes(routes)}

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Add Tempo route before catchall */}
        {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
