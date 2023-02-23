import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import Login from "./pages/Login";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Home from "./pages/Home";
import { useProfile } from "./utils/userProfile";

const App = () => {
  const [user] = useProfile();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <BottomNav />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <BottomNav />
            </>
          }
        />
        <Route
          path="/connect"
          element={
            <>
              <Header />
              <Connect />
              <BottomNav />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
