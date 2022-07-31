import React from 'react'

const MemeCard = ( {memes,setMeme} ) => {

  return (
    <div className='card'>
        <img onClick={() => {
          setMeme(memes)
        }} src={memes.url} alt="" />
    </div>
  )
}

export default MemeCard