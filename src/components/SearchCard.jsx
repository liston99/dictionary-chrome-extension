import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchCard = ({ setWord, setBtnClick }) => {
  const [input, setInput] = useState("");

  //store in localstorage
  let itemNumber = 0;
  const [wordHistory, setWordHistory] = useState(JSON.parse(localStorage.getItem("WordHistory")) || []);

  const sendInputData = () => {
    if (!input === true) return;
    setBtnClick(true);
    setWord(input);
    setInput("");
   if(wordHistory.includes(input)) return;
    setWordHistory([...wordHistory, input])
  };

  useEffect(()=>{
    localStorage.setItem("WordHistory", JSON.stringify(wordHistory))
  }, [input])
  return (
    <>
      <div className="w-100 h-22 bg-zinc-900 text-white">
        <div className="text-center font-bold h-6 w-full">
          <h1>My Dictionary</h1>
        </div>
        <div className="flex justify-center items-start gap-1 mt-1 mb-3">
          <input
            className="border w-80 px-2 py-0.5 rounded outline-none"
            type="text"
            value={input}
            placeholder="Enter a word..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(event)=>{
              if(event.key === 'Enter') sendInputData();
            }}
          />
          <button
            className="bg-sky-600 px-3 py-0.5 rounded cursor-pointer"
            id="defineBtn"
            onClick={sendInputData}
          >
            Define
          </button>
        </div>
        <div className="text-zinc-500 text-[12px] text-center"><p>My Dictionary - <span><Link to="/options" target="_blank" className="underline underline-offset-2">Extension Options</Link></span></p></div>
      </div>
    </>
  );
};

export default SearchCard;
