import { useEffect, useState } from "react";

function DictionaryPopup({ word, top, left, height }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://freedictionaryapi.com/api/v1/entries/en/${word}`,
      );
      const dataObj = await response.json();
      setData(dataObj)
      console.log(dataObj);
    };

    fetchData();
  }, [word]);

  return (
    <div
      className="fixed z-[2147483647] max-w-[300px] rounded-lg border border-gray-900 bg-white px-3 py-2 font-sans text-sm text-gray-900"
      style={{ top: top + height + 5, left }}
    >
      <h3 className="m-0">{data?.word}</h3>
    <p>{data?.entries?.[0]?.senses?.[0]?.definition}</p>
    </div>
  );
}

export default DictionaryPopup;
