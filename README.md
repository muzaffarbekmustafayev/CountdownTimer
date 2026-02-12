

# ⏳ Minimal Countdown Timer

A modern, minimalistic countdown timer built with **React** and **Tailwind CSS**.
Users can set custom minutes and start a clean, elegant countdown experience.

---

## ✨ Features

* ⏱ Set custom time (in minutes)
* ▶️ Start / Pause functionality
* 🔄 Reset timer
* ⛔ Input disabled while running
* 🧹 Proper interval cleanup (no memory leaks)
* 🎨 Modern glassmorphism UI
* 🌙 Dark premium gradient background
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

## 📸 UI Concept

Minimalistic glass-style centered card layout:

* Gradient dark background
* Soft blur glass container
* Large lightweight digital typography
* Modern rounded buttons with glow shadow

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/muzaffarbekmustafayev/CountdownTimer.git
cd countdown-timer
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run development server

```bash
npm run dev
```

or (if using CRA)

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
 └── main.jsx / index.js
```

---

## 🧠 Logic Overview

* Timer converts minutes → seconds.
* `setInterval` decreases time every second.
* Cleanup handled inside `useEffect`.
* Timer automatically stops at 0.
* Input locked while timer is running.
* Reset clears interval and state.

---

## 🧩 Possible Improvements (Next-Level Ideas)

* 🔔 Sound notification when timer ends
* 🔵 Circular SVG progress ring
* 💾 LocalStorage persistence
* 🎛 Pomodoro mode toggle
* ⌨ Keyboard shortcuts (Space to Start/Pause)
* 🧪 Unit testing with Jest
* 🔄 Smooth number transition animation
* 🟦 TypeScript version

---

## 💡 Why This Project?

This project demonstrates:

* Clean state management
* Proper side-effect handling
* Modern UI design with Tailwind
* Reusable component structure
* Production-ready coding practices

It is intentionally minimal but architected cleanly — showing both design sense and engineering discipline.
