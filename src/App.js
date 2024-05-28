import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  //const [range, setRange] = useState(1);
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("June 21 2027");
  // const [date, setDate] = useState(date);
  date.setDate(date.getDate() + count);
  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div className="step">
        <input 
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        <span>{step}</span>
      </div>

      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p className="text">
        {count === 0
          ? "Today is "
          : count < 0
          ? `${Math.abs(count)} days ago was `
          : `${count} days from today is `}
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div className="reset">
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
