import axios from "axios"

 export const GET_TACHE="GET_TACHE";
 export const ADD_TACHE ="ADD_TACHE";
 export const DELETE_TACHE ="DELETE_TACHE";
 export const getTache = ()=>{
     return(dispatch)=>{
        return axios.get("http://localhost:3000/taches").then((res)=>{
            
            dispatch({
               type:GET_TACHE,
               payload:res.data,
            })
        })
     }
}

export const addTache = (data)=>{
   return(dispatch)=>{
      return axios.post("http://localhost:3000/taches",data).then((res)=>{
          
          dispatch({
             type:ADD_TACHE,
             payload:data,
          })
      })
   }
}
export const deleteTache = (tacheId)=>{
   return(dispatch)=>{
      return axios.delete(`http://localhost:3000/taches/${tacheId}`).then((res)=>{
          
          dispatch({
             type:DELETE_TACHE,
             payload:tacheId,
          })
      })
   }
}