import React,{useRef} from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import img from "./scc_img01.png";
import { setName } from "./redux/modules/user";

function Start({name}) {
	const history = useHistory();
  const dispatch = useDispatch();
  const name_ref = useRef(null);

	return (
		<Container>
			<Img
        src={img}
        style={{
          width: "60vw",
          margin: "16px",
        }}
      />
			<h1>
        나는{" "}
        <Highlight
          style={{
            backgroundColor: "#fef5d4",
            padding: "5px 10px",
            borderRadius: "30px",
          }}
        >
          {name}
        </Highlight>
        에 대해 얼마나 알고 있을까?
      </h1>
			<input
        ref={name_ref}
        style={{
          border: "1px solid #dadafc",
          borderRadius: "30px",
          padding: "10px",
          width: "100%",
        }}
      />
			<Button
        onClick={() => {
          dispatch(setName(name_ref.current.value));
          history.push("/quiz");
        }}
      >
        시작하기
      </Button>
		</Container>
	);
}

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.is_main? "center" : "space-between"};
  padding: 16px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 10px 36px;
  background: #dadafc;
  border: #dadafc;
  border-radius: 30px;
  margin: 36px 0px;
`;

export const Img = styled.img`
  width: 60vw;
  margin: 16px;
`;

export const Highlight = styled.span`
  font-weight: bold;
  background: #fef5d4;
  padding: 5px 10px;
  border-radius: 30px;
`;
export default Start;