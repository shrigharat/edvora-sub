import "./App.css";
import Header from "./components/header/Header";
import RidesProvider from "./contexts/ridesContext";
import Rides from "./pages/RidesPage";

function App() {
  return (
    <div className="App">
      <RidesProvider>
        <Header />
        <Rides />
      </RidesProvider>
    </div>
  );
}

export default App;
