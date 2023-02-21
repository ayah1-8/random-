import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [fact, setFact] = useState("");

  const fetchFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) =>
      setFact(res.data.fact)
    );
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="App">
      <button onClick={fetchFact}>Generate Random Cat Fact!</button>
      <p>{fact}</p>
    </div>
  );
}

export default App;
