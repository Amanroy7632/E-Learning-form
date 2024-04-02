import {createContext,useContext} from "react";
export const ProgressContext=createContext({
    count:20,
    step:1,
    isVisible:true,
    setVisible:()=>{},
    nextProgress:()=>{},
    prevProgress:()=>{},
})
export const ProgressContextProvider=ProgressContext.Provider
export default function useProgress(){
   return useContext(ProgressContext)
}