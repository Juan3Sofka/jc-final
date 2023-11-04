import { useContext } from "react";
import { TaskContext } from "../context/tasks";
import { Navigate } from "react-router-dom";

export function ProtectedRoute ({children}){
    const {state, dispatch} = useContext(TaskContext)
    if(!state.user){
        return <Navigate to='/' replace /> 
    }
    return children
}