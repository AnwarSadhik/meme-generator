import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import MemeGrid from './Components/Memes/MemeGrid';
import EditMeme from './Components/Memes/EditMeme';

function App() {

  const [templates,setTemplates] = useState([])
  const [meme,setMeme] = useState(null);

  useEffect(() => {

    const fetchTemplates = () => {
      fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(result => {
        setTemplates(result.data.memes)
        // console.log(result.data.memes)
      })
    }
    fetchTemplates();
  },[])



  return (
    <div className="container">
      <Header setMeme={setMeme} />
      {meme == null ? <MemeGrid memes={templates} setMeme={setMeme} />
       : (<EditMeme setMeme={setMeme} meme={meme} /> 
       )} 
      
    </div>
  );
}

export default App;
