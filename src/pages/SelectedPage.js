import MainCategories from "../components/MainCategories";
import SimilarNewsCard from "../components/Cards/SimilarNewsCard";
import Line from "../components/Line";
import { useSelector } from "react-redux/es/exports";
import { useEffect, useState } from "react";

const SelectedPage = () => {
  const [num, setNum] = useState(0);
  const { selected, news } = useSelector((state) => state.news);

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setNum(randomNumberInRange(0, 22));
  }, []);

  return (
    <div className="relative bg-slate-100 font-sans">
      <MainCategories />
      <div className="max-w-5xl w-full m-auto -translate-y-8 pb-10 px-10">
        <div className="p-2 bg-white rounded-[10px] flex align-center justify-between gap-5">
          <div className="w-2/5 ">
            <div className="h-60">
              <img
                src={selected.imageUrl}
                alt={"selected img"}
                className="rounded-[10px] w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-4 px-2 py-4">
              <div className="flex items-center gap-1">
                <img src="/images/icon-clock.svg" alt={"selected img"} />
                <span className="">{selected.date.split(",")[0]}</span>
              </div>
              <div className="flex items-center gap-1">
                <img src="/images/icon-user.svg" alt={"selected img"} />
                <span className="">{selected.author}</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-[#3D3D3D] leading-6 font-bold">
              {selected.title}
            </h2>
            <Line />
            <p className="text-[#646464] leading-[19px] font-normal mb-2">
              {selected.content}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl w-full m-auto px-10">
        <h3 className="text-xl font-bold">Similar News</h3>
        <div className="flex justify-between align-center gap-2">
          {news.slice(num, num + 3).map((similarNews) => (
            <SimilarNewsCard key={similarNews.id} similarNews={similarNews} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedPage;
