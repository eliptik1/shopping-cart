import { BrowserRouter, Route, Routes } from "react-router-dom";
import App2 from "./App2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
