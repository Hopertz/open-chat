import {BrowserRouter, Routes, Route} from "react-router-dom"
import React, { useState,useEffect } from "react";
import Home from "./components/Home"
import ChatPage from "./components/ChatPage";
import { connect} from "./api";
 


function App() {
  const [chatMessages, setChatMessages] = useState([])
 

  
    useEffect(() => {
      connect((msg) => {
        console.log("New Message");
        setChatMessages((prevChatMessage) => [...prevChatMessage, msg]);
      });
    }, []);
  


  return (
    <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/chat" element={<ChatPage chatMessages={chatMessages}/>}></Route>
          </Routes>
    </div>
    </BrowserRouter>
    
  );
};

export default App;
