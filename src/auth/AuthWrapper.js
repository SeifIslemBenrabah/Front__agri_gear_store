import { createContext, useContext, useState } from "react"
import  RenderRoutes from "../Components/structure/RenderRoutes";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {

     const [ user, setUser ] = useState({name: "", isAuthenticated: false,type:""})

     const login = (userName, password) => {

          // Make a call to the authentication API to check the username
          
          return new Promise((resolve, reject) => {

               if (password === "admin") {
                    setUser({name: userName, isAuthenticated: true,type:'admin'})
                    resolve("success")
               } else if(password ==="client"){
                setUser({name: userName, isAuthenticated: true,type:'client'})
                resolve("success")
               }
                else {
                    reject("Incorrect password")
               }
          })
          
          
     }
     const logout = () => {

          setUser({...user, isAuthenticated: false,type:''})
     }


     return (
          
               <AuthContext.Provider value={{user, login, logout}}>
                    <>
                         <RenderRoutes />
                    </>
                    
               </AuthContext.Provider>
          
     )

}