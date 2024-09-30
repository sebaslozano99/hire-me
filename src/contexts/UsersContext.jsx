import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";



const UsersContext = createContext();

const BASE_URL_API = "https://randomuser.me/api";


const initialState = {
    candidates: [],
    isLoading: false,
}


function reducer(state, action){
    switch(action.type){
        case "loading":
            return {
                ...state,
                isLoading: true,
            };

        case "candidates/arrived":
            return {
                ...state,
                isLoading: false,
                candidates: action.payload,
            }
        
        default: throw new Error("Unknown action type!");
    }
}


function UsersProvider({children}) {

    const [{candidates, isLoading}, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      async function fetchData(){
        dispatch({type: "loading"});

        try{
          const res = await fetch(`${BASE_URL_API}/?results=50`);
  
          if(!res.ok) throw new Error("Something went wrong fetching the data!");
  
          const data = await res.json();
          console.log(data);
          dispatch({type: "candidates/arrived", payload: data.results});
          
        }
        catch(err){
          console.log(err.message || err.description);
        }
        finally{
          console.log("finished");
        }
      }
  
      fetchData();
    }, [])


  return (
    <UsersContext.Provider value={{
        candidates,
        isLoading,
    }} >
      {children}
    </UsersContext.Provider>
  )
}


function useUsers(){
    const context = useContext(UsersContext);
    if(context === undefined) throw new Error("Unknown action type!");
    return context;
}


export { UsersProvider, useUsers };


UsersProvider.propTypes = {
    children: PropTypes.node,
}