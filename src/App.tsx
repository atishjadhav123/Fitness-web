import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./componants/Navbar"

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App