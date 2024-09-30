import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UsersProvider } from "./contexts/UsersContext";

import Homepage from "./pages/homepage/Homepage";
import Account from "./pages/account/Account";
import Hire from "./pages/hire/Hire";
import NotFound from "./pages/notFound/NotFound";

import Header from "./components/header/Header";
import CandidatesContainer from "./components/candidatesContainer/CandidatesContainer";
import SelectedCandidate from "./components/selectedCandidate/SelectedCandidate";




export default function App() {



  return (
    <UsersProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/hire" element={ <Hire /> } >
            <Route index element={ <Navigate to="candidates" replace /> } />
            <Route path="candidates" element={ <CandidatesContainer  /> } />
            <Route path="candidates/:userId" element={ <SelectedCandidate /> } />
            <Route path="mycandidates" element={ <p>My Candidates</p> } />
          </Route>
          <Route path="/account" element={ <Account /> } />
          <Route path="*" element={ <NotFound /> } /> 
        </Routes>
      </BrowserRouter>
    </UsersProvider>
  )
}
