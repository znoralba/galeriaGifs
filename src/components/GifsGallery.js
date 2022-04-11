import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifsGalleryItem } from './GifsGalleryItem';

export const GifsGallery = ({ category }) => {

  const {data:images, loading } = useFetchGifs( category );
  return (
    <>
      <h2> { category } </h2>
      { loading && <p className='animate__animated animate__bounce animate__delay-2s'>Cargando...</p> }
      <div className='card-grid'>
        {
          images.map((img) => (
            <GifsGalleryItem
              key={img.id}
              {...img}
            />
          ))
        }
      </div>
    </>
  );

}
