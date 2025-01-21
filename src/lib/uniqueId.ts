import { UUIDString } from "./types";

export default function generateUniqueId(): UUIDString {
  return crypto.randomUUID();
}