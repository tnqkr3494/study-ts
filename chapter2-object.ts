const x: {} = "hello";
const y: Object = "hi"; // {}, Object는 모든 타입이라는 뜻(null과 undefined는 제외)

// unknown = {} | null | undefined

const xx: object = {};
const z: unknown = "hi";

if (z) {
  // {}
  z;
} else {
  // unknown => null | undefined
  z;
}
