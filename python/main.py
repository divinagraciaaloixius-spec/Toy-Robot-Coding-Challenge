from toy_robot import ToyRobot


def main():
    robot = ToyRobot()
    print("Toy Robot Simulator (Type 'EXIT' to quit)")
    while True:
        command = input("> ").strip().upper()
        if command == "EXIT":
            break
        elif command.startswith("PLACE"):
            try:
                _, args = command.split(" ", 1)
                x, y, facing = args.split(",")
                robot.place(int(x), int(y), facing)
            except Exception:
                print("Invalid PLACE format. Use: PLACE X,Y,FACING")
        elif command == "MOVE":
            robot.move()
        elif command == "LEFT":
            robot.left()
        elif command == "RIGHT":
            robot.right()
        elif command == "REPORT":
            robot.report()
        else:
            print("Unknown command.")


if __name__ == "__main__":
    main()
