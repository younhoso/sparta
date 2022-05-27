import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const BucketList = (props) => {
  let history = useHistory();
  // const my_lists = props.list;
  const my_lists = useSelector((state) => state.bucket.list)
  return (
    <ListStyle>
      {my_lists.map((list, index) => {
        return (
          <ItemStyle
            // completed={list.completed}
            className={list.completed ? "is_open" : null}
            key={index}
            onClick={() => {
              history.push("/detail/"+index);
            }}
          >
            {list.text}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  height: 50vh;
  max-height: 50vh;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  &.is_open {
    background-color:slateblue;
    color: #fff;
  }
`;

export default BucketList;