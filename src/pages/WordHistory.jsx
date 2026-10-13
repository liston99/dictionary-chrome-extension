import { useState } from "react";

function WordHistory() {

  return (
    <>
      <div className="flex justify-center items-center h-screen text-white">
        <div className="p-3 w-101 rounded-lg bg-zinc-900">
          <div>back</div>
          <div className="mb-2">
            <h1 className="text-center text-lg font-medium">Word History</h1>
          </div>
          <div className="bg-zinc-800 p-5 rounded overflow-y-auto h-70">
            <ul>
              <li>Word</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default WordHistory;
