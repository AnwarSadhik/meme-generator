import React, { useState } from "react";
import MemeCard from "./MemeCard";

 
const MemeGrid = ({ memes,setMeme }) => {
  const [visible, setVisible] = useState(8);

  const showMoreItems = () => {
    setVisible((preValue) => preValue + 4);
  };


  return (
    <section className="cards">
      {memes.slice(0, visible).map((meme) => (
        <MemeCard setMeme = {setMeme} key={meme.id} memes={meme} />
      ))}
      {/* <div className="loadMore"> */}
        <button className="loadMore" onClick={showMoreItems}>Load More Templates</button>
      {/* </div> */}
    </section>
  );
};

export default MemeGrid;
