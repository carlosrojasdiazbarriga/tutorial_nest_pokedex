<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Descripción

Aplicación Pokedex construida con NestJS

## Instalación

1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd pokedex
```

2. Instalar pnpm (si no está instalado)

```bash
npm install -g pnpm
```

3. Instalar dependencias

```bash
pnpm install
```

4. Configurar base de datos

- Tener MongoDB 8 instalado y en ejecución
- Crear archivo `.env` basado en el ejemplo `.env.example`

5. Levantar la aplicación

```bash
pnpm start:dev
```

6. Reconstruir la base de datos

- localhost:3000/api/seed
