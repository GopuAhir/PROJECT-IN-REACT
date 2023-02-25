import React, { useState, useEffect } from 'react'

const CollectionItem = () => {
  const [data, setData] = useState([]);
  const [collectionId, setCollectionId] = useState('');
  const [collectionData, setCollectionData] = useState(null);


  console.log(data,"api");
  console.log(collectionId.split().map(ele=>ele),"123");

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setData(data.products))
      .catch((error) => console.error(error));
  }, []);


  useEffect(() => {
    const CollectId = localStorage.getItem('Collect');
    setCollectionId(CollectId);
  }, []);

  //   const CollectId = localStorage.getItem('Collect')

  // var a = CollectId.split(',')

  // var b = a.map(ele=>console.log(ele))
  // console.log(b);


  // useEffect(() => {

  //   var CollectDataId = a.map(data=>("map",data))
  //   console.log(CollectDataId,"1585");

  // }, [])



  // useEffect(() => {
  //   if (CollectId) {

  //     const filteredData = data.filter(item => item.id === CollectId);
  //     setCollectionData(filteredData[0]);

  //   }
  // }, [CollectId, data]);

  // if (!collectionData) {
  //   return <div>Loading...</div>;
  // }

  return 
  // (
    // <div>
    //   <h1>{collectionData.name}</h1>
    //   <p>{collectionData.description}</p>
    // </div>
  // );
}

export default CollectionItem;
