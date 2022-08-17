import MainCategories from "../components/MainCategories";
import MainCards from "../components/MainCards";
import axios from "axios";
import SpinnerLoading from "../components/SpinnerLoading";
import { dummyCategories } from "../data-dev/Categories";
import { useEffect, useState } from "react";

const Main = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const result = await axios.get(
        `https://inshorts.deta.dev/news?category=${category}`
      );
      setNews(result.data);
      setLoading(false);
    };
    getData();
  }, [category]);

  return (
    <div className="relative bg-slate-100">
      <div className="bg-img h-60">
        <MainCategories
          categories={dummyCategories}
          setCategory={setCategory}
        />
      </div>
      {loading ? (
        <SpinnerLoading />
      ) : (
        <div className="grid grid-col gap-5 max-w-5xl w-full absolute top-52 left-1/2 -translate-x-1/2 pb-10">
          {news?.data?.slice(0, 6).map((item) => (
            <MainCards
              key={item.id}
              id={item.id}
              author={item.author}
              date={item.date}
              content={item.content}
              imageUrl={item.imageUrl}
              title={item.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
