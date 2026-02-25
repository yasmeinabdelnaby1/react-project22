import { createContext, useEffect, useState } from "react";

 export const tokenContext = createContext();
export function TokenContextProvider ({children}){

//lazy initionlization
let [userToken , setToken] = useState(()=>{
    return localStorage.getItem('token')
})


//did mount
useEffect (() =>{
   let token = localStorage.getItem('token');
if (localStorage.getItem('token') !== null) {
   setToken(token)
}})

    return <tokenContext.Provider value={{userToken , setToken}} >
        {children}
    </tokenContext.Provider>
}

