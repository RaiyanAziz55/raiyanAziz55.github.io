import { useState, useEffect } from "react";
import { db } from "../Firebase/config";
import { collection, getDocs } from 'firebase/firestore';

const UseFirestore = (folderName) => { 
  const [imgs, setImgs] = useState([]);

  const collectionRef = collection(db, folderName);

  const getImgList = async () => {
    try {
      const data = await getDocs(collectionRef);
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImgs(filteredData);
      console.log(imgs);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getImgList();
  }, []);

  return { imgs };
};

export default UseFirestore;
