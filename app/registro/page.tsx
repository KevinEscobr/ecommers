"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegistroPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    // Validaciones frontend
    if (!/^.+@.+\..+$/.test(email)) {
      setError("Email inválido");
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Error al registrar");
      } else {
        setSuccess("Registro exitoso. Ahora puedes iniciar sesión.");
      }
    } catch (err) {
      setError("Error de red");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-200 dark:from-zinc-900 dark:to-zinc-800">
      <div className="bg-white dark:bg-zinc-900 p-10 rounded-2xl shadow-2xl w-full max-w-md border-t-4 border-green-400">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-green-700 dark:text-green-400 tracking-tight">Crear cuenta</h1>
        <form onSubmit={handleRegister} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-400 text-lg"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-400 text-lg"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-bold hover:scale-105 transition-transform shadow"
            disabled={loading}
          >
            {loading ? "Registrando..." : "Registrarse"}
          </button>
        </form>
        {error && <div className="mt-4 text-red-600 text-center font-semibold">{error}</div>}
        {success && <div className="mt-4 text-green-600 text-center font-semibold">{success}</div>}
        <div className="mt-8 flex flex-col items-center gap-2">
          <span className="text-zinc-500">¿Ya tienes cuenta?</span>
          <Link href="/login">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition-colors shadow">Inicia sesión</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
