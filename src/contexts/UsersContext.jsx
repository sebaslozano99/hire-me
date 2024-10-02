import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";



const UsersContext = createContext();

const BASE_URL_API = "https://randomuser.me/api";


const initialState = {
    candidates: [],
    isLoading: false,
    page: 1,
    error: ""
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

        case "page/nextPage":
          return {
            ...state,
            page: state.page < 10 ? state.page++ : state.page,
          };

        case "page/prevPage":
          return {
            ...state,
            page: state.page > 1 ? state.page-- : state.page,
          };

        case "error/error":
          return {
            ...state,
            error: action.payload,
            isLoading: false
          }
        
        default: throw new Error("Unknown action type!");
    }
}


function UsersProvider({children}) {

    const [{candidates, isLoading, page, error}, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      async function fetchData(){
        dispatch({type: "loading"});

        try{
          const res = await fetch(`${BASE_URL_API}/?page=${page}&results=10&seed=abc`);
  
          if(!res.ok) throw new Error("Something went wrong fetching the data!");
  
          const data = await res.json();
          dispatch({type: "candidates/arrived", payload: data.results});
          
        }
        catch(err){
          dispatch({type: "error/error", payload: err.message || err.description});
        }
        
      }
  
      fetchData();
    }, [page])


    function nextPage(){
      dispatch({type: "page/nextPage"});
    }

    function prevPage(){
      dispatch({type: "page/prevPage"});
    }
  


  return (
    <UsersContext.Provider value={{
        candidates,
        isLoading,
        page,
        error,
        nextPage,
        prevPage
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