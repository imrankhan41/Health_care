import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut  } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const auth=getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoggle=()=>{
        setIsLoading(true)
       signInWithPopup(auth,googleProvider)
       .then(result=>{
              setUser(result.user)
        })
        .finally(()=>setIsLoading(false));
        
    }
    const logOut =()=>{
        setIsLoading(true);
        signOut(auth)
        .then(() => {
           setUser({})
          })
          .finally(()=>setIsLoading(false));
    }
    useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            } 
            else{
                setUser({})
            }
            setIsLoading(false)
          });
          return ()=> unsubscribed;
    },[])
    return {
        user,
        signInUsingGoggle,
        logOut,signInWithPopup,
        isLoading
    }
}
export default useFirebase;
