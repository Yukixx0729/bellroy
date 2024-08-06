import { useState } from "react";
import "./App.css";

const gridSize = 5;
const directions = ["L", "R", "U", "D"];

function App() {
  const [robot, setRobot] = useState({ x: 0, y: 0, direction: 2 });
  const [warning, setWarning] = useState(null);
  const [rotation, setRotation] = useState(0);
  const moveForward = () => {
    setWarning(null);
    let { x, y, direction } = robot;
    switch (directions[direction]) {
      case "U":
        y < gridSize - 1
          ? (y += 1)
          : setWarning("Please change your direction.");

        break;
      case "R":
        x < gridSize - 1
          ? (x += 1)
          : setWarning("Please change your direction.");
        break;
      case "D":
        y > 0 ? (y -= 1) : setWarning("Please change your direction.");
        break;
      case "L":
        x > 0 ? (x -= 1) : setWarning("Please change your direction.");
        break;
      default:
        break;
    }
    setRobot({ x, y, direction });
  };

  const rotateDirection = (newDirection) => {
    setWarning(null);
    const directionIndex = directions.indexOf(newDirection);
    if (directionIndex !== -1) {
      setRobot({ ...robot, direction: directionIndex });
    }
  };

  const getRotationAngle = () => {
    switch (directions[robot.direction]) {
      case "U":
        return 0;
      case "R":
        return 90;
      case "D":
        return 180;
      case "L":
        return 270;
      default:
        return 0;
    }
  };

  return (
    <div>
      <h1>Belbot Simulator</h1>

      <div className="grid">
        {" "}
        {Array.from({ length: gridSize }, (_, row) => (
          <div className="row" key={row}>
            {Array.from({ length: gridSize }, (_, col) => (
              <div
                className={`cell ${
                  robot.x === col && robot.y === gridSize - row - 1
                    ? "robot"
                    : ""
                }`}
                key={col}
              >
                {robot.x === col && robot.y === gridSize - row - 1 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 99 58"
                    className="logo"
                    style={{
                      transform: `rotate(${getRotationAngle()}deg)`,
                      transition: "transform 0.5s ease-in-out",
                    }}
                    height="auto"
                    width="70"
                  >
                    <path d="M11.9 49.6c-2.1 0-4.2-.7-5.8-2.2A8.2 8.2 0 0 1 3 41.6c0-.2 0-.4-.1-.6V24.7s4.1 0 4.1 3.7v4.7l.6-.3c.1 0 .1-.1.1-.1.1 0 .2-.1.2-.1a8.2 8.2 0 0 1 4.2-1.1h.4c1.9.1 3.5.6 5 1.7 2.1 1.6 3.3 3.6 3.7 6 .3 2.1 0 4.1-1 5.8-1.5 2.5-3.5 4-6.2 4.5-.8 0-1.5.1-2.1.1zm.2-14.3c-.3 0-.6 0-.9.1-2.6.3-4.2 2.4-4.2 5v.4c0 1.5.6 2.7 1.7 3.6.9.8 2.2 1.3 3.4 1.3.9 0 1.9-.3 2.7-.7 1.9-1.1 2.7-2.9 2.4-5.2-.3-2.2-2.1-4.5-5.1-4.5zM69.1 49.6c-2.4 0-4.7-.9-6.5-2.7a8.78 8.78 0 0 1-2.7-6c-.1-2.5.7-4.9 2.5-6.7 1.8-1.8 4.1-2.9 6.7-2.9 5 0 9.2 4.1 9.2 9.1 0 2.4-.9 4.6-2.6 6.4a9.13 9.13 0 0 1-6.1 2.8h-.5zm.1-14.3c-.3 0-.6 0-1 .1a5.1 5.1 0 0 0-4.3 5.2v.4c.1 2.8 2.3 4.9 5.1 4.9.9 0 1.9-.3 2.7-.7 1.9-1.1 2.6-2.9 2.3-5.2-.1-2.5-2-4.7-4.8-4.7zM40.2 24.7v24.6h4.3V28.4c-.1-3.6-4.3-3.7-4.3-3.7zM46.4 24.7v24.6h4.3V28.4c0-3.9-4.3-3.7-4.3-3.7z" />
                    <path d="M52.6 49.3v-2.7-6.4c0-1.4.1-2.9.7-4.4.9-2.1 2.5-3.3 4.7-4 1.8-.5 3.4-.4 3.4-.4v3.9s-1 0-2 .3c-1.4.4-2.3 1.3-2.5 2.8-.1.6-.2 1.4-.2 2.2v8.7h-4.1zM79.9 51.7c1.8 0 2.3.9 2.7 1.3.6.5 1.4.8 2.1.8 2.3 0 4.1-2.1 4.1-4.1v-.9c-1 .6-2.1.8-3.2.8-4.1 0-7.3-3.4-7.3-7.6V31.6h4.1v10.2c0 1.9 1.5 3.6 3.2 3.6 1.9 0 3.2-1.6 3.2-3.6v-6.5c0-3.7 4.1-3.7 4.1-3.7v18c0 4.2-3.1 8.1-8.2 8.1-3.1 0-5.9-1.8-7.1-4.7-.4-.8-.5-1.4-.5-1.4s1.3.1 2.8.1zM30.3 45.9c-1.7 0-3.1-.8-4-2l13-4.6c-.6-3-1.8-4.9-3.6-6.2a9.3 9.3 0 0 0-7-1.5c-.6.1-1 .2-1.6.4a8.96 8.96 0 0 0-5.8 9.3 9 9 0 0 0 3.2 6.2c1.8 1.5 4 2.2 6.3 2.2 1 0 1.9-.2 2.9-.6 3.7-1.3 5.4-4.1 5.8-6.7h-2.4c-1.5 0-2.1 1-2.5 1.4a5.94 5.94 0 0 1-4.3 2.1zm-1.7-10.3c.1 0 .1 0 .2-.1H29.1c.4-.1.8-.2 1.3-.2.9 0 1.8.3 2.6.7.4.2.7.5 1 .8V37.1l.4.4-9.2 3.2v-.5c.1-2.2 1.4-3.9 3.4-4.6zM75.6 5.5c-.7 0-1.3.6-1.3 1.3 0 .7.7 1.4 1.5 1.2.3 1.1.9 2.1 1.8 2.8l.4.2.4-.3c.7-.6 1.4-1.7 1.7-2.8h.3c.7 0 1.3-.6 1.3-1.3s-.7-1.2-1.4-1.2c-.8 0-1.3.6-1.3 1.3 0 .9-.5 2.1-1.1 2.9-.6-.7-1-1.8-1.1-2.9.1-.6-.5-1.2-1.2-1.2zm16.5 11.6c-2.5-6.2-6.1-8-7.6-8.6.1-.4.1-.7.1-1.2 0-3.6-3-6.5-6.6-6.5-3.5 0-6.3 2.8-6.8 6.4-.7 8.7 5 13.5 7.8 15.7 1.6 1.2 2.4 2.1 1.5 3.6-.6.8-1.2 2-1.8 2.2-1.6.3-2.1 1.3-2.1 1.3H78c1.8 0 2.3-.1 4.1-3 1.7-2.9-1-4.5-2.1-5.4-2.8-2.1-8-6.4-7.3-14.2v-.1c.3-3 2.5-5.2 5.4-5.2a5.16 5.16 0 0 1 3.7 8.8c-.9 1-2.2 1.5-3.6 1.5-.5 0-.9-.1-1.3-.2-1.4-.4-2 .6-2 .6l-.1.1.1.1c.9.6 2.2.9 3.3.9 1.8 0 3.4-.6 4.6-1.9.6-.6 1.1-1.3 1.4-2 1.2.5 4.4 2.1 6.7 7.7.6 1.4 1.1 2.8 1.6 4-1.8 0-8.1-.2-11.2-5.1-.8-1.3-2.1-1-2.1-1 3.2 7.7 12.3 7.5 14 7.6.8 2 1.5 3.6 1.8 4.5-.7 0-2.1-.3-3.7-1.7a7.11 7.11 0 0 0-5.1-1.9l-4 6.3s1.9 0 2.7-1.2l2.2-3.5c1.1.1 2.2.6 3.3 1.5 2.1 1.7 3.4 1.9 4.7 1.9 1.2.1 1.9-.3 1.9-.3s-2.4-5.6-4.9-11.7z" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="control">
        <div className="controlGroup">
          {" "}
          <button onClick={moveForward} className="btn">
            Move
          </button>
          <button
            onClick={() => setRobot({ x: 0, y: 0, direction: 0 })}
            className="btn"
          >
            Reset
          </button>
        </div>
        <div className="controlGroup">
          {" "}
          <button onClick={() => rotateDirection("L")} className="btn">
            Rotate Left
          </button>
          <button onClick={() => rotateDirection("R")} className="btn">
            Rotate Right
          </button>
          <button onClick={() => rotateDirection("U")} className="btn">
            Rotate Up
          </button>
          <button onClick={() => rotateDirection("D")} className="btn">
            Rotate Down
          </button>
        </div>
      </div>
      {warning && <p className="warning">{warning}</p>}
    </div>
  );
}

export default App;
