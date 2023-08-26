import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

const App = (): any => {
  const [hasMounted, setIsMounted] = useState<boolean>(false);
  const [nextMounted, setNextMounted] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 1300);

    setTimeout(() => {
      setNextMounted(true);
    }, 1600);
  });

  return (
    <>
      <Header />
      <div className="w-full flex justify-center my-16 p-4">
        <div className="w-3/5 flex flex-col">
          <div className="w-full flex">
            <div
              className={`flex flex-grow flex-col p-2 ${
                hasMounted ? "hid-box" : "opacity-0"
              }`}
            >
              <div className="flex flex-col flex-grow justify-center">
                <p className="text-5xl">Learn</p>
                <p className="text-5xl my-1">new concepts</p>
                <p className="text-5xl my-1">for each question</p>
              </div>
            </div>

            <div
              className={`flex flex-grow justify-end p-2 ${
                nextMounted ? "hid-box" : "opacity-0"
              }`}
            >
              <div className="flex flex-col my-10">
                <img src="./g132.png" alt="people questions" />
              </div>
            </div>
          </div>

          <div
            className={`flex w-full mt-10 justify-center ${
              nextMounted ? "hid-box" : "opacity-0"
            }`}
          >
            <div className="p-4 w-1/3 shadow-md bg-skinYellow rounded-lg">
              <p className="text-base text-white w-full text-center">
                Start Quiz
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
