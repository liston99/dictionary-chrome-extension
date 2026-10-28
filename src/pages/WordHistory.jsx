import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function WordHistory() {
  const [wordItem, setWordItem] = useState(JSON.parse(localStorage.getItem("WordHistory")));
  const isEmpty = wordItem.length === 0;

  
  const downloadHistoryAsTxt = ()=>{
    const text = wordItem.join('\n');

    const blob = new Blob([text], {type:"text/plain"});
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'Word History.txt';
    link.click();

    URL.revokeObjectURL(url);
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen text-white">
        <div className="p-3 w-101 rounded-lg bg-zinc-900">
          <div className="cursor-pointer">
            <Link to="/options">Back</Link>
          </div>
          <div className="mb-2">
            <h1 className="text-center text-lg font-medium">Word History</h1>
          </div>
          <div className="bg-zinc-800 p-5 rounded overflow-y-auto h-70 mb-2">
            {isEmpty && <p>List is empty!</p>}
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
          <Button onClick={()=>!isEmpty ? downloadHistoryAsTxt() : alert("Enter new words to download the history!")}>Download History As Text</Button>
        </div>
      </div>
    </>
  );
}

export default WordHistory;
