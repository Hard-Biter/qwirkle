import { StoneNotation, Colors, Shapes, Direction } from './Types';
import { State } from './State';
import { bar } from './helpers'
export class Stone {
  public x: number;
  public y: number;
  public color: Colors;
  public shape: Shapes;
  private player: number | undefined;
  private state: State;
  constructor(stoneNotation: StoneNotation, state: State = null) {
    [this.x, this.y, this.color, this.shape, this.player] = stoneNotation;
    this.state = state ?? new State();
  }

  public get neighbours() {
    const neighbours = [
      this.state.stones.find(
        (stone) => stone.x === this.x - 1 && stone.y === this.y - 1
      ),
      this.state.stones.find(
        (stone) => stone.x === this.x && stone.y === this.y - 1
      ),
      this.state.stones.find(
        (stone) => stone.x === this.x + 1 && stone.y === this.y - 1
      ),
      this.state.stones.find(
        (stone) => stone.x === this.x + 1 && stone.y === this.y
      ),
      this.state.stones.find(
        (stone) => stone.x === this.x + 1 && stone.y === this.y + 1
      ),
      this.state.stones.find(
        (stone) => stone.x === this.x && stone.y === this.y + 1
      ),
      this.state.stones.find(
        (stone) => stone.x === this.x - 1 && stone.y === this.y + 1
      ),
      this.state.stones.find(
        (stone) => stone.x === this.x - 1 && stone.y === this.y + 1
      ),
    ];

    return neighbours.filter((neighbour) => neighbour);
  }

  public bar(direction: Direction) {
    return bar(this.state.stones, direction, this)
  }

  public get row() {
    return this.bar(Direction.Horizontal);
  }

  public get column() {
    return this.bar(Direction.Vertical);
  }

  toString () {
    return `${this.x}-${this.y}-${this.color}-${this.shape}`
  }
}
