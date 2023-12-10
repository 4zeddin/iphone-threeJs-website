import DisplaySection from "./components/DisplaySection";
import Jumbatron from "./components/Jumbatron";
import Nav from "./components/Nav";
import SoundSection from "./components/SoundSection";

function App() {

  return (
    <div className="App">
      <Nav />
      <Jumbatron />
      <SoundSection />
      <DisplaySection />
    </div>
  );
}

export default App;
