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

## 13 de Janeiro de 2026 (Sessão 2)

### O que foi feito
- **SEO - Arquivos de indexação**
  - Criado `public/robots.txt` para permitir indexação pelos buscadores
  - Criado `public/sitemap.xml` com todas as seções do site

- **SEO - Meta tags melhoradas** no `index.html`
  - Adicionado `<link rel="canonical">` para evitar conteúdo duplicado
  - Adicionado Twitter Card tags para compartilhamento no Twitter/X
  - Adicionado `<meta name="theme-color">` com cor da marca (#00D4FF)
  - Adicionado `<meta name="robots">` para controle de indexação
  - Melhorado Open Graph com mais propriedades (url, locale, site_name)

- **SEO - Schema.org JSON-LD**
  - Adicionado structured data do tipo Organization
  - Inclui informações de contato, fundador, localização
  - Melhora rich snippets no Google

- **Política de Privacidade**
  - Criado componente `src/components/shared/PrivacyPolicy.tsx`
  - Modal acessível via link no Footer
  - Conteúdo completo seguindo LGPD

- **Performance - Otimização do Vite**
  - Configurado code splitting (chunks separados)
  - react-vendor: 141.86 kB (gzip: 45.52 kB)
  - motion: 90.00 kB (gzip: 29.82 kB)
  - forms: 83.53 kB (gzip: 25.15 kB)

- **Logo e Favicon**
  - Componente Logo.tsx atualizado para usar favicon.png
  - Adicionado suporte a tamanhos (sm, md, lg) no componente Logo
  - Texto "qualiapps" exibido ao lado do ícone no header e footer
  - Adicionado `public/logo.png` e `public/favicon.png`
  - Favicon configurado no index.html

### Arquivos criados/modificados
- `public/robots.txt` (novo)
- `public/sitemap.xml` (novo)
- `public/logo.png` (novo)
- `public/favicon.png` (novo)
- `index.html` (modificado)
- `vite.config.ts` (modificado)
- `src/components/shared/PrivacyPolicy.tsx` (novo)
- `src/components/shared/Logo.tsx` (modificado)
- `src/components/layout/Footer.tsx` (modificado)

### Próximos passos sugeridos
- [ ] Criar imagem og-image.png (1200x630) para compartilhamento
- [ ] Configurar deploy na Vercel
- [ ] Implementar envio real do formulário de contato
- [ ] Adicionar imagens reais dos projetos
- [ ] Adicionar fotos da equipe
- [ ] Testar no Google Rich Results Test e Facebook Debugger

---

## 13 de Janeiro de 2026 (Sessão 3)

### O que foi feito
Grande atualização visual e funcional baseada em uma versão alternativa do site.

#### Hero Section - Cards de Destaque
- Adicionados 3 cards abaixo dos CTAs:
  - **Mobile First** - Apps nativos e híbridos
  - **Web Moderna** - Plataformas escaláveis
  - **Metodologia Ágil** - Entregas contínuas
- Novos CTAs: "Estimar meu Projeto com IA" e "Conhecer Serviços"
- Cards com efeitos hover e bordas animadas

#### Services Section - Redesenhada
- Expandido de 4 para **6 serviços**:
  1. Desenvolvimento Mobile (cyan)
  2. Aplicações Web (teal)
  3. UI/UX Design (purple)
  4. Backend & API (blue)
  5. QA & Testes (green)
  6. Consultoria Tech (orange)
- Novo layout em grid 3x2
- Fundo claro (neutral-50) para maior contraste
- Cards com ícones coloridos que sobem no hover

#### About Section - Cards de Valores Modernos
- Redesenhada com layout de 2 colunas
- Imagem com efeito de gradiente e borda rotacionada
- Card flutuante "IA + Construção Civil"
- Tags dos projetos com ícones diferenciados
- **Valores em cards modernos** com:
  - Barra colorida lateral
  - Ícones animados no hover
  - Descrições mais elaboradas

#### QualiObra Section (NOVA)
- Seção dedicada ao produto principal
- Badge "Produto Exclusivo" em amarelo
- Descrição da IA Quali
- **Vídeo do YouTube embarcado**: https://youtu.be/SLiYfDUsmSE
- Link para assistir no YouTube
- Background escuro (neutral-900)

#### Process Section (NOVA)
- Seção sobre metodologia ágil
- Checklist visual com ícones CheckCircle
- 4 etapas: Discovery, Sprints, QA, Deploy
- Imagem decorativa com borda gradiente

#### Estimator Section (NOVA) - Chat com IA
- **Chat interativo** para estimar projetos
- Integração com **Google Gemini API**
- Interface de chat moderna (dark theme)
- Mensagens animadas com balões
- **Botão "Enviar para WhatsApp"** que compila toda a conversa
- Modo demo quando API key não configurada
- Indicador "IA Online" com animação

#### Testimonials Section (NOVA)
- Depoimentos de parceiros
- 2 testimonials:
  - Thiago Muzuco (Engeral Construtora)
  - Felipe Araújo (Casa Fácil Blocos)
- Cards com aspas decorativas
- Fotos de avatar

### Arquivos criados
- `src/components/sections/QualiObraSection.tsx`
- `src/components/sections/ProcessSection.tsx`
- `src/components/sections/EstimatorSection.tsx`
- `src/components/sections/TestimonialsSection.tsx`
- `src/services/geminiService.ts`
- `src/data/testimonials.ts`

### Arquivos modificados
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/ServicesSection.tsx`
- `src/components/sections/AboutSection.tsx`
- `src/components/shared/ServiceCard.tsx`
- `src/data/services.ts`
- `src/types/index.ts`
- `src/App.tsx`
- `package.json`

### Dependências adicionadas
- `@google/genai` - SDK do Google Gemini AI

### Ordem das seções
1. Hero (com cards de destaque)
2. Services (6 serviços)
3. About (com valores em cards)
4. QualiObra (vídeo YouTube)
5. Process (metodologia)
6. Estimator (chat IA)
7. Testimonials (depoimentos)
8. Projects (mantida)
9. Team (mantida)
10. Contact (mantida)

### Configuração necessária
Para usar o chat com IA, criar arquivo `.env.local` na raiz:
```
VITE_GEMINI_API_KEY=sua_chave_aqui
```

### Build
- Build funcionando sem erros
- index.js: 246.28 kB (gzip: 74.66 kB)

### Commit
- `a8533b6` - feat: adiciona novas seções e redesenha layout do site

### Próximos passos sugeridos
- [x] Configurar chave API do Gemini para chat funcional
- [ ] Adicionar mais testimonials
- [ ] Criar imagens próprias para as seções
- [ ] Adicionar animações de entrada nas novas seções
- [ ] Testar responsividade em dispositivos móveis
- [ ] Adicionar fotos reais da equipe

---

## 13 de Janeiro de 2026 (Sessão 4)

### O que foi feito
Implementação completa de sistema de toggle de tema (dark/light mode) para padronizar a aparência do site.

#### Sistema de Tema
- **ThemeContext** (`src/contexts/ThemeContext.tsx`)
  - Contexto React para gerenciar estado do tema globalmente
  - Persiste preferência no localStorage
  - Detecta preferência do sistema operacional
  - Aplica classe `dark` ou `light` no elemento root

- **ThemeToggle** (`src/components/shared/ThemeToggle.tsx`)
  - Botão animado com ícones de Sol/Lua
  - Transição suave entre temas
  - Adicionado ao Header (desktop e mobile)

#### CSS e Variáveis
- **Variáveis de tema** em `src/index.css`
  - `--theme-bg`, `--theme-text`, `--theme-border`, etc.
  - Cores específicas para modo escuro e claro
  - `--theme-logo-quali` para cor do texto "quali" na logo

#### Componentes Atualizados
Todos os componentes foram atualizados para usar `useTheme()` e aplicar cores condicionais:

- **Layout:**
  - `Header.tsx` - Background adaptativo quando scrollado
  - `Footer.tsx` - Cores de fundo e texto
  - `MobileMenu.tsx` - Background e bordas

- **Seções:**
  - `HeroSection.tsx` - Gradientes e cards
  - `ServicesSection.tsx` - Fundo e textos
  - `AboutSection.tsx` - Cards de valores
  - `QualiObraSection.tsx` - Seção de destaque
  - `ProcessSection.tsx` - Checklist e imagem
  - `EstimatorSection.tsx` - Chat interface
  - `TestimonialsSection.tsx` - Cards de depoimentos
  - `ProjectsSection.tsx` - Cards de projetos
  - `TeamSection.tsx` - Cards da equipe
  - `ContactSection.tsx` - Formulário e cards de contato

- **Componentes Compartilhados:**
  - `Logo.tsx` - Texto "quali" muda de branco para preto
  - `SectionTitle.tsx` - Títulos adaptáveis
  - `ServiceCard.tsx` - Cards de serviço
  - `ProjectCard.tsx` - Cards de projeto
  - `TeamCard.tsx` - Cards da equipe

### Arquivos criados
- `src/contexts/ThemeContext.tsx`
- `src/components/shared/ThemeToggle.tsx`

### Arquivos modificados
- `src/index.css` (variáveis de tema)
- `src/App.tsx` (ThemeProvider)
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/MobileMenu.tsx`
- `src/components/shared/Logo.tsx`
- `src/components/shared/SectionTitle.tsx`
- `src/components/shared/ServiceCard.tsx`
- `src/components/shared/ProjectCard.tsx`
- `src/components/shared/TeamCard.tsx`
- Todas as seções em `src/components/sections/`

### Build
- Build funcionando sem erros
- index.js: 464.56 kB (gzip: 112.88 kB)

### Próximos passos sugeridos
- [ ] Testar toggle de tema em dispositivos móveis
- [ ] Adicionar transição animada ao trocar tema
- [ ] Considerar adicionar mais opções de tema (ex: sistema, sempre escuro, sempre claro)
- [ ] Testar acessibilidade com diferentes temas

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
