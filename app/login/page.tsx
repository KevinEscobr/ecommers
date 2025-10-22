"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Error al iniciar sesión");
      } else {
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        window.location.href = "/";
      }
    } catch (err) {
      setError("Error de red");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 dark:from-zinc-900 dark:to-zinc-800">
      <div className="bg-white dark:bg-zinc-900 p-10 rounded-2xl shadow-2xl w-full max-w-md border-t-4 border-blue-400">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700 dark:text-blue-400 tracking-tight">Iniciar sesión</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-lg font-bold hover:scale-105 transition-transform shadow"
            disabled={loading}
          >
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
        {error && <div className="mt-4 text-red-600 text-center font-semibold">{error}</div>}
        <div className="mt-8 flex flex-col items-center gap-2">
          <span className="text-zinc-500">¿No tienes cuenta?</span>
          <Link href="/registro">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded transition-colors shadow">Regístrate</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
