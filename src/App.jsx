import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import MatchDetails from "./components/MatchDetails"
import Navbar from "./components/Navbar"
import PointsTable from "./components/PointsTable"
import News from "./components/News"

function App() {

  return (
    <div className="bg-black">
      <div className="w-[100%] sm:w-[80%] md:w-[70%] lg:w-[50%] min-h-screen bg-gray-900 mx-auto">

        <div className="bg-gray-900 text-white ">

          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Home />} />
              <Route path="/matchdetails/:id" element={<MatchDetails />} />
              <Route path="/pointsTable" element={<PointsTable />} />
              <Route path="/news" element={<h1><News/></h1>} />

            </Route>

          </Routes>

        </div>
      </div>

    </div>
  )
}
export default App