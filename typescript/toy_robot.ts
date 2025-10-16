export class ToyRobot {
  private size: number;
  private x: number | null = null;
  private y: number | null = null;
  private facing: string | null = null;
  private placed = false;

  private readonly DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"] as const;
  private readonly ICONS: any = {
    NORTH: "↑",
    EAST: "→",
    SOUTH: "↓",
    WEST: "←",
  };

  constructor(size = 5) {
    this.size = size;
  }

  public place(x: number, y: number, facing: string) {
    if (this.isValidPosition(x, y) && this.DIRECTIONS.includes(facing as any)) {
      this.x = x;
      this.y = y;
      this.facing = facing;
      this.placed = true;
      console.log(`Placed at ${x},${y},${facing}`);
      this.drawTable();
    } else {
      console.log("Invalid PLACE command.");
    }
  }

  public move() {
    if (!this.placed || this.x === null || this.y === null || this.facing === null) {
      console.log("Robot not yet placed.");
      return;
    }

    let newX = this.x;
    let newY = this.y;

    switch (this.facing) {
      case "NORTH":
        newY += 1;
        break;
      case "SOUTH":
        newY -= 1;
        break;
      case "EAST":
        newX -= 1;
        break;
      case "WEST":
        newX += 1;
        break;
    }

    if (this.isValidPosition(newX, newY)) {
      this.x = newX;
      this.y = newY;
      console.log(`Moved to ${this.x},${this.y}`);
      this.drawTable();
    } else {
      console.log("Move ignored to prevent falling off the table.");
    }
  }

  public left() {
    if (!this.placed || this.facing === null) {
      console.log("Robot not yet placed.");
      return;
    }
    const idx = (this.DIRECTIONS.indexOf(this.facing as any) - 1 + 4) % 4;
    this.facing = this.DIRECTIONS[idx];
    console.log(`Turned left. Now facing ${this.facing}`);
    this.drawTable();
  }

  public right() {
    if (!this.placed || this.facing === null) {
      console.log("Robot not yet placed.");
      return;
    }
    const idx = (this.DIRECTIONS.indexOf(this.facing as any) + 1) % 4;
    this.facing = this.DIRECTIONS[idx];
    console.log(`Turned right. Now facing ${this.facing}`);
    this.drawTable();
  }

  public report() {
    if (!this.placed || this.x === null || this.y === null || this.facing === null) {
      console.log("Robot not yet placed.");
      return;
    }
    this.drawTable();
    console.log(`Output: ${this.x},${this.y},${this.facing}`);
  }

  private drawTable() {
    console.clear();
    console.log("\nToy Robot Simulator\n");

    for (let y = this.size; y >= 1; y--) {
      const row: string[] = [];
      for (let x = this.size; x >= 1; x--) {
        if (this.placed && x === this.x && y === this.y && this.facing) {
          row.push(this.ICONS[this.facing]);
        } else {
          row.push("·");
        }
      }
      console.log(`${row.join(" ")}  | ${y}`);
    }
    console.log("5 4 3 2 1\n");
    console.log("Legend: ↑=NORTH, →=EAST, ↓=SOUTH, ←=WEST\n");
  }

  private isValidPosition(x: number, y: number): boolean {
    return x >= 1 && x <= this.size && y >= 1 && y <= this.size;
  }
}
