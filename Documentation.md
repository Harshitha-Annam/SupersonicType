# 📘 Typing Test Project – Documentation

## 1. Overview
This project is a **browser-based typing test application**.

Features:
- Displays a paragraph split into characters.
- Lets the user type into an input field (`typespace`).
- Tracks correctness of each typed character (green/red highlighting).
- Starts a timer when typing begins.
- Calculates **Words Per Minute (WPM)** and **Accuracy**.
- Locks typed content to prevent backspacing over already validated words.
- Provides a restart button (`start-again`) to reset everything.

---

## 2. Core Components
HTML Elements Used:
- `#type-space` → Input field where the user types.
- `#paragraph` → Paragraph to be typed, split into span elements (each character).
- `.timer` → Displays elapsed time (mm:ss).
- `.accuracy` → Displays typing accuracy at the end.
- `.wpm` → Displays typing speed at the end.
- `.start-again` → Button to restart the test.

---

## 3. Initialization Flow
1. Extract the paragraph → split into characters.
2. Convert characters into spans with index-based class names.

---

## 4. Restart Button
Clicking `start-again` resets state and calls `startTyping()` again.  
It clears the old timer, input field, and stats.

---

## 5. Typing Process (`startTyping` Function)

### Setup
- Resets counters and locked values.
- Clears timer display and enables typing.

### Timer Handling
- Starts only when typing begins.
- Updates seconds/minutes display.
- Stops after 10 minutes.

### Input Event Handling
- Prevents deleting past locked words.
- Tracks each character typed.
- Marks characters as correct (`right`) or incorrect (`wrong`).
- Resets future characters after backspace.

### Test Completion
- Stops timer.
- Disables typing.
- Calculates:
  - **WPM** = `(numOfChars / 5) / (time_in_minutes)`
  - **Accuracy** = `100 - ((wrongChars / numOfChars) * 100)`

---

## 6. Key Features
✔ Character-level validation with visual feedback.  
✔ Timer starts only when typing begins.  
✔ Prevents deleting past words (locking system).  
✔ Restart functionality.  
✔ End-of-test statistics (WPM + Accuracy).  

---

## 7. Possible Improvements
- Add dynamic paragraphs instead of one static text.
- Store results (WPM & Accuracy) in localStorage.
- Highlight the current word being typed.
- Allow difficulty levels (easy, medium, hard).
- Show progress bar of typing completion.
