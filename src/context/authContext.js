import { createContext,useEffect,useState } from "react";

export const AuthContext= createContext()

export const AuthContextProvider=({children})=>{

const[currentUser,setCurrentUser]=useState(

JSON.parse(localStorage.getItem("user")) || null)

const login = ()=>{
setCurrentUser(
    {id:1,
        name:"Mr.j",
        profilePic:"https://wallpapers.com/images/hd/instagram-profile-pictures-5ey9mbt5wegf2xl4.jpg"})
}

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser])

return(
    <AuthContext.Provider value={{currentUser,login}}>
        {children}
        </AuthContext.Provider>
)    
}