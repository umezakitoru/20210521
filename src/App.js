import "./styles.css";

export default function App() {
  const words = [
    "spray",
    "limit",
    "elite",
    "exuaaaaa",
    "ddddddddddd",
    "present"
  ];

  const result = words.filter((word) => word.length < 6);

  console.log(words);
  console.log(result);

  return (
    <div className="App">
      <h1>filter</h1>
    </div>
  );
}
