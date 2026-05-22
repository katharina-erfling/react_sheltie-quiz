<img width="896" height="536" alt="Screenshot 2026-05-22 084400" src="https://github.com/user-attachments/assets/15b1191f-75cb-4648-a313-5b2c2933c4a4" />

# 🐾 Sheltie Quiz

Ein interaktives Wissensquiz über Shetland Sheepdogs – entstanden als erstes React-Projekt im Rahmen der Frontend Developer Zertifizierung.

---

## ✨ Besonderheiten

> ⚛️ **Erstes React-Projekt** – State-Management mit `useState` für Fragen-Navigation, Antwortauswahl und Punktestand

> 🎨 **Dynamisches CSS-Klassen-System** – `getOptionClass()` gibt je nach Zustand neutral, grün (richtig) oder rot (falsch gewählt) zurück – ohne zusätzliche State-Variable

> 🔒 **Doppelklick-Schutz** – `disabled` auf den Antwort-Buttons nach erster Auswahl, Guard Clause in `handleAnswer()`

> 📊 **Dynamischer Fortschrittsbalken** – Breite wird per Inline-Style aus `step / 7 * 100` berechnet

> 💬 **Kontextsensitives Feedback** – Ergebnisscreen zeigt je nach Punktzahl unterschiedliche Texte

---

<img width="891" height="525" alt="Screenshot 2026-05-22 084234" src="https://github.com/user-attachments/assets/52d8d334-85f0-435c-9a7f-03551026502b" />

## 🎮 Spielablauf

Startscreen → 7 Fragen über Sheltie-Genetik, Gesundheit und Wesen → Ergebnisscreen mit Punktzahl und Feedback. Nach jeder Antwort werden richtige und falsch gewählte Optionen farblich hervorgehoben.

---

## 📁 Projektstruktur

```
/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── assets/
│       └── sheltie-beere-Kopie.png
├── index.html
└── package.json
```

---

## 🛠️ Technologien

- **React** – `useState`, funktionale Komponenten, JSX
- **CSS3** – dynamische Klassen, Fortschrittsbalken per Inline-Style
- **Vite** – Build-Tool

---

## 📚 Kontext

Teil der **Softwareentwicklerin Frontend Javascript Zertifizierung** bei GFN (extern zertifiziert durch WPI), März – Juni 2026.
