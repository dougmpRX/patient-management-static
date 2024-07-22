import { Container } from "@mui/material";
import "./App.css";
import PatientsCard from "./components/PatientsCard";

function App() {
  return (
    <div className="App bg-slate-500 h-screen">
      <Container maxWidth="lg">
        <h1 className="text-6xl mb-5">Application Title</h1>
        <PatientsCard />
      </Container>
    </div>
  );
}

export default App;
