import { useState } from "react";

function WordHistory() {
  const [wordItem, setWordItem] = useState(JSON.parse(localStorage.getItem("WordHistory")));
  return (
    <>
      <div className="flex justify-center items-center h-screen text-white">
        <div className="p-3 w-101 rounded-lg bg-zinc-900">
          <div className="cursor-pointer">Back</div>
          <div className="mb-2">
            <h1 className="text-center text-lg font-medium">Word History</h1>
          </div>
          <div className="bg-zinc-800 p-5 rounded overflow-y-auto h-70">
            <ul>
              {
              wordItem.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center bg-zinc-900 mb-1 rounded px-2 py-1"
                  >
                    {item}
                    <button className="text-sm ml-auto bg-zinc-800 px-2 rounded cursor-pointer"
                    onClick={()=>{
                      const filteredList = wordItem.filter((_,i)=> i!==index)
                      setWordItem(filteredList);
                      localStorage.setItem("WordHistory", JSON.stringify(filteredList))
                    }}
                    >Delete</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default WordHistory;
