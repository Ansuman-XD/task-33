import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobForm from "./assets/components/JobPostingForm"; // Correct import
import ApplicationSubmitted from "./assets/components/ApplicationSubmitted";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobForm />} />
        <Route path="/application-submitted" element={<ApplicationSubmitted />} />
      </Routes>
    </Router>
  );
}

export default App;
