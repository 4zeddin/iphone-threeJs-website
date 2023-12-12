import DisplaySection from "./components/DisplaySection";
import Jumbatron from "./components/Jumbatron";
import Nav from "./components/Nav";
import SoundSection from "./components/SoundSection";
import WebgiViewer from "./components/WebgiViewer";

function App() {

  return (
    <div className="App">
      <Nav />
      <Jumbatron />
      <SoundSection />
      <DisplaySection />
      <WebgiViewer />
    </div>
  );
}

export default App;
