import { AuthContextType, useAuth } from "../context/AuthContext";
import Card from "./Card";
import Search from "./Search";

export default function Header(): any {
  const auth = useAuth() as AuthContextType;

  const getInitials = (name: string): string => {
    let initials: string = "";

    if (name) {
      const nameSplit = name.split(" ");
      const nameLength = nameSplit.length;
      if (nameLength > 1) {
        initials =
          nameSplit[0].substring(0, 1) +
          nameSplit[nameLength - 1].substring(0, 1);
      } else if (nameLength === 1) {
        initials = nameSplit[0].substring(0, 1);
      }
    }

    return initials.toUpperCase();
  };

  return (
    <>
      <div className="w-full flex py-4 lg:px-10 md:px-10 px-3 fixed bg-white shadow-md">
        <div className="lg:flex md:flex hidden flex-col justify-center w-1/3">
          <p className="text-2xl font-black text-popGray">Quiz Millionaire</p>
        </div>
        <div className="lg:flex md:flex hidden flex-grow w-1/3">
          <Search type="text" placeholder="Search" value="" width={"320px"} />
        </div>
        <div className="lg:hidden md:hidden flex flex-grow w-1/3">
          <Search type="text" placeholder="Search" value="" width={"100%"} />
        </div>
        <div className="lg:flex md:flex hidden flex-grow w-1/3 justify-end">
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

        <div className="lg:hidden md:hidden flex mx-5">
          <Card class="w-10 h-10 flex justify-center border rounded-full">
            <span className="text-base py-2 font-semibold">
              {getInitials(auth.user)}
            </span>
          </Card>
        </div>
      </div>
    </>
  );
}
