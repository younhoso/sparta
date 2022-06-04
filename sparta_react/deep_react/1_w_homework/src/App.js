import styled from "styled-components";
import React,{useRef, useState} from "react";
/**
 * 할 일을 정리해보자! 
 * 1. 뷰 만들기 / 반으로 갈라져야 해!
 *    제목 / 내용 / 공부시간을 인풋이 필요해!
 * 2. 입력한 내용이 추가가 되어야 해!
 *    state를 사용하자!
 * 3. state에 추가한 내용이 list 뷰에 뿌려져야 해!
 */
function App() {
  const [tilList, setTilList] = useState([]);
  const title_ref = useRef(null);
  const content_ref = useRef(null);
  const time_ref = useRef(null);
  
  const addTIL = () => {
    const til_data = {
      title: title_ref.current.value,
      content: content_ref.current.value,
      time: time_ref.current.value
    }

    setTilList([...tilList, til_data])
  }
  console.log(tilList)

  return (
    <Apps className="App">
      <div className="title-area">
        <h1>TIL</h1>
      </div>
      <TilList className="til-list">
        <div>
          {tilList.map((el, idx) => {
            return(
              <div key={idx} className="til-item">
                <h3>{el.title}</h3>
                <p>{el.content}</p>
                <p>{el.time}</p>
              </div>
            )
          })}
          
        </div>
        <div className="input-area">
          <div>
            <span>과목</span>
            <input ref={title_ref}/>
          </div>
          <div>
            <span>내용</span>
            <input ref={content_ref}/>
          </div>
          <div>
            <span>공부시간</span>
            <input ref={time_ref} />
          </div>
          <button onClick={addTIL}>추가하기</button>
        </div>
      </TilList>
    </Apps>
  );
}

const Apps = styled.div`
  max-width: 960px;
  margin: 50px auto 0 auto;
`;

const TilList = styled.div`
  display: flex;
  justify-content: space-between;
  .til-item {
    width: 20vw;
    border: 1px solid #333;
    padding: 10px;
    margin-bottom: 20px;
  }
  .input-area {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
`
export default App;
