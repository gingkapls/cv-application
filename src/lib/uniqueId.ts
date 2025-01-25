type UUIDString = `${string}-${string}-${string}-${string}-${string}`;

export type { UUIDString };
export default function generateUniqueId(): UUIDString {
  // For testing purposes with no secure context 
  // const nums = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
  // return nums.map(n => n * 0xffff).join('-') as UUIDString;
  return crypto.randomUUID();
}
