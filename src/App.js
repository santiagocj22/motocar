import "./App.css";
import { Routes, Route } from "react-router-dom";
import { paths } from "./routes";
import { HomePage } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={paths.HOME} element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
