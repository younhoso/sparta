import React, {useRef} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../store/til";

const Write = () => {
	const dispatch = useDispatch();
  const navigate = useNavigate();
	
	const title_ref = useRef(null);
  const content_ref = useRef(null);
  const time_ref = useRef(null);

	const addTIL = () => {
    const til_data = {
      title: title_ref.current.value,
      content: content_ref.current.value,
      time: time_ref.current.value,
    };

    console.log(til_data);

    title_ref.current.value = "";
    content_ref.current.value = "";
    time_ref.current.value = "";

    dispatch(add({ til_data: til_data }));
    navigate(-1);
  };

	return (
		<div className="input-area"
        style={{
          margin: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div>
          <span>과목</span>
          <input ref={title_ref} />
        </div>

        <div>
          <span>내용</span>
          <input ref={content_ref} />
        </div>

        <div>
          <span>공부시간</span>
          <input ref={time_ref} />
        </div>

        <button
          style={{
            color: "#fff",
            background: "#065880",
            border: "none",
            borderRadius: "3px",
            padding: "1rem",
          }}
          onClick={addTIL}
        >
          추가하기
        </button>
		</div>
	);
}
export default Write;