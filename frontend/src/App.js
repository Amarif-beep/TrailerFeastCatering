import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="App">
      <div className="noise-overlay" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e8d2a4",
            color: "#050505",
            border: "2px solid #000",
            borderRadius: 0,
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            boxShadow: "6px 6px 0 0 #000",
          },
        }}
      />
    </div>
  );
}

export default App;
