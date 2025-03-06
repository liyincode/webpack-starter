import HelloWorld from "./components/HelloWorld";
import icon from "@/assets/icon.png";

const App = (
  <div className="flex h-screen flex-col items-center justify-center space-y-4">
    <img src={icon} alt="icon" />
    <HelloWorld />
  </div>
);

export default App;
