import { Header } from "./components/Header";
import { Workspace } from "./components/workspace/Workspace";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 grid grid-cols-12 grid-rows-12">
      <Header />
      <Workspace />
    </div>
  );
}

export default App;
