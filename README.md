# 📺 Which Friends Character Are You?
### *"Find out which iconic personality matches your vibe."*

[![Live App](https://img.shields.io/badge/Live%20App-which--friends--character--are--you.vercel.app-purple?style=for-the-badge&logo=vercel&logoColor=white)](https://which-friends-character-are-you.vercel.app)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📖 Overview

**Which Friends Character Are You?** is an interactive personality quiz web app that matches users to one of the six iconic *Friends* characters — Rachel, Monica, Phoebe, Ross, Chandler, or Joey — based on their answers to six personality-driven questions.

Built for the *Friends* fan community and created by [@rachelsfriendsmedia](https://instagram.com/rachelsfriendsmedia), the app combines nostalgic pop culture with a lead-generation mechanic: users enter their name and email before their result is revealed, automatically subscribing them to **The One With the Newsletter**.

> *"Could I be wearing any more clothes?"  ·  "How you doin'?"  ·  "We were on a break!"  ·  "I KNOW!"*

---

## ✨ Features

- **6-Question Personality Quiz** — Covers weekend habits, stress responses, personal strengths, relationship styles, iconic quotes, and coffee orders — each answer mapped to one of the six main characters
- **Progressive Disclosure UX** — One question per screen with Back/Next navigation, keeping users focused and reducing drop-off
- **Lead Capture Gate** — Name + email form before result reveal, building the creator's newsletter subscriber list with every quiz completion
- **Newsletter Integration** — Subscribers join "The One With the Newsletter" upon result reveal
- **Character Result Screen** — Personalized match from all six *Friends* characters: Rachel, Monica, Phoebe, Ross, Chandler, Joey
- **Fully Responsive** — Optimized for mobile, tablet, and desktop
- **Clean, Minimal UI** — Distraction-free card-based layout that keeps attention on the quiz

---

## 🎭 The Six Characters

| Character | Vibe | Signature Answer |
|---|---|---|
| **Rachel Green** | Fashion sense & charm · Hopeless romantic | Iced caramel macchiato · Shopping & brunch |
| **Monica Geller** | Drive, loyalty & organization · Intense | Hot black coffee · Deep clean everything |
| **Phoebe Buffay** | Creativity & honesty · Free-spirited | Herbal tea · Sage the room and vibe it out |
| **Ross Geller** | Intelligence & curiosity · Complicated | Decaf latte · Reading or going to a museum |
| **Chandler Bing** | Humor & wit · Scared of commitment | Vanilla cappuccino · Laugh it off with sarcasm |
| **Joey Tribbiani** | Confidence & fun energy · Flirty | Espresso shot · Pizza, sports & chill |

---

## 🧠 Quiz Questions

The quiz covers six dimensions of personality — each option mapped to a *Friends* character:

1. **Ideal Weekend** — Shopping & brunch · Cleaning & organizing · Music & journaling · Museum · Stand-up & jokes · Pizza & sports
2. **Stress Response** — Retail therapy · Deep clean · Sage the room · Analyze it · Laugh with sarcasm · Ignore & eat snacks
3. **Biggest Strength** — Fashion & charm · Drive & loyalty · Creativity & honesty · Intelligence & curiosity · Humor & wit · Confidence & fun
4. **Relationship Style** — Hopeless romantic · Intense & loyal · Free-spirited · Complicated but committed · Scared of commitment · Flirty & fun
5. **Pick a Quote** — *"No uterus, no opinion"* · *"I KNOW!"* · *"Could I be wearing any more clothes?"* · *"We were on a break!"* · *"How you doin'?"*
6. **Coffee Order** — Iced caramel macchiato · Hot black coffee · Herbal tea · Decaf latte · Vanilla cappuccino · Espresso shot

---

## 🗂️ App Flow

```
Landing / Q1 ──► Q2 ──► Q3 ──► Q4 ──► Q5 ──► Q6 ──► Email Gate ──► Result
   │                                                        │              │
   │←──────────────── Back navigation ─────────────────────│              │
   │                                                        │              │
   │                                              Name + Email form   Character
   │                                              → Newsletter signup  reveal
```

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| **React** | Component-based UI, quiz state management |
| **JavaScript (ES6+)** | Quiz logic, answer scoring, result mapping |
| **CSS3** | Styling, responsive layout, card UI |
| **Vercel** | Deployment, hosting, global CDN |
| **Email Service** | Newsletter subscription on result reveal |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/which-friends-character-are-you.git

# Navigate into the project
cd which-friends-character-are-you

# Install dependencies
npm install
```

### Run Locally

```bash
npm run dev
# App available at http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments on every push.

---

## 📁 Project Structure

```
which-friends-character-are-you/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Quiz.jsx           # Main quiz container & state
│   │   ├── Question.jsx       # Individual question card
│   │   ├── AnswerOption.jsx   # Answer choice button
│   │   ├── EmailGate.jsx      # Name/email capture form
│   │   └── Result.jsx         # Character result screen
│   ├── data/
│   │   ├── questions.js       # All 6 questions + answer options
│   │   └── characters.js      # Character definitions + scoring map
│   ├── App.jsx
│   ├── index.js
│   └── styles/
│       └── main.css
├── package.json
└── README.md
```

---

## ⚙️ Customization

### Adding or Changing Questions

Edit `src/data/questions.js` to update question text or answer options. Each answer maps to a character key via the scoring object.

### Changing the Result Characters

Update `src/data/characters.js` to modify character descriptions, result copy, or scoring weights.

### Email Integration

The newsletter signup on the result screen connects to an external email service provider. Update the API endpoint or service credentials in your `.env` file:

```env
REACT_APP_EMAIL_API_URL=your_email_service_endpoint
REACT_APP_EMAIL_API_KEY=your_api_key
```

---

## 🤝 Client & Credits

Created for [@rachelsfriendsmedia](https://instagram.com/rachelsfriendsmedia)

*Friends* characters and references are the intellectual property of Warner Bros. Entertainment. This project is a fan-made, non-commercial quiz.

---

## 📄 License

© 2025 [@rachelsfriendsmedia](https://instagram.com/rachelsfriendsmedia). All rights reserved.

---

<p align="center">
  <em>Could this README be any more thorough?</em><br>
  Built for the fans · <a href="https://which-friends-character-are-you.vercel.app">Try the quiz →</a>
</p>
