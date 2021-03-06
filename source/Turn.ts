import { Stone } from './Stone';
import { State } from './State';
import { StoneNotation } from './Types';
import { isValidBar, isBar, onlyUnique, barIterator, filledBar, sortCoordinates, sortStones} from './helpers';

export class Turn {
  public stones: Array<Stone> = [];
  private state: State;

  constructor(stoneNotations: Array<StoneNotation>, state: State) {
    this.state = state;
    this.stones = stoneNotations.map(stoneNotation => new Stone(stoneNotation, state));
  }

  public get isValid() {
    if (!this.stones.length) return true

    const allStonesOfBar = filledBar(this.state, this.stones)
    const turnStonesAreValid = isBar(allStonesOfBar)

    const allUniqueStones = this.stones.length === this.stones.filter(onlyUnique).length
  
    const allBarsAreValid = barIterator(this.stones).every(bar => isValidBar(bar, this.state.turns.length === 0))

    return allUniqueStones && turnStonesAreValid && allBarsAreValid;
  }

  public get score () {
    let points = 0

    const bars = barIterator(this.stones)
    for (const bar of bars) {
      const qwirklePoints = bar.length === 6 ? 6 : 0
      const stonePoints = bar.length > 1 ? bar.length : 0

      points += qwirklePoints + stonePoints
    }

    // Special use case for a start with one stone.
    if (points === 0) points = 1

    return points
  }

  clone () {
    return new Turn(this.stones.map(stone => stone.toNotation()), this.state)
  }

  /**
   * This function creates a string representation of this turn based on the values from the 'stones' property.
   * It does not incluse the state.
   */
  toString() {
    const sortedStones = this.stones.sort(sortStones)
    return sortedStones.map(stone => stone.toString()).join('')
  }

}