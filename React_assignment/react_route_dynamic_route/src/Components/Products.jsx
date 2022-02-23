import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from '../CssOfAllFile.module.css'


export const Products = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleDetails = (id) => {
    navigate(`/products/${id}`);
  };

  const getData = () => {
    fetch(`http://localhost:3000/products`)
      .then((r) => r.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={style.products}>
     
        {data.map((item) => {
          return (
            <div key={item.id} >
              <div>{item.name}</div>
              <div>
                <img src={item.url} alt="image" style={{width:"250px",height:"250px"}}/>
              </div>
              <button onClick={() => handleDetails(item.id)}>
                More Details
              </button>
            </div>
          );
        })}
      
    </div>
  );
};
