import React, {useState} from 'react';

const PhotoList = ({category}) => {
    const [Photos] = useState([
        {
            name: "run-link",
            category: "websites",
            description: 'A photo of the main page for run-buddy.'
        },
        {
            name: "scatterbrain",
            category: "websites",
            description: 'A photo of the main page for scatterbrain.'
        },
        {
            name: "weather-app",
            category: "websites",
            description: 'A photo of the main page for a weather-app.'
        },
        {
            name: "week1",
            category: "websites",
            description: 'A photo of the main page for a ficticious marketing company.'
        },
        {
            name: "background",
            category: "cover",
            description: 'A photo of the main page background.'
        },
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category)

    return (
        <div>
          <div className="flex-row">
            {currentPhotos.map((image, i) => (
              <img
                src={require(`../../assets/${category}/${i}.jpg`)}
                alt={image.name}
                className="img-thumbnail mx-1"
                key={image.name}
              />
            ))}
          </div>
        </div>
      );
}

export default PhotoList;