import { AuthContextType, useAuth } from "../context/AuthContext";
import Search from "./Search";

export default function Header(): any {
  const auth = useAuth() as AuthContextType;

  return (
    <>
      <div className="w-full flex py-4 px-8">
        <div className="flex flex-col justify-center w-1/3">
          <p className="text-2xl font-black text-popGray">Quiz Time</p>
        </div>
        <div className="flex flex-grow w-1/3">
          <Search type="text" placeholder="Search" value="" />
        </div>
        {/*<div className="flex flex-grow mx-5 justify-center">
          <div className="flex flex-col">
            <Button
              btnText="Start Quiz"
              class="bg-popGray rounded-full py-2 px-6"
              submit={auth.handleProceed}
            />
          </div>
        </div>*/}
        <div className="flex flex-grow w-1/3 justify-center">
          <div className="flex flex-row">
            <div className="flex flex-col justify-center">
              <img
                src="../../profile-pic.jpg"
                alt="profile-pic"
                width={40}
                height={40}
                style={{
                  borderRadius: "50%",
                  height: "40px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="flex flex-col justify-center mx-3">
              <p className="text-base text-popGray">{auth.user}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
