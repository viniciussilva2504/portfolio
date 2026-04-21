# Portfólio — Vinicius J. Silva

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-6.x-DB7093?style=flat-square&logo=styled-components&logoColor=white)](https://styled-components.com/)
[![Deploy](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel&logoColor=white)](https://portfolio-ebon-nine-95.vercel.app)

## 🌐 Demo ao Vivo

**[portfolio-ebon-nine-95.vercel.app](https://portfolio-ebon-nine-95.vercel.app)**

---

## Sobre

Portfólio pessoal construído com **Next.js 15 App Router** e **TypeScript 5** para apresentar projetos, stack técnico e experiência como Frontend Developer. Inclui Server Components, SSR de styled-components via `useServerInsertedHTML`, temas dark/light com `ThemeProvider`, fontes otimizadas via `next/font`, e layout responsivo — com atenção especial a UI/UX graças ao background em Arquitetura.

---

## ✨ Destaques Técnicos

- **Next.js 15 App Router** — Server Components por padrão, `'use client'` apenas onde necessário
- **styled-components SSR** — registry com `useServerInsertedHTML` para zero flash of unstyled content
- **next/font** — Sora + Space Mono carregadas via CDN do Google com zero layout shift
- **TypeScript strict** — `DefaultTheme` augmentation, tipos explícitos em toda a codebase
- **Temas dark/light** — `ThemeProvider` com paleta completa de tokens de cor
- **Error Boundary** — class component com fallback UI para captura de erros em runtime
- **Lazy loading** — secções carregadas com `React.lazy` + `Suspense`
- **Starfield animado** — canvas com requestAnimationFrame, responsivo e com cleanup correto

---

## 🛠️ Stack

| Categoria | Tecnologias |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **UI** | React 19, styled-components 6 |
| **Linguagem** | TypeScript 5 |
| **Fontes** | next/font (Sora, Space Mono) |
| **Qualidade** | ESLint, TypeScript strict |
| **Deploy** | Vercel |

---

## 📂 Estrutura do Projeto

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout — next/font, metadata, StyledRegistry
│   ├── page.tsx          # Server Component entry point
│   └── globals.css       # CSS base mínimo
├── src/
│   ├── components/       # Componentes reutilizáveis (Avatar, Starfield, ErrorBoundary...)
│   │   └── PortfolioApp/ # Client root — ThemeProvider, lazy sections
│   ├── containers/       # Secções da página (Sidebar, Sobre, Projetos, AISkills)
│   ├── data/             # Dados dos projetos (projects.ts)
│   ├── lib/              # registry.tsx — SSR para styled-components
│   ├── themes/           # Tokens de cor dark e light
│   └── types/            # DefaultTheme augmentation
└── next.config.ts        # compiler.styledComponents: true
```

---

## ⚙️ Como Executar Localmente

**Pré-requisitos:** Node.js 18+ e npm

```bash
# Clone o repositório
git clone https://github.com/viniciussilva2504/portfolio.git
cd portfolio

# Instale as dependências
npm install

# Servidor de desenvolvimento
npm run dev
```

Aceda a [http://localhost:3000](http://localhost:3000).

```bash
# Build de produção
npm run build
npm start
```

---

## 👨‍💻 Autor

**Vinicius Jesus da Silva** — Frontend Developer · Porto, Portugal

- 🌐 Portfolio: [portfolio-ebon-nine-95.vercel.app](https://portfolio-ebon-nine-95.vercel.app)
- 💼 LinkedIn: [linkedin.com/in/vjsilva2504](https://www.linkedin.com/in/vjsilva2504)
- 🐙 GitHub: [@viniciussilva2504](https://github.com/viniciussilva2504)
