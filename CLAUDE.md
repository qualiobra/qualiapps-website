# QualiApps Website - Instruções para Claude

## Início de Sessão

**IMPORTANTE:** Antes de começar qualquer tarefa, leia o diário de desenvolvimento em `docs/diario.md` para entender o contexto atual do projeto e o que foi feito nas sessões anteriores.

## Sobre o Projeto

Este é o site institucional da **QualiApps**, uma empresa de desenvolvimento ágil de aplicativos web e mobile fundada em 2025 por Lucas Araújo.

### Stack Tecnológico
- React 18 + Vite + TypeScript
- Tailwind CSS v4
- shadcn/ui (componentes)
- Motion (animações)
- react-scroll (navegação suave)
- react-hook-form + zod (formulários)

### Estrutura do Projeto
```
src/
├── components/
│   ├── layout/      # Header, Footer, MobileMenu, WhatsAppButton
│   ├── sections/    # Hero, About, Services, Projects, Team, Contact
│   ├── shared/      # Logo, AnimatedSection, Cards
│   └── ui/          # Componentes shadcn/ui
├── data/            # services.ts, projects.ts, team.ts
├── lib/             # utils.ts, constants.ts
└── types/           # Tipos TypeScript
```

### Informações da Empresa
- **Nome:** QualiApps
- **Fundador:** Lucas Araújo (CEO)
- **Equipe:** Felipe Trindade (Dev), Alana Caled (Dev)
- **WhatsApp:** 69 99602-1005
- **Valores:** Fé em Deus, Verdade, Design
- **Cores:** Cyan (#00D4FF) e Preto (#0A0A0A)

### Projetos da QualiApps
1. **QualiObra** - App gamificado de gestão de qualidade para construção civil
2. **QualiClub** - Fintech para construção civil (em desenvolvimento)
3. Websites: Engeral Construtora, Casa Fácil, Araújo Empreendimentos

## Comandos Úteis

```bash
npm run dev      # Iniciar servidor de desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build
```

## Repositório

GitHub: https://github.com/qualiobra/qualiapps-website

## Fluxo de Trabalho

1. **Leia o diário** antes de começar
2. **Faça as alterações** solicitadas
3. **Teste** com `npm run build`
4. **Atualize o diário** com o que foi feito
5. **Commit e push** para o GitHub

## Atualizando o Diário

Ao final de cada sessão, adicione uma entrada no diário (`docs/diario.md`) com:
- Data
- O que foi feito
- Problemas encontrados (se houver)
- Próximos passos sugeridos
