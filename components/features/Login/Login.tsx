"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { FAKE_USER } from "@/data/fakeUser";
import { setSession } from "@/lib/auth";
import styles from "./Login.module.css";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      setSession({ email: FAKE_USER.email, name: FAKE_USER.name });
      router.push("/");
      router.refresh();
    } else {
      setError("Email o contraseña incorrectos.");
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Iniciar sesión</h1>

        <label className={styles.field}>
          <Mail size={18} className={styles.icon} />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className={styles.field}>
          <Lock size={18} className={styles.icon} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className={styles.togglePassword}
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </label>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.submit}>
          <LogIn size={18} />
          Ingresar
        </button>

        <p className={styles.hint}>
          Cuenta de prueba: <strong>{FAKE_USER.email}</strong> / <strong>{FAKE_USER.password}</strong>
        </p>
      </form>
    </div>
  );
}
