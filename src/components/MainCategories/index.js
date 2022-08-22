import { categories } from "../../data-dev/Categories";
import { useDispatch } from "react-redux";
import { fetchAllNews } from "../../store/actions/newsActions";
import { NavLink } from "react-router-dom";

const MainCategories = () => {
  const dispatch = useDispatch();

  const chaneCategoryHandler = (category) => {
    dispatch(fetchAllNews(category));
  };

  return (
    <div className="bg-img h-60">
      <div className="flex items-center flex-col justify-center h-full ">
        <h1 className="font-bold text-[50px] text-center text-white mb-4 -mt-10">
          News
        </h1>
        <div className="flex items-center justify-center gap-2">
          {categories.map((data) => (
            <NavLink
              to={`/${data.category}`}
              onClick={chaneCategoryHandler.bind(null, data.category)}
              key={data.id}
              className={`font-bold p-3 text-center min-w-[92px] rounded-[10px] cursor-pointer hover:bg-slate-200`}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#232d45" : "white",
                color: isActive ? "white" : "black",
              })}
            >
              {data.category.charAt(0).toUpperCase() + data.category.slice(1)}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCategories;
