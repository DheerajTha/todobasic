import React from 'react'

const Netflixlist = (props) => {

  const { img_url, name, rating, description, cast, genre, watch_url} = props.data;
  
  return (
    <div className='btn-box-shadow'>
        
              <img
                src={img_url}
                alt={name}
                width={300}
                height={200}
              />
              <h2>Name: {name}</h2>
              <p>Rating: {rating}</p>
              <p>Description: {description}</p>
              <p>Caste: {cast}</p>
              <p>Genre: {genre}</p>
              <a href={watch_url}>
                <button>Watch Now</button>
              </a>
      
    </div>
  )
}

export default Netflixlist;
