import { useState } from 'react'
import sheltieLogo from './assets/sheltie-beere-Kopie.png'
import './App.css'

// Alle Quizfragen als Array von Objekten.
// Jedes Objekt hat: question (String), options (Array mit 4 Antworten), correct (Index der richtigen Antwort)
const questions = [
  {
    question: "Warum wurden Shelties auf den Shetlandinseln ursprünglich kleiner gezüchtet?",
    options: [
      "Gezielte Kreuzung mit kleineren Spitz-Rassen zur Optik",
      "Insulärer Zwergwuchs – kleinere Tiere waren günstiger in Haltung und Futter",
      "Kleinere Hunde eigneten sich besser zum Treiben von Schafen in engen Stallgängen",
      "Britische Züchter bevorzugten kleinere Varianten für den Ausstellungsring"
    ],
    correct: 1
  },
  {
    question: "Was ist MDR1 (ABCB1)?",
    options: [
      "Eine Autoimmunerkrankung, die bei Shelties die Schilddrüse schädigt",
      "Ein Gendefekt, der die Blut-Hirn-Schranke für bestimmte Wirkstoffe durchlässig macht – kritisch: Ivermectin, Loperamid",
      "Eine rezessive Mutation, die zu progressivem Hörverlust führt",
      "Ein Stoffwechseldefekt, der die Leber bei der Medikamentenverarbeitung beeinträchtigt"
    ],
    correct: 1
  },
  {
    question: "Welche Fellfarbe ist beim Sheltie genetisch letal, wenn homozygot?",
    options: [
      "Tricolor (schwarz-weiß-braun)",
      "Blue Merle heterozygot",
      "Double Merle (Merle × Merle)",
      "Bi-Black"
    ],
    correct: 2
  },
  {
    question: "Was ist CEA und wann muss sie diagnostiziert werden?",
    options: [
      "Eine degenerative Netzhauterkrankung, die erst ab dem 3. Lebensjahr sichtbar wird",
      "Collie Eye Anomaly – angeboren, Untersuchung bis zur 7.–8. Lebenswoche nötig, danach maskiert durch Pigmentierung",
      "Eine entzündliche Augenerkrankung, die durch MDR1 begünstigt wird",
      "Ein Glaukom-Typ, der bei Collierassen genetisch vererbt wird"
    ],
    correct: 1
  },
  {
    question: "Warum gelten Shelties im Agility als 'zweischneidig'?",
    options: [
      "Ihr Fell verlangsamt sie auf feuchten Böden und erhöht die Fehlerquote",
      "Sie sind zwar schnell, aber ihre Knochendichte erhöht das Verletzungsrisiko",
      "Hohe Sensibilität und Stressanfälligkeit – Druck kann zu Shut-down führen, Motivationsaufbau ist entscheidend",
      "Sie tendieren zur Selbstständigkeit und ignorieren im Wettkampf häufig Signale"
    ],
    correct: 2
  },
  {
    question: "Welche Aussage zur Farbvererbung beim Sheltie ist korrekt?",
    options: [
      "Sable ist immer homozygot und vererbt sich dominant auf alle Nachkommen",
      "Ein Sable-Merle ist phänotypisch kaum von einem normalen Sable zu unterscheiden und züchterisch problematisch",
      "Tricolor × Tricolor kann niemals Sable-Welpen hervorbringen",
      "Blue Merle entsteht nur, wenn beide Elternteile das Merle-Gen tragen"
    ],
    correct: 1
  },
  {
    question: "Welche Fellfarben sind laut FCI-Standard beim Sheltie zugelassen?",
    options: [
      "Sable (inkl. Dark Sable), Tricolor, Blue Merle (inkl. Bi-Blue), Bi-Black",
      "Sable, Tricolor, Blue Merle, Bi-Blue, Red Merle",
      "Sable, Tricolor, Blue Merle, Isabella, Bi-Black",
      "Alle Merle-Varianten sowie Sable und Tricolor sind zugelassen"
    ],
    correct: 0
  }
]

function App() {
  // step: Steuert welche "Seite" angezeigt wird
  // 0 = Startscreen, 1–7 = Fragen, 8 = Ergebnisscreen
  const [step, setStep] = useState(0)

  // selected: Index der aktuell gewählten Antwort (null = noch keine Auswahl)
  const [selected, setSelected] = useState(null)

  // score: Zählt die korrekten Antworten
  const [score, setScore] = useState(0)

  // Aktuelle Frage aus dem Array holen (step 1 → Index 0, daher step - 1)
  const currentQuestion = questions[step - 1]

  function handleAnswer(index) {
    // Verhindert erneutes Klicken nach bereits getroffener Wahl
    if (selected !== null) return

    setSelected(index)

    // Punkt vergeben, wenn die gewählte Option korrekt ist
    if (index === currentQuestion.correct) {
      setScore(score + 1)
    }
  }

  // Gibt den CSS-Klassennamen für jeden Antwort-Button zurück
  // Vor Auswahl: neutral | Nach Auswahl: richtige = grün, falsch gewählte = rot
  function getOptionClass(index) {
    if (selected === null) return 'option-btn'
    if (index === currentQuestion.correct) return 'option-btn correct'
    if (index === selected) return 'option-btn wrong'
    return 'option-btn'
  }

  // Fortschrittsbalken: Prozentwert basierend auf aktueller Frage (1–7)
  const progressPercent = step >= 1 && step <= 7 ? (step / 7) * 100 : 0

  return (
    <div className="quiz-card">

      {/* === STARTSCREEN === */}
      {step === 0 && (
        <div className="welcome">
          <img src={sheltieLogo} alt="Sheltie Silhouette" className="sheltie-img" />
          <h1>Das Sheltie-Quiz</h1>
          <p>Teste dein Wissen über Genetik, Gesundheit und Wesen der Shetland Sheepdog.</p>
          <button className="btn-primary" onClick={() => setStep(1)}>
            Quiz starten →
          </button>
        </div>
      )}

      {/* === FRAGESCREEN (Fragen 1–7) === */}
      {step >= 1 && step <= 7 && (
        <div>
          {/* Fortschrittsanzeige */}
          <div className="progress-wrap">
            <span className="progress-label">Frage {step} von 7</span>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>

          <h2 className="question-text">{currentQuestion.question}</h2>

          {/* Antwort-Buttons: werden nach Auswahl per CSS eingefärbt und deaktiviert */}
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={getOptionClass(index)}
                onClick={() => handleAnswer(index)}
                disabled={selected !== null} // Keine weitere Auswahl nach Klick
              >
                {option}
              </button>
            ))}
          </div>

          {/* Weiter-Button erscheint erst nach einer Auswahl */}
          {selected !== null && (
            <div className="next-wrap">
              <button
                className="btn-primary"
                // State zurücksetzen für nächste Frage; bei letzter Frage → Ergebnis
                onClick={() => { setStep(step + 1); setSelected(null) }}
              >
                {step === 7 ? 'Ergebnis sehen →' : 'Weiter →'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* === ERGEBNISSCREEN === */}
      {step === 8 && (
        <div className="result">
          <img src={sheltieLogo} alt="Sheltie" className="sheltie-img" />
          <h2>Quiz abgeschlossen!</h2>
          <div className="result-score">{score} / 7</div>

          {/* Feedback-Text je nach Punktzahl */}
          <p className="result-sub">
            {score === 7 && "Perfekt! Du bist ein echter Sheltie-Experte. 🐾"}
            {score >= 5 && score < 7 && "Sehr gut! Dein Sheltie-Wissen kann sich sehen lassen."}
            {score >= 3 && score < 5 && "Nicht schlecht – mit etwas Übung wird's noch besser!"}
            {score < 3 && "Da ist noch Luft nach oben – aber du weißt jetzt mehr als vorher!"}
          </p>

          {/* Quiz zurücksetzen: alle drei States auf Ausgangswert */}
          <button
            className="btn-primary btn-restart"
            onClick={() => { setStep(0); setScore(0); setSelected(null) }}
          >
            Nochmal spielen →
          </button>
        </div>
      )}

    </div>
  )
}

export default App