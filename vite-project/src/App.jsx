import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  const root = createRoot(document.getElementById("root"));

  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
