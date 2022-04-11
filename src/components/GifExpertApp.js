import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifsGallery } from './GifsGallery';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Naruto Shippuden']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories = { setCategories } />
      <hr />
      <ol>
        {
          categories.map( category => (
            <GifsGallery 
              key = { category }
              category = { category }
            />
            
          ))
        }
      </ol>
      
    </>
  );
}
