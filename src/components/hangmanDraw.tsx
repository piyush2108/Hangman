const HEAD = (
     <div className="head"></div>
)

const HANDLEFT = (
     <div className="left-hand"></div>
)

const HANDRIGHT = (
     <div className="right-hand"></div>
)

const BODY = (
     <div className="body"></div>
)

const LEGLEFT = (
     <div className="left-leg"></div>
)

const LEGRIGHT = (
     <div className="right-leg"></div>
)

type HangmanDrawProps = {
     numberOfGuesses: number
}

const BODY_PARTS = [HEAD, BODY, HANDLEFT, HANDRIGHT, LEGLEFT, LEGRIGHT]

export function HangmanDraw({numberOfGuesses}: HangmanDrawProps){
     return(
          <div className="hangmanBody">
               {BODY_PARTS.slice(0, numberOfGuesses)}
               <div className="test"></div>
               <div className="top-bar" />
               <div className="hanging-bar" />
               <div className="middle-bar" />
               <div className="bottom-bar" />
          </div>
     )
}