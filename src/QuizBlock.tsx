import React, { useState, useEffect, useCallback } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import { useAuth } from "./context/AuthContext";

const QuizBlock = (): any => {
  const auth = useAuth();
  let interval: any = null;

  const [quizList] = useState<{}[] | undefined>(auth?.quizData);
  const [quizCount, setQuizCount] = useState<number>(0);
  const [timer] = useState<number>(new Date().getTime() + 600 * 1000);
  const [countDown, setCountdown] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [answer, setStateAnswer] = useState<string>("");
  const [submit, setSubmit] = useState<boolean>(false);

  useEffect(() => {
    timerCountDown();
    formatOptionsBlock(quizCount);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = (): void => {
    auth?.quizData.slice(quizCount, quizCount + 1).forEach((quiz: any) => {
      if (quiz.correct_answer === answer) {
        setScore((prevState) => prevState + 10);
      }
    });

    if (quizCount < 19) {
      setQuizCount((prevState) => prevState + 1);
      formatOptionsBlock(quizCount + 1);
    }

    if (quizCount === 19) {
      setSubmit(true);
      document.body.style.overflow = "hidden";
    }

    for (var i = 0; i < document.getElementsByTagName("input").length; i++) {
      document.getElementsByTagName("input")[i].checked = false;
    }
  };

  const timerCountDown = (): void => {
    interval = setInterval(() => {
      setCountdown(timer - new Date().getTime());
    }, 1000);
  };

  const formatOptionsBlock = useCallback(
    (count: number): void => {
      const randomIndex: number = Math.floor(Math.random() * 4);

      auth?.quizData.slice(count, count + 1).forEach((quiz: any) => {
        if (quiz?.incorrect_answers.length === 3) {
          quiz?.incorrect_answers.splice(randomIndex, 0, quiz.correct_answer);
          quiz.options = quiz?.incorrect_answers;
        }
      });
    },
    [auth?.quizData]
  );

  const formattedTimer = (value: number): string => {
    const minutes = Math.floor((value % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((value % (1000 * 60)) / 1000);

    if (minutes === 0 && seconds === 0) {
      console.log("me");
      clearInterval(interval);
    }

    return `${minutes} mins ${seconds} secs`;
  };

  const setAnswer = (
    _event: React.MouseEvent<HTMLInputElement, MouseEvent>,
    value: string
  ): void => {
    setStateAnswer(value);
  };

  const decodeString = (data: string): any => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    return doc.documentElement.textContent;
  };

  const reloadQuiz = (): void => {
    window.location.reload();
  };

  return (
    <>
      {submit && (
        <div
          className="fixed w-full flex flex-col h-full"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.52)",
            zIndex: 9,
            top: 0,
          }}
        >
          <div
            className="w-full flex flex-col justify-center"
            style={{ height: "100vh" }}
          >
            <div className="w-full flex justify-center">
              <Card class="p-5 lg:w-1/3 md:w-1/3 w-3/4 rounded-xl flex flex-col justify-center">
                {score / 2 < 50 ? (
                  <>
                    <div className="w-full flex justify-center my-4">
                      <img
                        src="../delete.gif"
                        width={180}
                        height={180}
                        alt="trophy"
                      />
                    </div>
                    <p className="w-full text-lg font-black text-center">
                      Sorry, you failed the test
                    </p>
                    <p className="w-full text-base mt-3 text-center">
                      You scored {score / 2}%
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-full flex justify-center my-4">
                      <img
                        src="../trophy.png"
                        width={80}
                        height={80}
                        alt="trophy"
                      />
                    </div>
                    <p className="w-full text-lg font-black mt-4 text-center">
                      Congratulations, you passed the test
                    </p>
                    <p className="w-full text-base mt-3 text-center">
                      You scored {score / 2}%
                    </p>
                  </>
                )}
                <p
                  className="w-full text-base cursor-pointer font-black mt-20 mb-4 text-center"
                  onClick={reloadQuiz}
                >
                  Restart Quiz
                </p>
              </Card>
            </div>
          </div>
        </div>
      )}

      {quizList?.slice(quizCount, quizCount + 1).map((list: any, index) => (
        <div
          className="w-full flex flex-col my-10 lg:px-10 md:px-10"
          key={index}
        >
          <div className="w-full flex flex-row justify-center">
            <Card class="lg:w-4/5 md:w-4/5 w-full mx-3 p-3 flex flex-col rounded-3xl">
              <div className="w-full flex lg:flex-row md:flex-row flex-col">
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
                    Timer : {formattedTimer(countDown)}
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
                          Question {quizCount + 1}/20
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <div className="flex flex-row">
                        <p className="lg:text-lg md:text-lg text-base text-grayText">
                          {decodeString(list.question)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full py-1 px-5 lg:my-2 md:my-2 flex flex-col">
                <p className="lg:text-lg md:text-lg text-base font-semibold text-grayText">
                  Choose Answer
                </p>
                <div className="flex flex-col my-1">
                  {list.options
                    ? list.options.map((option: string, index: number) => (
                        <p
                          className="text-base p-1 flex flex-row text-grayText"
                          key={index}
                        >
                          <input
                            type="radio"
                            name="option"
                            value={decodeString(option)}
                            onClick={(e) => setAnswer(e, decodeString(option))}
                          />
                          <span className="flex text-base p-2">
                            {decodeString(option)}
                          </span>
                        </p>
                      ))
                    : null}
                  <div className="w-full flex justify-end my-3">
                    <div className="my-2 flex flex-col">
                      <Button
                        btnText={
                          quizCount < 19 ? "Next Question" : "Submit Quiz"
                        }
                        disabled={answer === ""}
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
