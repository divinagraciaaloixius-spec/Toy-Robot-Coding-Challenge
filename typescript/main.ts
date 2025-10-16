import * as readline from "readline";
import { ToyRobot } from "./toy_robot";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const robot = new ToyRobot();

console.log("Toy Robot Simulator (Type 'EXIT' to quit)");

rl.on("line", (input: string) => {
  const command = input.trim().toUpperCase();
  if (command === "EXIT") {
    rl.close();
    return;
  }

  if (command.startsWith("PLACE")) {
    try {
      const [, args] = command.split(" ");
      const [x, y, facing] = args.split(",");
      robot.place(Number(x), Number(y), facing);
    } catch {
      console.log("Invalid PLACE format. Use: PLACE X,Y,FACING (1-5 range)");
    }
  } else if (command === "MOVE") {
    robot.move();
  } else if (command === "LEFT") {
    robot.left();
  } else if (command === "RIGHT") {
    robot.right();
  } else if (command === "REPORT") {
    robot.report();
  } else {
    console.log("Unknown command.");
  }
});