import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./routes/Home";

import { Header } from "./common/Header";
import Comments from "./routes/Comments";
import Albums from "./routes/Albums";
import Users from "./routes/Users";
import { Container } from "@mui/material";
import User from "./routes/User";
import Post from "./routes/Post";
import CommentsByPostId from "./routes/CommentsByPostId";
import ToDos from "./routes/ToDos";

export const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/users" element={<Users />} />

            <Route path="/users/:id" element={<User />}>
              <Route path="todos" element={<ToDos />} />
            </Route>
            <Route path="/posts/:id" element={<Post />} />
            <Route path="/comments/:id" element={<CommentsByPostId />} />
            {/* <Route path="/todos/:id" element={<ToDos />} /> */}

            <Route path="*" element={<div>404</div>} />
          </Routes>
        </div>
      </Container>
    </BrowserRouter>
  );
};
