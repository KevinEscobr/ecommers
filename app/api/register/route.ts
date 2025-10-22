import { NextResponse } from "next/server";
import { neon } from "@netlify/neon";
import bcrypt from "bcryptjs";

const sql = neon();

export async function POST(req: Request) {
  const { email, password } = await req.json();
  function validateEmail(email: string) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  }
  if (!email || !password) {
    return NextResponse.json({ error: "Email y contraseña requeridos" }, { status: 400 });
  }
  if (!validateEmail(email)) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }
  if (password.length < 6) {
    return NextResponse.json({ error: "La contraseña debe tener al menos 6 caracteres" }, { status: 400 });
  }
  // Verificar si el usuario ya existe
  const [user] = await sql`SELECT * FROM usuarios WHERE email = ${email}`;
  if (user) {
    return NextResponse.json({ error: "El usuario ya existe" }, { status: 409 });
  }
  // Hashear la contraseña
  const hashed = await bcrypt.hash(password, 10);
  await sql`INSERT INTO usuarios (email, password) VALUES (${email}, ${hashed})`;
  return NextResponse.json({ success: true });
}
