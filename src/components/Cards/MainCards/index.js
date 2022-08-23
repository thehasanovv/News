import Line from "../../Line";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedNews } from "../../../store/slices/newsSlice";
import { useNavigate } from "react-router-dom";

const MainCards = () => {
  let navigate = useNavigate();
  const store = useSelector((state) => state.news);
  const dispatch = useDispatch();

  const readMoreHandler = (id) => {
    navigate(`/news/${id}`);
    dispatch(getSelectedNews(id));
  };

  return (
    <div className="grid grid-col gap-5 max-w-5xl w-full absolute top-52 left-1/2 -translate-x-1/2 pb-10 px-10">
      {store.news &&
        store.news.slice(0, 9).map((data) => (
          <div
            key={data.id}
            className="rounded-[10px] shadow-xl cursor-pointer hover:scale-[1.01] flex flex-col justify-between"
          >
            {/* Cart image */}
            <div className="h-44">
              <img
                src={`${data.imageUrl}`}
                className="rounded-[10px] block m-auto w-full h-full object-cover"
                alt="news"
              />
            </div>
            {/* Cart body */}
            <div className="p-2">
              <h2 className="text-[#3D3D3D] text-sm leading-[17px]">
                {data.title}
              </h2>
              <Line />
              <p className="text-[#646464] text-[13px] leading-[17px]">
                {data.content.slice(0, 130)}...
              </p>
              <button
                className="mt-1 text-sm text-blue-400 hover:text-blue-500"
                onClick={readMoreHandler.bind(null, data.id)}
              >
                Read more
              </button>
            </div>
            {/* Cart footer */}
            <div className="flex items-center gap-4 px-2 py-4">
              <div className="flex items-center gap-1">
                <img src="/images/icon-clock.svg" alt="time icon" />
                <span className="">{data.date.split(",")[0]}</span>
              </div>
              <div className="flex items-center gap-1">
                <img src="/images/icon-user.svg" alt="user icon" />
                <span className="">{data.author}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MainCards;
