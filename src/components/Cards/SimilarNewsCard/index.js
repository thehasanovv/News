import { useNavigate } from "react-router-dom";
import { getSelectedNews } from "../../../store/slices/newsSlice";
import { useDispatch } from "react-redux";

const SimilarNewsCard = ({ similarNews }) => {
  const { title, imageUrl, id } = similarNews;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const readSimilarNewsHandler = (id) => {
    navigate(`/news/${id}`);
    dispatch(getSelectedNews(id));
  };

  return (
    <div
      className="relative flex-1 mb-10 h-52 cursor-pointer"
      onClick={readSimilarNewsHandler.bind(null, id)}
    >
      <img src={imageUrl} className="w-full h-full z-0" />
      <div className="bg-black absolute top-0 left-0 w-full h-full opacity-60 hover:opacity-75"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-white ">
        <p className="px-2 text-xl">{title.slice(0, 90)}...</p>
        <div className="flex items-center gap-4 px-2 mt-4 text-[10px]">
          <div className="flex items-center gap-1">
            <img src="/images/icon-clock.svg" />
            <span className="">16 Jan 2022</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/images/icon-user.svg" />
            <span className="">Sakshita Khosla</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarNewsCard;
