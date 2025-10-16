import os


class ToyRobot:
    DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"]
    ICONS = {
        "NORTH": "↑",
        "EAST": "→",
        "SOUTH": "↓",
        "WEST": "←"
    }

    def __init__(self, size=5):
        self.size = size
        self.x = None
        self.y = None
        self.facing = None
        self.placed = False

    def place(self, x, y, facing):
        if self._is_valid_position(x, y) and facing in self.DIRECTIONS:
            self.x, self.y, self.facing = x, y, facing
            self.placed = True
            print(f"Placed at {x},{y},{facing}")
            self.draw_table()
            return True
        else:
            print("Invalid PLACE command.")
            return False

    def move(self):
        if not self.placed:
            print("Robot not yet placed.")
            return False

        new_x, new_y = self.x, self.y
        if self.facing == "NORTH":
            new_y += 1
        elif self.facing == "SOUTH":
            new_y -= 1
        elif self.facing == "EAST":
            new_x -= 1
        elif self.facing == "WEST":
            new_x += 1

        if self._is_valid_position(new_x, new_y):
            self.x, self.y = new_x, new_y
            print(f"Moved to {self.x},{self.y}")
            self.draw_table()
            return True
        else:
            print("Move ignored to prevent falling off the table.")
            return False

    def left(self):
        if not self.placed:
            print("Robot not yet placed.")
            return False
        idx = (self.DIRECTIONS.index(self.facing) - 1) % 4
        self.facing = self.DIRECTIONS[idx]
        print(f"Turned left. Now facing {self.facing}")
        self.draw_table()
        return True

    def right(self):
        if not self.placed:
            print("Robot not yet placed.")
            return False
        idx = (self.DIRECTIONS.index(self.facing) + 1) % 4
        self.facing = self.DIRECTIONS[idx]
        print(f"Turned right. Now facing {self.facing}")
        self.draw_table()
        return True

    def report(self):
        if not self.placed:
            print("Robot not yet placed.")
            return False
        self.draw_table()
        print(f"Output: {self.x},{self.y},{self.facing}")
        return True

    def draw_table(self):
        os.system('cls' if os.name == 'nt' else 'clear')
        print("\nToy Robot Simulator\n")

        for y in reversed(range(1, self.size + 1)):
            row = []
            for x in reversed(range(1, self.size + 1)):
                if self.placed and x == self.x and y == self.y:
                    row.append(self.ICONS[self.facing])
                else:
                    row.append("·")
            print(" ".join(row) + f"  | {y}")
        print("5 4 3 2 1\n")
        print("Legend: ↑=NORTH, →=EAST, ↓=SOUTH, ←=WEST\n")

    def _is_valid_position(self, x, y):
        if 1 <= x <= self.size and 1 <= y <= self.size:
            return True
        else:
            return False
