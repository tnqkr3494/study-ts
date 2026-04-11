// declare를 이용해 함수 타입부만 우선 선언해둘 수 있다.
// + 매개변수의 void는 실제 반환값이 어떤것이든 상관하지 않겠다는 의미 => undefined랑 구분 필요
declare function forEach(arr: number[], callback: (el: number) => void): void;

let target: number[] = [];

// 반환값이 number임에도 불구하고 타입에러가 발생하지 않음
forEach([1, 2, 3], (el) => target.push(el));

/**
 * 타입간 대응 가능 표 참고
 * https://user-images.githubusercontent.com/10962668/179646513-3c3be896-3bbc-4784-848b-06bc47e8b129.png
 */
