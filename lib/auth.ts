// Manejo de sesión SOLO local (localStorage), mientras no tenemos backend conectado.
// Cuando conectemos el login real, esto se reemplaza por el token JWT del backend.

export interface Session {
  email: string;
  name: string;
}

const SESSION_KEY = "demo_session";
const SESSION_EVENT = "demo-session-changed";

export function getSession(): Session | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(SESSION_KEY);
  return raw ? (JSON.parse(raw) as Session) : null;
}

export function setSession(session: Session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  window.dispatchEvent(new Event(SESSION_EVENT));
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
  window.dispatchEvent(new Event(SESSION_EVENT));
}

// Los componentes usan esto para enterarse cuando la sesión cambia
// en la misma pestaña (localStorage por sí solo no avisa eso).
export function onSessionChange(callback: () => void) {
  window.addEventListener(SESSION_EVENT, callback);
  return () => window.removeEventListener(SESSION_EVENT, callback);
}
