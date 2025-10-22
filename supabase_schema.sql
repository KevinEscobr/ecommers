# Esquema de Base de Datos para Supabase

Ejecuta estas sentencias SQL en la sección SQL Editor de tu proyecto Supabase para crear las tablas necesarias:

```sql
-- Tabla de productos
create table productos (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  precio numeric(10,2) not null,
  descripcion text,
  imagen_url text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Tabla de pedidos
create table pedidos (
  id uuid primary key default gen_random_uuid(),
  usuario_id uuid references auth.users(id),
  productos jsonb not null, -- [{producto_id, cantidad}]
  total numeric(10,2) not null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- La tabla de usuarios la gestiona Supabase Auth automáticamente
```

- La tabla `usuarios` es gestionada por Supabase Auth, no necesitas crearla manualmente.
- Puedes modificar los campos según tus necesidades.
