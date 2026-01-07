# 🎮 RPG Life Leveling System (Anime‑Inspired Productivity Web App)

> **Level up your real life like an RPG.**
> A fully client‑side, anime‑inspired, gamified productivity system built using **HTML, CSS, and Vanilla JavaScript**. No backend. No database. All data is stored locally in the browser using **LocalStorage**.

---

## ✨ Overview

This project turns real‑life habits into an RPG‑style progression system. Users complete self‑defined quests to earn XP, level up, unlock ranks, allocate stat points, and face increasing difficulty—just like a game, but for real life.

Designed to be:

* Lightweight
* Offline‑friendly
* Privacy‑focused
* Easy to customize

---

## 🚀 Key Features

### 🧠 Core Gameplay

* ✅ User‑created quests (daily / normal / hard)
* ⭐ XP gain on quest completion
* ⚠️ XP loss if daily mission is not completed
* 🔼 Automatic **Level Up** system
* 🏅 **Hunter Rank progression** based on XP

### 🏆 Hunter Rank System

Ranks automatically upgrade as XP increases:

* **E‑Rank** → Beginner
* **D‑Rank**
* **C‑Rank**
* **B‑Rank**
* **A‑Rank**
* **S‑Rank** → Elite

Higher ranks unlock:

* Harder quests
* Higher XP rewards
* Increased difficulty & penalties

### 💪 Core Attributes

Earn stat points on every level up and allocate them manually:

* **Strength** 💥
* **Intelligence** 🧠
* **Agility** ⚡

Each point increases the selected attribute by **+1**.

### 🎁 Rewards System

* Bonus XP
* Extra stat points
* New quest types
* Visual badges / titles

### ⏰ Daily Mission System

* At least one daily mission must be completed every day
* Failure results in automatic XP loss
* Daily reset handled using JavaScript Date API

---

## 🎨 UI & Experience

* 🌑 Dark anime‑style theme
* ✨ Neon blue & violet glow effects
* 🧊 Dynamic animated crystal background (CSS / Canvas)
* 🎉 Level‑up & rank‑up animations
* 💬 Floating system messages:

  * `[ SYSTEM ] Quest Completed`
  * `[ SYSTEM ] LEVEL UP`

---

## 🛠️ Tech Stack

* **HTML5** – Structure
* **CSS3** – Styling, animations, transitions
* **Vanilla JavaScript** – Game logic & state management
* **LocalStorage** – Persistent data storage

❌ No frameworks
❌ No backend
❌ No external libraries

---

## 📂 Project Structure

```
project-root/
│
├── index.html        # Main UI structure
├── style.css         # Theme, layout, animations
├── script.js         # Game logic (XP, levels, quests, ranks)
```

---

## ▶️ How to Run

1. Clone or download this repository
2. Open `index.html` in any modern browser
3. Start creating quests and leveling up 🚀

> No installation required. Works completely offline.

---

## 💾 Data Persistence

All user progress is stored locally using **LocalStorage**:

* Player level & XP
* Rank
* Stats & stat points
* Quests & completion status

⚠️ Clearing browser data will reset progress.

---

## 🔮 Future Improvements (Optional)

* Firebase / Backend integration
* User authentication
* Cloud sync across devices
* Leaderboards & social features
* Mobile app (WebView)

---

## ⚖️ Legal & Disclaimer

This project is **original** and **anime‑inspired**.

* Not affiliated with or endorsed by any anime, manga, or studio
* No copyrighted names, logos, or characters are used

Built purely for:

* Learning
* Personal productivity
* Portfolio demonstration

---

## 👤 Author

**Built by:** *[Your Name]*
**Role:** Frontend Developer / Student
**Skills:** HTML, CSS, JavaScript, UI Design, Gamification

---

## ⭐ Support

If you like this project:

* Give it a ⭐ on GitHub
* Share feedback or ideas
* Customize it for your own workflow

> *“Discipline is the real power system.”* 💀🔥
