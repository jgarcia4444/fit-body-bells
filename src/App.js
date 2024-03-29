
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Questionnaire from "./Pages/Questionnaire";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App bg-black">
      <Router>
        <Routes>
          <Route path="/info-form" element={<Questionnaire/>}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
