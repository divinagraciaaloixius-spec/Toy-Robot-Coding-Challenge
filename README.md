# 🧸 Toy Robot Coding Challenge

## 📖 Description
A simulation of a toy robot moving on a 5x5 tabletop.  
The robot can be placed, moved, rotated, and can report its current position.

---

## 🧩 Commands

| Command | Description |
|----------|--------------|
| `PLACE X,Y,FACING` | Places the robot at coordinates **(X, Y)** facing **FACING** (NORTH, EAST, SOUTH, or WEST). |
| `MOVE` | Moves the robot one square forward in the direction it is facing. |
| `LEFT` | Rotates the robot 90° anticlockwise. |
| `RIGHT` | Rotates the robot 90° clockwise. |
| `REPORT` | Outputs the robot's current position and facing direction. |
| `EXIT` | Exits the program. |

---

## 💡 Example Usage
```bash
- PLACE 0,0,NORTH
- MOVE
- RIGHT
- MOVE
- REPORT
```

### 🖨️ Expected Output
```bash
- Placed at 0,0,NORTH
- Moved to 0,1
- Turned right. Now facing EAST
- Moved to 1,1
- Output: 1,1,EAST
```
---

## ⚙️ Rules

- The robot **must be placed first** before any other commands are accepted.  
- The robot **cannot fall off** the 5x5 table — invalid moves are ignored.  
- Valid directions are: `NORTH`, `EAST`, `SOUTH`, `WEST`.

---

## ▶️ How to Run 

### Run interactively (Python):
```bash
cd python
python main.py
```

### Run interactively (NodeJS/Typescript):
```bash
cd typescript
npm install typescript @types/node
npx tsc
node dist/main.js
```