import Header from "./Header";
import OperatingСonditions from "./OperatingСonditions";
import AddParticipants from "./AddParticipants"
import TableParticipants from "./TableParticipants";
import Calculation from "./Calculation";


function App() {
  return (
    <div className="app">
      <Header />
      <OperatingСonditions /> 
      <AddParticipants />
      <TableParticipants />
      <Calculation />
    </div>
  );
}

export default App;
