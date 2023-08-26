import React from "react";
import "./App.css";

const HomePage = (): any => {
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full flex flex-row">
          <div className="flex w-1/2 flex-grow h-full p-5 bg-books">
            <div className="flex w-full h-full flex-col justify-center">
              <div className="flex flex-row justify-end">
                <div className="w-3/4 flex flex-col my-10 div-right">
                  <img
                    src="./quotes.png"
                    alt="quotes"
                    style={{ width: "28px" }}
                  />
                  <div className="w-2/3 my-4">
                    <p
                      className="text-lg text-white ml-5"
                      style={{ lineHeight: "38px" }}
                    >
                      Those people who develop the ability to continuously
                      acquire new and better forms of knowledge that they can
                      apply to their work and to their lives will be the movers
                      and shakers in our society for the indefinite future
                    </p>
                    <p className="text-lg text-white my-3 ml-5">Brian Tracy</p>
                  </div>
                  <span className="my-3 flex w-2/3 justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="33"
                      viewBox="0 0 34 33"
                      fill="none"
                    >
                      <path d="M21 0H33.5V33H0V20.5H21V0Z" fill="white" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 flex-grow h-full p-10 bg-white">
            <div
              className="flex w-full flex-col justify-center"
              style={{ height: "70vh" }}
            >
              <div className="w-full flex justify-center">
                <div className="w-3/5 flex flex-col">
                  <p className="text-3xl font-bold">
                    Welcome to Quiz Millionaire
                  </p>
                  <p className="text-lg my-2 text-popGray">
                    Enter your name to get started
                  </p>

                  <div className="my-8 flex flex-col"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
