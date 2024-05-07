import { BrowserRouter as Router,Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import Home from "./Component/Home/Index";
import PdfCreater from "./Component/PdfMaker/PdfCreater";
import './App.css'
import Setting from "./Component/Setting/Index";
import { useEffect, useState } from "react";
import { useSelect } from "./Context/AllContext";
import Profile from "./Component/profile/Profile";

function App() {
  const [Islog,setIslog]=useState();
  const {setUser}= useSelect();
  const navigate= useNavigate()
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('user')));
    if(JSON.parse(localStorage.getItem('user'))!==null){
      setIslog(true)
    }
    else{
      setIslog(false);
      navigate('/signup')
    }
  },[])
  return (
    <div className="App">
      
      <div className="App">
        <Routes>
        {Islog && <Route path="/" exact element={<Home/>} />}
        <Route path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        {Islog && <Route exact path="/Pdf-create" element={<PdfCreater/>} />}
        {Islog && <Route exact path="/setting" element={<Setting/>} />}
        {Islog && <Route exact path="/profile" element={<Profile/>} />}
        </Routes>
      </div>
    </div>
  );
}

export default App;
