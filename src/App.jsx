import { Routes, Route, Navigate } from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { About } from "./pages/Aboutpage";
import Blogpage from "./pages/Blogpage";
import { Notfoundpage } from "./pages/Notfoundpage";
import Layout from "./pages/components/Layout";
import SinglePage from "./pages/components/SinglePage";
import CreatePost from "./pages/components/CreatePost";
import EditPost from "./pages/components/EditPost";
import LoginPage from "./pages/components/LoginPage";

import RequireAuth from "./pages/components/hoc/RequireAuth";
import { AuthProvider } from "./pages/components/hoc/AuthProvider";
function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="about-us" element={<Navigate to="/about" replace />} />
            <Route path="posts" element={<Blogpage />} />
            <Route path="posts/:id" element={<SinglePage />} />
            <Route path="posts/:id/edit" element={<EditPost />} />
            <Route
              path="posts/new"
              element={
                <RequireAuth>
                  <CreatePost />
                </RequireAuth>
              }
            />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<Notfoundpage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
