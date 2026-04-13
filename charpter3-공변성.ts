/**
 * 
    관련 분석글
    https://www.inflearn.com/community/questions/958865/%ED%95%A8%EC%88%98%EC%9D%98-%EA%B3%B5%EB%B3%80%EC%84%B1%EA%B3%BC-%EB%B0%98%EA%B3%B5%EB%B3%80%EC%84%B1%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9D%B4%EC%9C%A0-%EC%84%A4%EB%AA%85
 */

// 매개변수는 반환값과 반대로 좁은 타입

function a(x: string | number): number {
  return 0;
}

type B = (x: string) => number;

const b: B = a;

// 반환값은 더 넓은 타입

function c(x: string): number {
  return +0;
}

type D = (x: string) => string | number;

const d: D = c;
