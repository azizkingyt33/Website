import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Store from "./pages/Store";
import Todo from "./pages/Todo";
import Calculator from "./pages/Calculator";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/store/*" element={<Store />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
