import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import Button from "./components/Button";
import { useAuth } from "./context/AuthContext";
import { AuthContextType } from "./context/AuthContext";
import QuizInstruction from "./QuizInstruction";
import { useLoader } from "./context/TopLoadingBar";

let interval: any = null;

const HomePage = (): any => {
  const [name, setName] = useState<string>("");
  const [emptyError, setEmptyError] = useState<boolean>(false);
  const [disableBtn, setDisabled] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const auth = useAuth() as AuthContextType;
  const loader = useLoader();

  const handleNameChange = (data: string): void => {
    setName(data);
    setEmptyError(false);
  };

  const handleSubmit = (): void => {
    if (name === "") {
      setEmptyError(true);
    } else {
      createLoadingTimer();
      setDisabled(true);
    }
  };

  const createLoadingTimer = (): any => {
    if (count < 100) {
      interval = setInterval(() => {
        setCount((prevCounter) => prevCounter + 10);
        loader?.increament(10);
      }, 1000);
    }
  };

  if (count === 100) {
    clearInterval(interval);
    setTimeout(() => {
      setCount(0);
      setDisabled(false);
      loader?.reset();
      auth.login(name);
    }, 1000);
  }

  return (
    <>
      {auth.user === "" ? (
        <div
          className="w-full h-full flex flex-col"
          style={{ overflow: "hidden" }}
        >
          <div className="w-full h-full flex lg:flex-row md:flex-row flex-col">
            <div className="flex lg:w-1/2 md:w-1/2 w-full flex-grow h-full p-5 bg-books">
              <div className="flex w-full h-full flex-col justify-center">
                <div className="flex flex-row justify-end">
                  <div className="lg:w-3/4 md:w-3/4 w-full flex flex-col my-10 div-right">
                    <img
                      src="./quotes.png"
                      alt="quotes"
                      style={{ width: "28px" }}
                    />
                    <div className="lg:w-2/3 md:w-2/3 w-full my-4">
                      <p
                        className="text-lg text-white ml-5"
                        style={{ lineHeight: "38px" }}
                      >
                        Those people who develop the ability to continuously
                        acquire new and better forms of knowledge that they can
                        apply to their work and to their lives will be the
                        movers and shakers in our society for the indefinite
                        future
                      </p>
                      <p className="text-lg text-white my-3 ml-5">
                        Brian Tracy
                      </p>
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
            <div className="flex lg:w-1/2 md:w-1/2 w-full flex-grow h-full lg:p-10 md:p-10 py-10 px-5 bg-white">
              <div className="flex w-full flex-col lg:justify-center md:justify-center quiz-block">
                <div className="w-full flex justify-center div-left">
                  <div className="lg:w-3/5 md:w-3/5 w-full flex flex-col">
                    <p className="text-3xl font-bold">
                      Welcome to Quiz Millionaire
                    </p>
                    <p className="text-lg my-2 text-popGray">
                      Enter your name to get started
                    </p>

                    <div className="w-full border flex my-5" />

                    <div className="my-4 flex flex-col">
                      <InputField
                        label="Surname & Firstname"
                        type="text"
                        value={name}
                        placeholder="Enter full name here"
                        changeInput={handleNameChange}
                      />
                      {emptyError && (
                        <p className="my-3 text-red-300 w-full font-bold text-center text-sm">
                          Your full name is required
                        </p>
                      )}
                    </div>

                    <div className="my-5 flex flex-col">
                      <Button
                        disabled={disableBtn}
                        btnText="Login"
                        class="bg-popGray rounded-full w-full p-4"
                        submit={handleSubmit}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <QuizInstruction />
      )}
    </>
  );
};

export default HomePage;
