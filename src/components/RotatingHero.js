import React, { useState, useEffect } from "react"
import data from "../assets/data/heroArray"

function RotatingHero() {
  const [words, setWords] = useState(data)
  const [index, setIndex] = React.useState(0)

  useEffect(() => {
    const lastIndex = words.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, words])

  useEffect(() => {
    let count = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => {
      clearInterval(count)
    }
  }, [index])

  console.log(index)

  return (
    <h4>
      <div>
        {words.map((word, wordIndex) => {
          const { id, name } = word

          let position = "nextSpace"
          if (wordIndex === index) {
            position = "activeSpace"
          }
          if (
            wordIndex === index - 1 ||
            (index === 0 && wordIndex === word.length - 1)
          ) {
            position = "lastSlide"
          }
          // console.log(wordIndex)
          return (
            <span className={position} key={id}>
              {name}
            </span>
          )
        })}
      </div>
      <div className="recipes-word">recipes</div>
    </h4>
  )
}

export default RotatingHero
