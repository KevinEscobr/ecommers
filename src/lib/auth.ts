import jwt_decode from "jwt-decode";

export function getUserFromToken() {
  if (typeof window === "undefined") return null;
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    const decoded = jwt_decode(token);
    return decoded;
  } catch {
    return null;
  }
}
