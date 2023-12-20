import ReactDOM from "react-dom/client";
import InfoPage from "./components/pages/infoPage/InfoPage";
import Header from "./components/header/Header";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import UserInfoPage from "./components/pages/userInfoPage/UserInfoPage";
import AdminPage from "./components/pages/adminPage/AdminPage";

function App() {
  const AuthContext = React.createContext();
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" Component={InfoPage}/>
      <Route path="/user" Component={UserInfoPage}/>
      <Route path="/admin" Component={AdminPage}/>
    </Routes>
      {/* <InfoPage /> */}
      {/* <UserInfoPage/> */}
      {/* <AdminPage/> */}
    </BrowserRouter>
    </>
  );
}

export default App;
