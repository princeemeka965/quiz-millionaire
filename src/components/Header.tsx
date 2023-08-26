import React from "react";

const Header = (): any => {
  return (
    <div className="w-full flex flex-row justify-center p-4 shadow-lg">
      <div className="flex flex-col justify-center">
        <img
          src="./quiz-cap.png"
          alt="quiz-logo"
          style={{
            width: "20px",
            height: "15px",
            transform: "rotate(-27deg)",
          }}
        />
        <div className="w-auto ml-2 flex">
          <p className="text-2xl font-black">Quiz</p>
          <p
            className="text-2xl font-black text-skinYellow"
            style={{ opacity: "0.8", marginTop: 1 }}
          >
            Grad
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
