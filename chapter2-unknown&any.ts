const a = {
  talk() {
    return 3;
  },
};
const b: any = a;

// any를 사용하면, 타입스크립트가 검사를 포기하게되어, 이렇게 타입스크립트를 쓰는 의미가 사라지게됨.
b.noob();

// unknown을 사용하면 직접 사용자가 사용할 때 타입을 as로 지정할 수 있음.
const c: unknown = a;
(c as typeof a).talk();
