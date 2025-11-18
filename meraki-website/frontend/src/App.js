import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(res => res.text())
      .then(text => console.log(text));
  }, []);

  return (
    <div>
      <h1>MERN Test</h1>
    </div>
  );
}

export default App;