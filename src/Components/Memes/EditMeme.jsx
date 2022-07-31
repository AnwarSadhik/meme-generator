import React from "react";
import { useState, useEffect } from "react";

const EditMeme = ({ meme,setMeme }) => {
  //   console.log(meme);

  const [form, setForm] = useState({
    template_id: meme.id,
    username: "qwertyuiop_123",
    password: "qwertyuiop@123",
    boxes: [],
  });

  const generateMeme = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
    form.boxes.map((box,index) => {
        url += `&boxes[${index}][text]=${box.text}`; 
    });
    fetch(url).then(res => res.json())
    .then(data => {
        console.log(data)
        setMeme({...meme, url:data.data.url})
    })
    console.log(url);
  };

  return (
    <div className="edit-template">
      <div className="template-container">
        <img src={meme.url} alt="" />
        <div className="vl"></div>
        <div className="input-boxes">
          {[...Array(meme.box_count)].map((_, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Meme Caption ${index}`}
              onChange={(e) => {
                const newBoxes = form.boxes;
                newBoxes[index] = { text: e.target.value };
                setForm({ ...form, boxes: newBoxes });
              }}
            />
          ))}
          <button onClick={generateMeme} type="submit">
            Generate Meme
          </button>{" "}
          <button onClick={() => {
            setMeme(null)
          }}>Choose Template</button>
        </div>
      </div>
    </div>
  );
};

export default EditMeme;
