const API_BASE_URL = "http://localhost:8000/api";

export async function apiFetch(endpoint: string, options?: RequestInit) {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, options);
  return res.json();
}
