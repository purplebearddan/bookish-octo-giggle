/* eslint-disable react/prop-types */
import "./App.css";

const Card = ({ headerText, onClick, children }) => {
  return (
    <div onClick={onClick} className="flexCol card">
      <h2>{headerText}</h2>
      {children}
    </div>
  );
};

function App() {
  const colors = ["red", "green", "blue", "orange", "pink"];

  return (
    <div className="flexCol">
      <Card headerText={"This is a vite example of react"}>
        {colors.map((color, i) => {
          return (
            <Card
              onClick={() => {
                console.log(color);
              }}
              key={i}
              headerText={color}
            >
              {color} is a nice color, it smells nice
            </Card>
          );
        })}
      </Card>
    </div>
  );
}

export default App;
