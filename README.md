# Cardio Life — Landing Page

Landing page institucional para a **Cardio Life**, clínica de vacinação em Anápolis - GO.

## Stack

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Router DOM](https://reactrouter.com/)

## Estrutura do projeto

```
src/
├── assets/               # Imagens e logo
├── components/
│   ├── ui/               # Componentes shadcn/ui
│   ├── layout/           # Header, NavLink
│   └── sections/         # Seções da landing page
├── hooks/                # Hooks customizados
├── lib/                  # Utilitários (utils.ts)
├── pages/                # Páginas (Index, NotFound)
├── App.tsx
├── main.tsx
└── index.css
```

## Rodar localmente

```sh
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento (http://localhost:8080)
npm run dev
```

## Build para produção

```sh
npm run build
```

A pasta `dist/` será gerada com os arquivos estáticos prontos para deploy.

Para pré-visualizar o build localmente:

```sh
npm run preview
```

## Deploy no Vercel

1. Acesse [vercel.com](https://vercel.com) e importe o repositório GitHub
2. O Vercel detecta automaticamente o Vite — nenhuma configuração extra é necessária
3. Configurações padrão:
   - **Framework**: Vite
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
   - **Install command**: `npm install`
4. Clique em **Deploy**

Para deploys subsequentes, basta fazer push na branch `main`.
