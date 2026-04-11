/**
 * https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking
 * tree-shaking 관점에서 enum을 사용하면 불리할 수 있다.
 */

const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;
// as const를 붙여 안에 속성들을 상수로 사용하겠다고(readonly) typescript에게 알려줌
// as const가 없으면 number로 추론됨

/**
 * object에서 key만 꺼내오고 싶다 => keyof
 * object에서 값을 타입으로 사용하고 싶을 때 => typeof
 */
type Direction = (typeof ODirection)[keyof typeof ODirection];

const a = EDirection.Up;
const b = EDirection.Down;
