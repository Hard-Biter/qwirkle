export type StoneNotation = [
  x: number,
  y: number,
  color: Colors,
  shape: Shapes,
  player?: number | undefined
];

export enum Colors {
  Purple = 'p',
  Red = 'r',
  Blue = 'b',
  Yellow = 'y',
  Green = 'g',
  Orange = 'o',
}

export enum Shapes {
  Square = 1,
  Circle = 2,
  Flower = 3,
  Quadrogram = 4,
  Diamond = 5,
  Octogram = 6,
}

export enum Direction {
  Horizontal = 'x',
  Vertical = 'y'
}

export type ColorShape = [Colors, Shapes]

export type ColorShapeString = `${Colors}${Shapes}`

export type Coordinate = [x: number, y: number]