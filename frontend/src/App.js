import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VanDetail from "./pages/VanDetail";
import BookingContact from "./pages/BookingContact";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="/book" element={<BookingContact />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#c9a04e",
            color: "#17130d",
            border: "none",
            borderRadius: "4px",
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          },
        }}
      />
    </div>
  );
}

export default App;
