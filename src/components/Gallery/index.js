import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/websites/0.jpg";


function Gallery(props) {
    const currentCategory = {
      name: "websites",
      description:
        "Photos of my website projects so far",
    };
    return (
      <section>
        <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
        <p>{currentCategory.name}</p>
        <div>
          <img
            src={photo}
            alt="Website Example"
            className="img-thumbnail mx-1"
          />
      </div>
      </section>
    );
  }

export default Gallery;