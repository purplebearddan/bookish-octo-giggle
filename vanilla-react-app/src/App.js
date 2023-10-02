import "./App.css";

function App() {
  const colors = ["red", "green", "blue", "orange"];

  return (
    <main className="mainElement">
      {colors.map((color, index) => (
        <div key={index}>
          <header>
            <strong>{color}</strong>
          </header>
          <p>
            {color !== "green"
              ? `${color}, is a really good color`
              : `${color}, is not a creative color`}
          </p>
        </div>
      ))}
    </main>
  );
}

export default App;
