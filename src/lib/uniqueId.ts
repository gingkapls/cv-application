type UUIDString = `${string}-${string}-${string}-${string}-${string}`;

export type { UUIDString };
export default function generateUniqueId(): UUIDString {
  return crypto.randomUUID();
}
