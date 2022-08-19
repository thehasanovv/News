import MainCategories from "../components/MainCategories";
import MainCards from "../components/Cards/MainCards";
import SpinnerLoading from "../components/SpinnerLoading";
import { useSelector } from "react-redux";

const Main = () => {
  const { isLoading } = useSelector((state) => state.news);

  return (
    <div className="relative bg-slate-100 font-sans">
      <MainCategories />
      {isLoading ? <SpinnerLoading /> : <MainCards />}
    </div>
  );
};

export default Main;
