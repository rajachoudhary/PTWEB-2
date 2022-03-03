import { getValue } from "../../Utils/LocalStorage";

export const initialaState = {
    
        isuserLogin:getValue("userToken")?true:false,
        tokenId:getValue("userToken")
    
   
}