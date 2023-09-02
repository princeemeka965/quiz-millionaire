import Header from "./components/Header";
import SideNav from "./components/SideNav";

const SelectTopic = (): any => {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col my-4 px-8">
        <SideNav />
      </div>
    </>
  );
};

export default SelectTopic;
