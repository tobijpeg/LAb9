import { VirtualList } from "./components/VirtualList";
import { RegularList } from "./components/RegularList";

function App() {
  return (
    <div>
      <h1>Lab 9.2 - Virtualization for Large Lists</h1>

      <h2>Virtualized List</h2>
      <VirtualList />

      <hr />

      <h2>Regular List</h2>
      <RegularList itemCount={1000} />
    </div>
  );
}

export default App;