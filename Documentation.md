# Typing Practice Website – Showcase

## 🚀 Project Overview

Welcome to the **Typing Practice Website** – a sleek, interactive, and engaging platform built for anyone who wants to sharpen their typing speed and accuracy. With a clean design, real-time feedback, and performance tracking, this project goes beyond a basic typing test to create a fun and motivating experience.

---

## ✨ Key Highlights

* **Randomized Paragraphs**
  No two practice sessions feel the same – the app pulls from a set of diverse paragraphs for fresh challenges every time.

* **Live Character Feedback**
  Every keystroke is instantly checked. Correct letters glow in green, mistakes in red, making practice intuitive and visually rewarding.

* **Smart Backspace Control**
  Once you finish a word, it’s locked in – encouraging real-world typing discipline by preventing endless corrections.

* **Built-In Timer**
  A clean and simple timer kicks in the moment you start typing, automatically stopping at 10 minutes or when you finish.

* **Performance Stats**
  At the end of each session, get your **WPM (Words Per Minute)** and **Accuracy** instantly, giving you measurable progress to beat.

* **Restart Anytime**
  With a single click on the **Start Again** button, jump into a brand-new challenge.

---

## 🎯 Why This Project Stands Out

This isn’t just another typing test. It’s a **practice tool that feels like a game**, combining discipline (word-locking) with motivation (real-time results). Whether you’re preparing for coding interviews, polishing professional typing, or just competing with friends, this app makes practice **fun, efficient, and addictive**.

---


## 📂 Code Modules & Responsibilities

Even though the code runs as a single script, it can be understood as **modular components**. This structure makes the project easier to scale, debug, and enhance in the future.

### 1. **Data Module (`data.js`)**

* Holds an array of sample paragraphs.
* Acts as a content provider so practice sessions always have fresh material.
* Decouples data from logic, making it easy to expand the library of texts without touching the main script.

---

### 2. **Initialization & Controls Module**

* **Variables:**

  * `lockIndex`, `lockedValue` → Control the backspace-locking system.
  * `timer` → Stores reference to the running timer.
  * DOM elements (`startAgain`, `type-space`, `paragraph`, etc.) → Entry points for user interaction.
* **Restart Control:**

  * Listens for clicks on the “Start Again” button.
  * Resets everything by re-running `startTyping()`.

---

### 3. **Paragraph Rendering Module**

* Selects a random paragraph from the data module.
* Splits the paragraph into individual characters.
* Wraps each character inside a `<span>` with a unique class (index-based).
* Displays the paragraph visually, enabling character-level tracking.

This modular approach makes per-character styling (right/wrong) possible.

---

### 4. **Typing Engine Module**

* **Event Listener (`input` on typing area):**

  * Handles every keystroke.
  * Starts the timer on the very first input.
  * Enforces backspace locking (cannot erase past completed words).
* **Character Validation:**

  * Matches typed character against the original.
  * Correct → adds `.right`.
  * Incorrect → adds `.wrong` and increments error count.
* **Progress Tracking:**

  * Updates typed index in real-time.
  * Clears wrong/correct markers beyond the current index when necessary.

---

### 5. **Timer Module**

* Activated when typing begins.
* Updates every second in `mm:ss` format.
* Stops after:

  * Paragraph completion, OR
  * 10 minutes (auto-disable).

---

### 6. **Performance Metrics Module**

* **WPM Calculation:** Based on total characters typed, divided by 5 (average word length), then normalized to minutes.
* **Accuracy Calculation:** `(Correct Characters / Total Characters) × 100`.
* Displays results dynamically when the session ends.

---



## 🛠️ Tech Stack

* **JavaScript (Vanilla)** – powering the entire typing logic
* **HTML + CSS** – clean structure and responsive styling
* **Modular Design** – paragraphs managed separately in `data.js` for scalability

---

## 🌟 Use Cases

* Students improving typing speed for exams
* Programmers training for coding efficiency
* Professionals preparing for job assessments
* Anyone who loves challenging themselves with measurable goals

---

## 📊 Future Enhancements

* Progress history & leaderboard
* Difficulty levels (easy/medium/hard)
* Dark mode for late-night practice
* Mobile-friendly optimization

---

## 💡 Final Note

The Typing Practice Website is more than just code – it’s a **personal growth tool**. It blends simplicity with smart mechanics, delivering an engaging experience that keeps you coming back for “just one more try.”
