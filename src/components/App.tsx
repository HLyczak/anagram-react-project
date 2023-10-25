import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./routes/Home";
import { Blog } from "./routes/Blog";
import { BlogDetails } from "./routes/BlogDetails";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <ul className="App-header"></ul>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
