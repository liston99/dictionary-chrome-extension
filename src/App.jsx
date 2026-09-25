import { useEffect, useState } from "react";
import SearchCard from "./components/SearchCard";
import DisplayCard from "./components/DisplayCard";

function App() {
  const [word, setWord] = useState(null);
  const [btnClick, setBtnClick] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      const response = await fetch(
        `https://freedictionaryapi.com/api/v1/entries/en/${word}`,
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    };

    fetchdata();
  }, [word]);

  return (
    <>
      <SearchCard setWord={setWord} setBtnClick={setBtnClick} />
      {loading && <p className="m-0 p-2 bg-zinc-900 text-white text-center w-100">Loading...</p>}
      {btnClick && !loading && (
        <DisplayCard
          word={data?.word}
          definition={data?.entries?.[0]?.senses?.[0]?.definition}
        />
      )}
    </>
  );
}

export default App;
