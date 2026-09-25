import { useState } from "react";

const SearchCard = ({setWord, setBtnClick}) => {

    const [input, setInput] = useState('');

  const sendInputData = ()=>{
    if(!input === true) return;
    setBtnClick(true);
    setWord(input);
    setInput('');
  }
  return (
    <>
      <div className="w-100 h-17 bg-zinc-900 text-white">
        <div className="text-center font-bold h-5 w-full">
          <h1>My Dictionary</h1>
        </div>
        <div className="flex justify-center items-start gap-1 mt-1">
          <input
            className="border w-80 px-2 py-0.5 rounded outline-none"
            type="text"
            value={input}
            placeholder="Enter a word..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-sky-600 px-3 py-0.5 rounded cursor-pointer"
            id="defineBtn"
            onClick={sendInputData}
          >
            Define
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
