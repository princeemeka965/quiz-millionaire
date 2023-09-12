import React, { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";
import { useLoader } from "./context/TopLoadingBar";
import axios from "axios";
import { useAuth } from "./context/AuthContext";
import QuizBlock from "./QuizBlock";

let interval: any = null;

const QuizInstruction = (): any => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const [disableBtn, setDisabled] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const loading = useLoader();
  const auth = useAuth();

  const handleSubmit = (): void => {
    createLoadingTimer();
  };

  const createLoadingTimer = (): void => {
    setDisabled(true);

    setTimeout(() => {
      axios
        .get("https://opentdb.com/api.php?amount=20&type=multiple")
        .then((response) => {
          setCount(100);
          loading?.increament(100);
          auth?.handleProceed();
          auth?.saveQuizQuestions(response.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);

    if (count < 100) {
      interval = setInterval(() => {
        setCount((previousState) => previousState + 10);
        loading?.increament(10);
      }, 1000);
    }
  };

  if (count === 100) {
    clearInterval(interval);
    setTimeout(() => {
      setCount(0);
      setDisabled(false);
      loading?.reset();
    });
  }

  return (
    <>
      <div className="flex flex-col mb-24">
        <Header />
      </div>
      {!auth?.proceed ? (
        <div className="w-full flex flex-col my-10 lg:px-10 md:px-10">
          <div className="w-full flex flex-row justify-center">
            <Card class="lg:w-4/5 md:w-4/5 w-full mx-3 p-3 flex flex-col rounded-3xl">
              <div className="w-full py-3 px-5 flex flex-col">
                <p className="text-2xl font-bold my-2 text-grayText">
                  Quiz Instructions
                </p>
                <p className="text-base text-grayText my-1">
                  Read the following instructions
                </p>
              </div>
              <div className="w-full py-3 px-5 flex flex-col">
                <div className="flex lg:flex-row md:flex-row flex-col w-full">
                  <img
                    src="../quiz-cover.jpg"
                    className="rounded-xl"
                    style={{ width: "450px" }}
                    alt="quiz-cover"
                  />
                  <div className="flex flex-col lg:mx-3 md:mx-3 mx-1 my-2 lg:px-14 md:px-14">
                    <div className="flex flex-col lg:h-16 md:h-16 h-10 justify-center">
                      <div className="flex flex-row">
                        <p className="lg:text-lg md:text-lg text-base font-semibold text-grayText">
                          Date:
                        </p>
                        <p
                          className="text-base flex flex-col justify-center mx-3 text-grayText"
                          style={{ marginTop: 1 }}
                        >
                          {new Date().getDate()}/{new Date().getMonth() + 1}/
                          {new Date().getFullYear()}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col lg:h-16 md:h-16 h-10 justify-center">
                      <div className="flex flex-row">
                        <p className="lg:text-lg md:text-lg text-base font-semibold text-grayText">
                          Time Limit:
                        </p>
                        <p
                          className="text-base flex flex-col justify-center mx-3 text-grayText"
                          style={{ marginTop: 1 }}
                        >
                          10 Mins
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col lg:h-16 md:h-16 h-10 justify-center">
                      <div className="flex flex-row">
                        <p className="lg:text-lg md:text-lg text-base font-semibold text-grayText">
                          Attempts:
                        </p>
                        <p
                          className="text-base flex flex-col justify-center mx-3 text-grayText"
                          style={{ marginTop: 1 }}
                        >
                          Unlimited
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col lg:h-16 md:h-16 h-10 justify-center">
                      <div className="flex flex-row">
                        <p className="lg:text-lg md:text-lg text-base font-semibold text-grayText">
                          Points:
                        </p>
                        <p
                          className="text-base flex flex-col justify-center mx-3 text-grayText"
                          style={{ marginTop: 1 }}
                        >
                          200 Points
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full py-3 px-5 lg:my-2 md:my-2 flex flex-col">
                <p className="lg:text-lg md:text-lg text-base font-semibold text-grayText">
                  Instructions
                </p>
                <div className="flex flex-col my-3">
                  <p className="text-base text-grayText">
                    This quiz consists of 5 multiple-choice questions. To be
                    successful with the quizzes, it’s important to conversant
                    with the topics. Keep the following in mind:
                  </p>
                  <p className="text-base my-3 text-grayText">
                    Timing - You need to complete each of your attempts in one
                    sitting, as you are allotted 30 minutes to each attempt.
                    Answers - You may review your answer-choices and compare
                    them to the correct answers after your final attempt.
                  </p>
                  <p className="text-base my-1 text-grayText">
                    To start, . When finished, click the "Submit " button.
                  </p>
                  <div className="w-full flex justify-end my-3">
                    <div className="my-2 flex flex-col">
                      <Button
                        btnText="Start Quiz"
                        disabled={disableBtn}
                        class="bg-popGray rounded-full w-full py-2 px-5"
                        submit={handleSubmit}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ) : (
        <QuizBlock />
      )}
    </>
  );
};

export default QuizInstruction;
