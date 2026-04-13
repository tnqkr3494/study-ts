// 같은 함수를 여러번 타입별로 선언하기

interface A {
  add(x: number, y: number): number;
  add(x: string, y: string): string;
}
