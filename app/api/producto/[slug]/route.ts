import { NextResponse } from "next/server";
import { neon } from "@netlify/neon";

const sql = neon();

export async function GET(request: Request) {
  // Extraer el slug de la URL
  const url = new URL(request.url);
  const slug = url.pathname.split("/").pop();
  const [producto] = await sql`SELECT id, nombre, precio, descripcion, imagen_url FROM productos WHERE id = ${slug}`;
  if (!producto) {
    return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
  }
  return NextResponse.json(producto);
}
