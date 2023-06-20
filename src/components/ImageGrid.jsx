import React from 'react';
import UseFirestore from '../Hooks/useFirestore';
import '../pages/pageCss/Portfolio.css';



function ImageGrid( {folderName, setSelectedImg}) {
  const { imgs } = UseFirestore(folderName);
  console.log(imgs);
  

  return (
    <body>
      <h1 className='paget1'>FFH COLLECTION</h1>
      <div className='img-wrap'>
        {imgs && imgs.map((img) => (
          <img src={img.url} alt="sumthing" key={img.id} 
          onClick = {() => setSelectedImg(img.url)}
          />
        ))}
      </div>
    </body>
  );
}

export default ImageGrid;