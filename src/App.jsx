import Scholarship from "./page/Scholarship"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./page/Landing";
import LostAndFound from "./page/LostAndFound";
import ReportLostItem from "./page/Lost";
import ReportFoundItem from "./page/Found";

export default function LandingPage() {
  return (
    <>
     <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Landing />} />
        <Route path="/lost-and-found" element={<LostAndFound />} />
        <Route path="/lost" element={<ReportLostItem />} />
        <Route path="/found" element={<ReportFoundItem />} />
        <Route path="/scholarship" element={<Scholarship />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

