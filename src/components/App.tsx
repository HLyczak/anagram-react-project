import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Photos from "./routes/Photos";
import PhotosByAlbumId from "./routes/PhotosByAlbumId";
import AddPhotos from "./routes/AddPhotos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditUser from "./routes/EditUser";
import EditPhoto from "./routes/EditPhoto";
import ErrorBoundary from "./common/ErrorBoundary";

export const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter basename="/react-app">
        <div className="App">
          <Header />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/comments" element={<Comments />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/users" element={<Users />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/users/:id" element={<User />}>
                <Route path="todos" element={<ToDos />} />
              </Route>
              <Route path="/posts/:id" element={<Post />} />
              <Route path="/comments/:id" element={<CommentsByPostId />} />
              <Route path="/photos/:id" element={<PhotosByAlbumId />} />
              <Route path="/add-photos" element={<AddPhotos />} />
              <Route path="/users/edit/:id" element={<EditUser />} />
              <Route path="/photo/edit/:id" element={<EditPhoto />} />
              <Route path="*" element={<div>404</div>} />
            </Routes>
          </Container>
          <ToastContainer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
};
