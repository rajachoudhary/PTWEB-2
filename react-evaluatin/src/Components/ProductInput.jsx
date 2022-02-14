import { useEffect, useState } from "react"
import style from "./Product.module.css"

export const ProductInput = ()=>{
    const [showdata,setData] = useState([])

    async function getData() {
        let res = await fetch("http://localhost:3000/products?_sort=category");
        let data = await res.json();
        setData(data)
        console.log(data);
        ;
    }


   useEffect(()=>{
    getData()
    },[])
      
    
    return(
        <div className={style.container}>
            <form>
            <div className={style.input}>
                <label htmlFor="text"> Name Of Product</label>
                <input type="text" placeholder="Name Of Product" />
            </div>
            <div className={style.input}>
                <label htmlFor="text">Cost</label>
                <input type="number" placeholder="Price" />
            </div>
            <div className={style.input}>
                <label htmlFor="text">Image Link</label>
                <input type="url" placeholder="Url" />
            </div>
            <button className={style.button} type="submit">Submit</button>
            </form>
            <div className={style.listContainer}>
                {
                    showdata.map((item)=>{
                        return(
                            <div >
                                <div>
                                <h3>{item.category}</h3>
                                <img src={item.image} alt="image" />
                                <h2>{item.title}</h2>
                                <h4> Rs : {item.cost}</h4>
                                </div>

                            </div>

                            
                        )
                    })
                }
                  
                
            </div>
        </div>
    )
}