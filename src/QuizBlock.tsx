import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import { useAuth } from "./context/AuthContext";

const QuizBlock = (): any => {
  const [disableBtn, setDisabled] = useState<boolean>(false);
  const [quizList, handleQuizList] = useState<{}[] | undefined>([]);
  const [quizCount, setQuizCount] = useState<number>(1);

  const auth = useAuth();

  useEffect(() => {
    handleQuizList(auth?.quizData);
  }, [auth?.quizData]);

  const handleSubmit = (): void => {
    setDisabled(true);
    setQuizCount((prevState) => prevState + 1);
  };

  return (
    <>
      {quizList?.map((list: any, index) => (
        <div
          className="w-full flex flex-col my-10 lg:px-10 md:px-10"
          key={index}
        >
          <div className="w-full flex flex-row justify-center">
            <Card class="lg:w-4/5 md:w-4/5 w-full mx-3 p-3 flex flex-col rounded-3xl">
              <div className="w-full flex flex-row">
                <div className="py-3 px-5 flex flex-col flex-grow">
                  <p className="text-2xl font-black my-2 text-grayText">
                    {list.category} Quiz
                  </p>
                  <p className="text-base text-grayText my-1">
                    Answer the question below
                  </p>
                </div>

                <div className="py-3 px-5 flex flex-col">
                  <p className="text-2xl font-black my-2 text-grayText">
                    Timer
                  </p>
                </div>
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
                          Question {quizCount}/20
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col lg:h-16 md:h-16 h-10 justify-center">
                      <div className="flex flex-row">
                        <p className="lg:text-lg md:text-lg text-base text-grayText">
                          {list.question}
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
      ))}
    </>
  );
};

export default QuizBlock;
