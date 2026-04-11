interface A {
  readonly a: string;
  b: string;
}

// indexed signature
type B = { [key: string]: string };

const obj: B = {
  a: "hello",
  b: "hi",
};

// mapped type
type C = "Human" | "Animal";
type D = { [key in C]: string };

const obj2: D = {
  Human: "hello",
  Animal: "hi",
};
