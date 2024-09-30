import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import Homepage from "./pages/homepage/Homepage";
import Account from "./pages/account/Account";
import Hire from "./pages/hire/Hire";
import NotFound from "./pages/notFound/NotFound";

import Header from "./components/header/Header";
import CandidatesContainer from "./components/candidatesContainer/CandidatesContainer";




const BASE_URL_API = "https://randomuser.me/api";


export default function App() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    async function fetchData(){
      try{
        const res = await fetch(`${BASE_URL_API}/?results=50`);

        if(!res.ok) throw new Error("Something went wrong fetching the data!");

        const data = await res.json();
        console.log(data);
        setCandidates(data.results);
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
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={ <Homepage /> } />

        <Route path="/hire" element={ <Hire /> } >
          <Route index element={ <Navigate to="candidates" replace /> } />
          <Route path="candidates" element={ <CandidatesContainer candidates={candidates} /> } />
          <Route path="candidates/:userOd" element={ <div>Candidate userId</div> } />
          <Route path="mycandidates" element={ <p>My Candidates</p> } />
        </Route>

        <Route path="/account" element={ <Account /> } />
        <Route path="*" element={ <NotFound /> } />
        
      </Routes>
    </BrowserRouter>
  )
}
