import styles from "../css/keyboard.module.css"

const KEYS = [
     "a",
     "b",
     "c",
     "d",
     "e",
     "f",
     "g",
     "h",
     "i",
     "j",
     "k",
     "l",
     "m",
     "n",
     "o",
     "p",
     "q",
     "r",
     "s",
     "t",
     "u",
     "v",
     "w",
     "x",
     "y",
     "z",
]

type HangmanKeyboardProps = {
     disabled: boolean
     activeLetters: string[]
     inactiveLetters: string[]
     addGuessedLetter: (letter: string) => void
}

export function Keyboard({disabled, activeLetters, inactiveLetters, addGuessedLetter} : HangmanKeyboardProps){
     return(
          <div className="keyboard">
               {KEYS.map(key => {
                    const isActive = activeLetters.includes(key)
                    const isInactive = inactiveLetters.includes(key)

                    return(
                         <button 
                              onClick={() => addGuessedLetter(key)}
                              className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive: ""}`} key={key}
                              disabled={isActive || isInactive || disabled}
                         >
                              {key}
                         </button>
                    )
                    
               })}
          </div>
     )
}