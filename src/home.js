 


  import React, { useState } from 'react';
  import fire from './config/fire';
  import './home.css';
  import io from "socket.io-client"

  const uri = 'https://ctask1.herokuapp.com/'
  var socket = io.connect(uri)
function Home () {
  const [button1, setButton1] = useState(false)
    const [button2, setButton2] = useState(false)
     
      
        
 
    
  
    function logout() {
          fire.auth().signOut();
      }
    function handlefirstbutton(){
      socket.emit("click1",{
        clicked:true
    })
      };

      function handlesecondbutton(){
        socket.emit("click2",{
          clicked:true
      })
        };
  
        socket.on("click1", data => {
          if (data.clicked === true)
          {
            //document.getElementById("button2").disabled = false
              document.getElementById("button1").disabled = true
          }
      })
  
      socket.on("click2", data => {
          if (data.clicked === true)
          {
            //document.getElementById("button1").disabled = false
              document.getElementById("button2").disabled = true
          }
      })
  
  
  
  
 
          return (
              
    <div className="center"> 
          
  <h1>Welcome to Home</h1>
  <br/>
  <button className="btn btn-danger" id="button1" onClick ={handlefirstbutton} >HIT-1</button>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <button className="btn btn-danger" id="button2" onClick ={handlesecondbutton} >HIT-2</button>
  <br/>
  <br/>
  <button className="btn btn-dark" onClick ={logout} >Logout</button>        
        </div>             
  );
  
  
  
  }
  
  export default Home;