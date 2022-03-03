export const getValue = (key)=>{
    // console.log(key)
    try {
        const value = localStorage.getItem(key)
        const parsedValue = JSON.parse(value)
       
        return parsedValue
    } catch (error) {
        return undefined
    }
}

export const updateValue = (key,value)=>{
     localStorage.setItem(key,JSON.stringify(value))
}