import Button from "../components/Button";
import { Link } from "react-router-dom";

function Options() {
  return (
    <>
      <div className="flex justify-center items-center h-screen text-white">
        <div className="p-3 w-101 text-center rounded-lg bg-zinc-900">
          <h1 className="text-2xl self-start">Options</h1>
          <div className="p-4 flex gap-4">
            <p>Word History:</p>
            <Link to="/WordHistory">
            <Button>Show History</Button>
            </Link>
            <Button>Reset History</Button>
          </div>
        </div>  
      </div>
    </>
  );
}

export default Options;
