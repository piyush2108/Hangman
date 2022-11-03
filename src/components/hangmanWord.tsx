type HangmanWordProps = {
     reveal?: boolean,    
     guessedLetters: string[],
     wordToGuess: string
}

export function HangmanWord({reveal = false, guessedLetters, wordToGuess}: HangmanWordProps){

     return(
          <div className="word">
               {wordToGuess.split("").map((letter, index) => (
                    <span className="letterContainer" key={index}>
                         <span 
                              style={{
                                   visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                                   color: !guessedLetters.includes(letter) && reveal ? "#da3131" : "#000000"
                              }}
                         >{letter}</span>
                    </span>
               ))}
          </div>
     )
}