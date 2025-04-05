import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Brain, Calendar, Clock, Compass, Gift, Lightbulb, MapPin, Utensils } from "lucide-react"
import Scholarship from "./page/Scholarship"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./page/Landing";

export default function LandingPage() {
  return (
    <>
     <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Landing />} />
        <Route path="/scholarship" element={<Scholarship />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

