import "./styles.css";

export default function App() {
  const words = [
    "spray",
    "limit",
    "elite",
    "exuaaaaa",
    "ddddddddqddd",
    "present"
  ];

  const result = words.filter((word) => word.length < 6);

  console.log(words);
  console.log(result);

  return (
    <div className="App">
      <h1>三項演算子</h1>
      {true ? <h1>true</h1> : <h1>false</h1>}
    </div>
  );
}
