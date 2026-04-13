interface Arr<T> {
  forEach(callbackFn: (item: T) => void);
  map<S>(callbackFn: (item: T) => S): S[];
  filter<S extends T>(callbackFn: (item: T) => item is S): S[];
}

const a: Arr<number> = [1, 2, 3];

a.forEach((item) => console.log(item));
a.forEach((item) => {
  console.log(item);
  return;
});

const b: Arr<string> = ["1", "2", "3"];
b.forEach((item) => console.log(item));

const c = a.map((v) => v + 1);
const d = a.map((v) => v.toString());

const e: Arr<number | string> = [1, "2", 3, "4"];

// 예상은 string[]이지만 구현된 filter type이 이상하게 매핑되있음
// extends, is(타입가드)를 이용해서 구현
const f = e.filter((v) => typeof v === "string");
const g = e.filter((v) => typeof v === "number");
