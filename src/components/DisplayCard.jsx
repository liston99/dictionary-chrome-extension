const DisplayCard = ({word, definition})=>{
    return(
         <div className="bg-zinc-900 w-100 text-stone-50 p-3">
            <p className="text-xl underline underline-offset-8 mb-2">{word}</p>
            <p>Defintion:</p>
            <p>{definition}</p>
            <a href={`https://en.wiktionary.org/wiki/${word}#Adjective`} className="text-xs underline underline-offset-1" target="_blank" rel="noopener noreferrer">Source</a>
         </div>
    )
}

export default DisplayCard