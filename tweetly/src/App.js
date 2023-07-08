// import Mockman from "mockman-js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Features/SignIn/SignIn";
import SignUp from "./Features/SignUp/SignUp";
import { Explore } from "./Features/Explore/Explore";
import { Bookmark } from "./Features/Bookmark/Bookmark";
import { Profile } from "./Features/Profile/Profile";
import { MainContainer } from "./components/MainContainer/MainContainer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useData } from "./Contexts/Data/DataContext";
import { Home } from "./Features/Home/Home";
import { AnyProfile } from "./Features/Profile/AnyProfile";
import { PageNotFound } from "./Features/PageNotFound/PageNotFound";
import { PostDetails } from "./Features/PostDetails/PostDetails"
import { Loader } from "./components/Loader/Loader";

function App() {
  const {isLoading} = useData();
  return (
    <div >
      <ToastContainer position="top-center" autoClose={1100}
      reverseOrder={false}/>
      {isLoading && <Loader/>}
    <Routes>
      <Route
        path="/"
        element={
          <MainContainer>
            <Home/>
          </MainContainer>
        }
      />
      <Route
        path="/explore"
        element={
          <MainContainer>
            <Explore />
          </MainContainer>
        }
      />

      <Route
        path="/bookmark"
        element={
          <MainContainer>
            <Bookmark />
          </MainContainer>
        }
      />
      <Route
        path="/profile"
        element={
          <MainContainer>
            <Profile />
          </MainContainer>
        }
      />
      <Route
          path="/post/:_id"
          element={
            <MainContainer>
              <PostDetails />
            </MainContainer>
          }
        />
      <Route
        path="/profile/:userHandler"
        element={
          <MainContainer>
            <AnyProfile/>
          </MainContainer>
        }
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/mockman" element={<Mockman />} /> */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </div>
  );
}

export default App;
