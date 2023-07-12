import "./styles.css";
import Select from "./Components/Select";

export default function App() {
  const options = [
    {
      label: "Deva",
      value: "Deva"
    },
    {
      label: "Prasanth",
      value: "Prasanth"
    },
    {
      label: "Meera",
      value: "Meera"
    },
    {
      label: "Raj",
      value: "Raj"
    }
  ];
  return (
    <div className="App">
      <Select options={options} />
    </div>
  );
}
