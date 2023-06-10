import { useState, useEffect } from "react";
import { db } from "../Firebase/config";
import { collection, getDocs } from 'firebase/firestore';

const UseFirestore = () => {
  const [imgs, setImgs] = useState([]);

  const collectionRef = collection(db, "FFHPHOTOSHOOT");

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
    getImgList();
  }, []);

  return { imgs };
};

export default UseFirestore;
