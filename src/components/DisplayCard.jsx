import { Link } from "react-router-dom";

const DisplayCard = ({word, definition})=>{
    return(
         <div className="bg-zinc-900 w-100 text-stone-50 p-3">
            <p className="text-xl underline underline-offset-8 mb-2">{word}</p>
            <p>Defintion:</p>
            <p>{definition}</p>
            <div className="flex">
            <a href={`https://en.wiktionary.org/wiki/${word}#Adjective`} className="mr-auto text-xs underline underline-offset-1" target="_blank" rel="noopener noreferrer">Source</a>
            <Link to="/options" className="text-[11px] underline underline-offset-1 text-gray-400" target="_blank">Options</Link>
            </div>
         </div>
    )
}

export default DisplayCard