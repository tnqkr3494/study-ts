// 예시: 성공하면 string, 실패하면 에러를 뱉는 프로미스들
const results = await Promise.allSettled([
  Promise.resolve("데이터 1"),
  Promise.reject(new Error("네트워크 오류")),
  Promise.resolve("데이터 2"),
]);

// ❌ 일반적인 filter 사용 (TypeScript가 타입을 좁혀주지 못함)

// ! => typescript 5.5 버전 이후부터는 typescript 자체적으로 알아서 추론해줘서 더이상 에러는 발생하지 않음.
const normalFilter = results.filter((r) => r.status === "fulfilled");
// normalFilter[0].value // 🚨 에러 발생! TS는 여전히 실패한 결과가 있을지도 모른다고 의심함

const isRejected = (
  input: PromiseSettledResult<unknown>,
): input is PromiseRejectedResult => input.status === "rejected";
const isFulfilled = <T>(
  input: PromiseSettledResult<T>,
): input is PromiseFulfilledResult<T> => input.status === "fulfilled";

// ✅ 커스텀 타입 가드 사용
const successfulResults = results.filter(isFulfilled);
// 타입: PromiseFulfilledResult<string>[]
// TS가 성공한 것만 남았다는 걸 확신하므로 마음껏 접근 가능
console.log(successfulResults.map((res) => res.value)); // ["데이터 1", "데이터 2"]

const failedResults = results.filter(isRejected);
// 타입: PromiseRejectedResult[]
console.log(failedResults.map((res) => res.reason)); // [Error: 네트워크 오류]
