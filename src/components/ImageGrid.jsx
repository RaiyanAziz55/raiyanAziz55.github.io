import React from 'react';
import UseFirestore from '../Hooks/useFirestore';
import '../pages/pageCss/Portfolio.css';



function ImageGrid( {folderName, setSelectedImg}) {
  const { imgs } = UseFirestore(folderName);
  console.log(imgs);
  

  return (
    <body>
      <div className='img-wrap'>
        {imgs && imgs.map((img) => (
          <img loading='lazy' src={img.url} alt="sumthing" key={img.id} 
          onClick = {() => setSelectedImg(img.url)}
          />
        ))}
      </div>
    </body>
  );
}

export default ImageGrid;