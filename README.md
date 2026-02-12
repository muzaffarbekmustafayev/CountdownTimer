

# ⏳ Minimal Countdown Timer

A modern, minimalistic countdown timer built with **React** and **Tailwind CSS**.
Users can set custom minutes and start a clean, elegant countdown experience.

🔗 **Live Demo:**
[https://countdown-timer-steel-nu.vercel.app/](https://countdown-timer-steel-nu.vercel.app/)

---

## ✨ Features

* ⏱ Set custom time (in minutes)
* ▶️ Start / Pause functionality
* 🔄 Reset timer
* ⛔ Input disabled while running
* 🧹 Proper interval cleanup (prevents memory leaks)
* 🎨 Modern glassmorphism UI
* 🌙 Dark gradient aesthetic
* 📱 Fully responsive layout

---

## 🛠 Tech Stack

* **React (Hooks)**

  * `useState`
  * `useEffect`
  * `useRef`
* **Tailwind CSS**
* Functional Component Architecture

---

## 📸 UI Preview

Minimalistic glass-style centered card layout featuring:

* Gradient dark background
* Soft blur glass container
* Lightweight digital typography
* Rounded buttons with subtle glow shadows

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/muzaffarbekmustafayev/CountdownTimer.git
cd CountdownTimer
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run development server

For Vite:

```bash
npm run dev
```

For Create React App:

```bash
npm start
```

---

## 📂 Project Structure

```
src/
 ├── components/
 │     └── CountdownTimer.jsx
 ├── App.jsx
 └── main.jsx
```

---

## 🧠 Logic Overview

* Converts input minutes → seconds.
* Uses `setInterval` to decrement time every second.
* Ensures proper cleanup inside `useEffect`.
* Automatically stops at zero.
* Reset clears both interval and state.
* Prevents input modification while active.

---

## 🧩 Possible Improvements

* 🔔 Sound notification on completion
* 🔵 Circular SVG progress indicator
* 💾 LocalStorage persistence
* 🎛 Pomodoro mode toggle
* ⌨ Keyboard shortcuts
* 🧪 Unit testing with Jest
* 🟦 TypeScript migration
* 🌗 Dark / Light theme switch

---

## 💡 Why This Project?

This project demonstrates:

* Clean state management
* Proper side-effect handling
* Minimal yet premium UI implementation
* Structured component design
* Production-ready coding discipline

It is intentionally minimal but architected thoughtfully — showcasing both design awareness and engineering fundamentals.
