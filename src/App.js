import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CrudApp from "./components/CrudApp.jsx";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="app">
      <Container fluid="md">
        <Router>
          <Routes>
            <Route path="/" element={<CrudApp />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
