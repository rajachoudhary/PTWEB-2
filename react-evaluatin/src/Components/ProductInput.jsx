import { useEffect, useState } from "react"
import style from "./Product.module.css"

export const ProductInput = ()=>{
    const [showdata,setData] = useState([])
    const [form,showForm] = useState({})
    async function getData() {
        let res = await fetch("http://localhost:3000/products?_sort=category");
        let data = await res.json();
        setData(data)
        // console.log(data);
        ;
    }
    const onPuttingInput = (e)=>{
        let{name,value} = e.currentTarget.
        // console.log(value)
        showForm({...FormData,[name]:value})
        console.log(name);
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        onPuttingInput()
    }

   useEffect(()=>{
    getData()

    },[])

      
    // console.log(Form);
    return(
        <div className={style.container}>
            <form>
            <div className={style.input}>
                <label htmlFor="text"> Name Of Product</label>
                <input type="text" placeholder="Name Of Product" name="product"  onChange={onPuttingInput}/>
            </div>
            <div className={style.input}>
                <label htmlFor="text">Cost</label>
                <input type="number" placeholder="Price" name="price" onChange={onPuttingInput}/>
            </div>
            {/* <div className={style.input}>
                <label htmlFor="text">Image Link</label>
                <input type="url" placeholder="Url" name="url" onClick={onPuttingInput}/>
            </div> */}
            {/* <div className={style.input}>
                <label htmlFor="pet-select">Category</label>
                <select name="pets" id="pet-select">
                    <option value="">Category</option>
                    <option value="vegetable">Vegetable</option>
                    <option value="fruit">Fruit</option>
                </select>
            </div> */}
            <button className={style.button} type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            <div className={style.listContainer}>
                {
                    showdata.map((item)=>{
                        return(
                            <div key={item.id}>
                                <div >
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