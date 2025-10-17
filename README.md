<div align="center">
[👉 Acesse o site aqui! 👈](https://bruno-a-dias.github.io/quiz-ingles/)

# 🎓 English Learning Hub

### *Sua jornada de aprendizado de inglês começa aqui*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

[Demo](#-demo) • [Recursos](#-recursos) • [Instalação](#-instalação) • [Uso](#-uso) • [Tecnologias](#-tecnologias) • [Licença](#-licença)

</div>

---

## 🌟 Sobre o Projeto

**English Learning Hub** é uma plataforma web interativa e completa para aprendizado de inglês, oferecendo uma experiência progressiva do nível básico (A1) ao avançado (C2). Com flashcards inteligentes e teste de proficiência abrangente, os usuários podem dominar o inglês de forma eficaz e divertida.

### ✨ Destaques

- 🎯 **Sistema Progressivo**: 6 níveis estruturados seguindo o padrão CEFR (A1 a C2)
- 🃏 **180 Flashcards**: Vocabulário e gramática organizados por dificuldade
- 📝 **50 Questões**: Teste de proficiência com feedback detalhado
- 🏆 **Certificado Digital**: Certificação oficial após conclusão do teste
- 🌓 **Tema Escuro/Claro**: Interface adaptável para conforto visual
- 🌍 **Bilíngue**: Suporte completo para PT-BR e EN-US
- 📱 **Responsivo**: Funciona perfeitamente em todos os dispositivos

---

## 🎯 Recursos

### 📚 Flashcards Progressivos

Sistema inteligente de repetição espaçada com 6 níveis:

| Nível | CEFR | Descrição | Cartões |
|-------|------|-----------|---------|
| **1** | A1 | Palavras Básicas | 35 |
| **2** | A1-A2 | Gramática Básica | 30 |
| **3** | A2 | Vida Cotidiana | 40 |
| **4** | B1 | Gramática Intermediária | 35 |
| **5** | B1-B2 | Vocabulário Avançado | 45 |
| **6** | B2+ | Construtor de Fluência | 40 |

**Funcionalidades:**
- ✅ Sistema de desbloqueio progressivo (80% para avançar)
- ✅ Rastreamento de progresso em tempo real
- ✅ Contador de dias seguidos (streak)
- ✅ Pronúncia com síntese de voz
- ✅ Exemplos práticos em cada cartão
- ✅ Transcrição fonética IPA

### 🎓 Teste de Proficiência

Avaliação completa com 50 questões organizadas em 10 blocos:

- 📊 **Avaliação por Blocos**: 5 questões por vez
- 💬 **Feedback Imediato**: Explicação detalhada após cada bloco
- 📈 **Classificação CEFR**: De A1 (Iniciante) a C2 (Proficiente)
- 🎯 **Conteúdo Abrangente**: Gramática, vocabulário, tempos verbais, etc.
- 🖨️ **Certificado Imprimível**: Certificação em formato paisagem A4

**Níveis de Proficiência:**
- 🥇 **C2** (94-100%): Proficient
- 🥈 **C1** (86-93%): Advanced
- 🥉 **B2** (76-85%): Upper-Intermediate
- 🎖️ **B1** (64-75%): Intermediate
- 🏅 **A2** (50-63%): Elementary
- 🎗️ **A1** (0-49%): Beginner

---

## 🚀 Demo

### Screenshots

```
┌─────────────────────────────────────┐
│      🏠 Página Principal            │
│  Navegação intuitiva e design       │
│  moderno com tema claro/escuro      │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│      🃏 Sistema de Flashcards       │
│  Cartões interativos com flip       │
│  animation e progresso visual       │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│      📝 Teste de Proficiência       │
│  Interface limpa com 5 questões     │
│  por bloco e feedback detalhado     │
└─────────────────────────────────────┘
```

---

## 💻 Instalação

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)
- Servidor web local (Live Server, http-server, etc.)

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/english-learning-hub.git
cd english-learning-hub
```

2. **Estrutura de pastas**
```
english-learning-hub/
├── index.html
├── flashcards.html
├── quiz.html
├── css/
│   ├── main.css
│   ├── flashcards.css
│   ├── quiz.css
│   └── print.css
├── js/
│   ├── main.js
│   ├── language.js
│   ├── flashcards.js
│   ├── quiz.js
│   └── navigation.js
└── data/
    ├── translations.json
    ├── flashcards-data.json
    └── quiz-questions.json
```

3. **Abra no navegador**
```bash
# Usando Live Server (VS Code)
# Clique com botão direito em index.html > Open with Live Server

# OU usando http-server (Node.js)
npx http-server -p 8080

# Acesse: http://localhost:8080
```

---

## 🎯 Uso

### Flashcards

1. Acesse a página de **Flashcards** pelo menu principal
2. Comece pelo **Nível 1** (desbloqueado automaticamente)
3. Clique no cartão para virar e ver a tradução
4. Use os botões:
   - 🔴 **Preciso Praticar**: Revisa o cartão mais tarde
   - 🟢 **Aprendi**: Marca como dominado
5. Complete **80%** do nível para desbloquear o próximo

### Teste de Proficiência

1. Acesse a página de **Teste de Proficiência**
2. Clique em **Começar Teste** e insira seu nome
3. Responda as **5 questões** de cada bloco
4. Clique em **Enviar Respostas** para feedback
5. Continue pelos **10 blocos** (50 questões totais)
6. Receba seu **certificado digital** ao final
7. Imprima em formato paisagem A4

### Tema e Idioma

- 🌓 **Alternar Tema**: Clique no ícone de lua/sol no header
- 🌍 **Mudar Idioma**: Clique em PT 🇧🇷 ou EN 🇺🇸 no header

---

## 🛠️ Tecnologias

### Frontend

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Animações, Grid, Flexbox, Custom Properties
- **JavaScript (ES6+)**: Lógica interativa e manipulação DOM
- **Bootstrap 5**: Framework CSS responsivo
- **Bootstrap Icons**: Biblioteca de ícones

### Funcionalidades

- **LocalStorage API**: Persistência de progresso
- **Speech Synthesis API**: Pronúncia de palavras
- **CSS Print Media Queries**: Impressão otimizada
- **Responsive Design**: Mobile-first approach

### Estrutura de Dados

- **JSON**: Armazenamento de flashcards, questões e traduções
- **Spaced Repetition**: Sistema de repetição espaçada
- **Progressive Unlocking**: Desbloqueio baseado em desempenho

---

## 📊 Estatísticas

```
📝 Total de Conteúdo
├── 180 Flashcards
├── 50 Questões de Quiz
├── 6 Níveis Progressivos
├── 10 Blocos de Avaliação
└── 2 Idiomas (PT/EN)

💻 Arquivos
├── 3 Páginas HTML
├── 4 Arquivos CSS
├── 5 Scripts JavaScript
└── 3 Arquivos JSON de Dados
```

---

## 🎨 Customização

### Cores do Tema

Edite as variáveis CSS em `css/main.css`:

```css
:root {
  --primary-color: #FF6B35;
  --secondary-color: #004E89;
  --success-color: #28a745;
  --danger-color: #dc3545;
  /* ... */
}
```

### Adicionar Novos Flashcards

Edite `data/flashcards-data.json`:

```json
{
  "front": "Hello",
  "back": "Olá",
  "example": "Hello, how are you?",
  "phonetic": "/həˈloʊ/"
}
```

### Adicionar Novas Questões

Edite `data/quiz-questions.json`:

```json
{
  "question": "I ___ a student.",
  "options": ["am", "is", "are", "be"],
  "correct": 0,
  "explanation": "Use 'am' with 'I'."
}
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga estes passos:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

## 📝 Roadmap

- [ ] Sistema de revisão espaçada avançado
- [ ] Modo offline com PWA
- [ ] Gráficos de progresso detalhados
- [ ] Exercícios de listening
- [ ] Gamificação com badges
- [ ] Integração com API de pronúncia
- [ ] Exportação de progresso em PDF
- [ ] Modo multiplayer/competitivo

---

## 📜 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---

## 👤 Autor

**Bruno Assunção Dias**

- GitHub: [@bruno-a-dias](https://github.com/bruno-a-dias)
- LinkedIn: [bruno-a-dias](https://linkedin.com/in/bruno-a-dias)
- Email: badmask84@gmail.com

---

## 🙏 Agradecimentos

- [Bootstrap](https://getbootstrap.com/) - Framework CSS
- [Bootstrap Icons](https://icons.getbootstrap.com/) - Ícones
- [Google Fonts](https://fonts.google.com/) - Tipografia
- Comunidade open source 💙

---

<div align="center">

### ⭐ Se este projeto foi útil, considere dar uma estrela!

**Feito com ❤️ para estudantes de inglês em todo o mundo**

[⬆ Voltar ao topo](#-english-learning-hub)

</div>