import { FC, useRef } from "react";
import { useDispatch } from "react-redux";
import { setLoadedURL } from "../../../../store/actions/image";
import "./styles.css";

const LoadImage: FC = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  function onChange() {
    var reader = new FileReader();

    reader.onload = function (e) {
      dispatch(setLoadedURL(e.target!.result));
    };

    reader.readAsDataURL(inputRef.current!.files![0]);
  }

  return (
    <div>
      <input
        ref={inputRef}
        onChange={onChange}
        className="tool-load-image-input"
        type="file"
      />
      <button
        onClick={() =>
          window.confirm("Are you sure?") && inputRef.current?.click()
        }
        className="btn mr-2"
      >
        <i className="fas fa-upload"></i> Load
      </button>
    </div>
  );
};

export default LoadImage;
