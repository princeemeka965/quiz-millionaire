import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";
import SideNav from "./components/SideNav";

const QuizInstruction = (): any => {
  const handleSubmit = (): void => {};

  return (
    <>
      <Header />
      <div className="w-full flex flex-col my-4 px-10">
        <div className="w-full flex flex-row">
          <SideNav />

          <Card class="w-4/5 mx-3 p-3 flex flex-col rounded-3xl">
            <div className="w-full py-3 px-5 flex flex-col">
              <p className="text-2xl font-bold my-2 text-grayText">
                Quiz Instructions
              </p>
              <p className="text-base text-grayText my-1">
                Read the following instructions
              </p>
            </div>
            <div className="w-full py-3 px-5 flex flex-col">
              <div className="flex flex-row w-full">
                <img
                  src="../quiz-cover.jpg"
                  className="rounded-xl"
                  style={{ width: "450px" }}
                  alt="quiz-cover"
                />
                <div className="flex flex-col mx-3 px-14">
                  <div className="flex flex-col h-16 justify-center">
                    <div className="flex flex-row">
                      <p className="text-lg font-semibold text-grayText">
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

                  <div className="flex flex-col h-16 justify-center">
                    <div className="flex flex-row">
                      <p className="text-lg font-semibold text-grayText">
                        Time Limit:
                      </p>
                      <p
                        className="text-base flex flex-col justify-center mx-3 text-grayText"
                        style={{ marginTop: 1 }}
                      >
                        30 Mins
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col h-16 justify-center">
                    <div className="flex flex-row">
                      <p className="text-lg font-semibold text-grayText">
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

                  <div className="flex flex-col h-16 justify-center">
                    <div className="flex flex-row">
                      <p className="text-lg font-semibold text-grayText">
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

            <div className="w-full py-3 px-5 my-2 flex flex-col">
              <p className="text-lg font-semibold text-grayText">
                Instructions
              </p>
              <div className="flex flex-col my-3">
                <p className="text-base text-grayText">
                  This quiz consists of 5 multiple-choice questions. To be
                  successful with the quizzes, it’s important to conversant with
                  the topics. Keep the following in mind:
                </p>
                <p className="text-base my-3 text-grayText">
                  Timing - You need to complete each of your attempts in one
                  sitting, as you are allotted 30 minutes to each attempt.
                  Answers - You may review your answer-choices and compare them
                  to the correct answers after your final attempt.
                </p>
                <p className="text-base my-1 text-grayText">
                  To start, . When finished, click the "Submit " button.
                </p>
                <div className="w-full flex justify-end my-3">
                  <div className="my-2 flex flex-col">
                    <Button
                      btnText="Start Quiz"
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
    </>
  );
};

export default QuizInstruction;
