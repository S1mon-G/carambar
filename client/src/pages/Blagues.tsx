import {useState } from "react"
import type {joke} from "../types/joke"
import "./Blagues.css"

export default function Blagues(){
    const [joke, setJoke] = useState<joke | null>(null)
    const [flipped, setFlipped] = useState(false)

    const fetchRandomJoke = () => {
        fetch(`http://localhost:3310/jokes/random`)
            .then((res) => res.json())
            .then((data) => {
                setJoke(data);
                setFlipped(false); 
            });
    };

    const cardFlip = () => {
        setFlipped(true)
    }

    return (
    <>
    <h1>BLAGUE AU HASARD</h1>
    <button type="button" onClick={fetchRandomJoke} className="random-button">go !</button>
    {joke && (
        <>
            <div className="joke-wrapper">
                <article className={`joke-article ${flipped ? "rotate" : ""}`}>
                    <h2 className="question">{joke.question}</h2>
                        <p className="flipped-joke">{joke.reponse}</p>
                </article>
            </div>
            <button type="button" onClick={cardFlip} className="answer-button">voir la réponse</button>
        </>
        
    )}
    </>)
}