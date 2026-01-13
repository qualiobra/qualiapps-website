# Diário de Desenvolvimento - QualiApps Website

Este documento registra o progresso do desenvolvimento do site da QualiApps. Leia sempre as últimas entradas para entender o contexto atual.

---

## 13 de Janeiro de 2026

### O que foi feito
- **Criação inicial do projeto** com React + Vite + TypeScript
- **Configuração do Tailwind CSS v4** com tema customizado (cores da marca)
- **Instalação do shadcn/ui** e componentes: button, card, input, textarea, badge, separator, sheet
- **Criação da estrutura completa** de pastas e componentes

### Seções implementadas
1. **Hero Section** - Banner principal com headline "Transformamos ideias em soluções digitais", CTAs e animações de gradiente
2. **About Section** - História da empresa, missão e valores (Fé em Deus, Verdade, Design)
3. **Services Section** - 4 serviços: Web, Mobile, IA, Construção
4. **Projects Section** - QualiObra e QualiClub em destaque + 3 websites entregues
5. **Team Section** - Lucas (CEO), Felipe e Alana (Desenvolvedores)
6. **Contact Section** - Formulário + WhatsApp + Email

### Funcionalidades
- Navegação suave entre seções (react-scroll)
- Menu mobile responsivo (Sheet do shadcn)
- Botão flutuante do WhatsApp com animação
- Animações de scroll (Motion)
- Design responsivo

### Correções
- Ajustado posicionamento do "Saiba mais" que estava sobrepondo os botões do Hero

### Repositório
- Criado repositório no GitHub: https://github.com/qualiobra/qualiapps-website
- Primeiro commit realizado com toda a estrutura

### Próximos passos sugeridos
- [ ] Adicionar imagens reais dos projetos
- [ ] Adicionar fotos da equipe
- [ ] Implementar envio real do formulário de contato (EmailJS ou similar)
- [ ] Configurar deploy na Vercel
- [ ] Adicionar página de política de privacidade
- [ ] Melhorar SEO com mais meta tags
- [ ] Adicionar animações mais elaboradas no Hero
- [ ] Criar página individual para cada projeto

---

## Template para novas entradas

```markdown
## [DATA]

### O que foi feito
- Item 1
- Item 2

### Problemas encontrados
- Problema 1 (se houver)

### Próximos passos sugeridos
- [ ] Tarefa 1
- [ ] Tarefa 2
```
