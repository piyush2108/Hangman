import { useState, useEffect, useCallback } from 'react'
import words from './wordsList.json'
import { HangmanDraw } from './components/hangmanDraw'
import { HangmanWord } from './components/hangmanWord'
import { Keyboard } from './components/keyboard'
import './css/app.css'

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLooser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => 
    guessedLetters.includes(letter)
  )

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter) || isWinner || isLooser) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isWinner, isLooser])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if(key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])

  return (
    <div className="App">
      <div className="heading">
        <h1>Hangman</h1>
      </div>

      <div className="playArea">
        <div className="resultMessage">
          {isWinner && "Winner!! Refresh to play again."}
          {isLooser && "You Loose!! Nice try. Refresh to try again."}
        </div>

        <HangmanDraw numberOfGuesses={incorrectLetters.length}/>

        <HangmanWord reveal={isLooser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>

        <div style={{alignSelf: "stretch"}}>
          <Keyboard 
            disabled={isWinner || isLooser}
            activeLetters={guessedLetters.filter(letter =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>

        <div className="footer">
          <p>💜Hangman💜</p>
          <p>Designed and Developed by Piyush Sharma</p>
        </div>
        
      </div>
    </div>
  )
}

export default App
