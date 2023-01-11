import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { AppBarComponent } from "./components";
import { HomePage } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppBarComponent />}>
          <Route index element={<HomePage />} />
          {routes.map((route) => (
            <Route
              key={route.name}
              index={route.index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
