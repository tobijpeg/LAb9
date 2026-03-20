import { Dashboard } from "./components/Dashboard";
import { ParentComponent } from "./components/Button";

function App() {
  return (
    <div>
      <Dashboard />
      <hr />
      <ParentComponent />
    </div>
  );
}

export default App;