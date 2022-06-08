import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Card from "../components/Card";
import {loadStagramFB} from '../redux/modules/stagram';

const Home = () => {
	const dispatch = useDispatch();
	const datas = useSelector((state) => state.stagram.list);

  useEffect(() => {
    dispatch(loadStagramFB())
  },[])
	return (
		<HomeWrap>
			{
				datas.map((el, idx) => {
					return(
						<Card image_url={el.image_url} key={idx}/>
					)
				})
			}
		</HomeWrap>
	);
}

const HomeWrap = styled.div`
	max-width: 900px; 
	width: 100%;
	margin: 0 auto;
	padding: 0 20px;
	box-sizing: border-box;
`
export default Home;