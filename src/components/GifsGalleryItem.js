import React from 'react';

export const GifsGalleryItem = ( { title, url } ) => {

  return (
    <div className='card animate__animated animate__bounce'>
      <center>
        <img src = { url } alt = { title} />      
        <p> { title }</p>
      </center> 
    </div>
  )
}
