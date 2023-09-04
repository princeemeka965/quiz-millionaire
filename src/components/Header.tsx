import { AuthContextType, useAuth } from "../context/AuthContext";
import Search from "./Search";

export default function Header(): any {
  const auth = useAuth() as AuthContextType;

  return (
    <>
      <div className="w-full flex py-4 lg:px-10 md:px-10 px-3 fixed bg-white shadow-md">
        <div className="lg:flex md:flex flex-col justify-center w-1/3">
          <p className="text-2xl font-black text-popGray">Quiz Millionaire</p>
        </div>
        <div className="lg:flex md:flex flex-grow w-1/3">
          <Search type="text" placeholder="Search" value="" width={320} />
        </div>
        <div className="lg:flex md:flex flex-grow w-1/3 justify-end">
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
