import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Toaster} from 'react-hot-toast';
import Home from './Pages/Home';
import NotFound from "./Pages/NotFound";
import Success from "./Pages/Success";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </Router>
  )
}

export default App