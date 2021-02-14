import { FC } from "react";
import { useDispatch } from "react-redux";
import { setLoadedURL } from "../../../../store/actions/image";

const ClearAll: FC = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() =>
        window.confirm("Are you sure?") && dispatch(setLoadedURL("clear"))
      }
      className="btn mr-1"
    >
      <i className="fas fa-trash"></i> Clear all
    </button>
  );
};

export default ClearAll;
