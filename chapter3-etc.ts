type Book = {
  page: number;
  author: string;
};

const customBook: unknown = {};

function test() {
  // customBook을 계속 사용하면 계속 as로 타입캐스팅을 해주어야하기 때문에, 실무에서 내가 사용할 때는 추가 변수선언을 통해 해결했다.
  // as는 unknown일때 자주 사용됨
  const testBook = customBook as Book;
  testBook.page = 1;
}
