import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { apiKey } from "../shared/firebase";
import Card from "../components/Card";
import { loadStagramFB } from '../redux/modules/stagram';
import { loginCheckFB } from '../redux/modules/user';

const Home = () => {
	const dispatch = useDispatch();
	const datas = useSelector((state) => state.stagram.list);
	const user_info = useSelector((state) => state.user.user);
	const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
	const is_session = sessionStorage.getItem(_session_key)? true : false;

  useEffect(() => {
    dispatch(loadStagramFB())
		if(is_session){
			dispatch(loginCheckFB());
		}
  },[])
	return (
		<HomeWrap>
			{
				datas.map((el, idx) => {
					if(el.user_id === user_info?.id){
						return <Card id={el.id} image_url={el.image_url} key={idx} is_me/>
					} else {
						return <Card id={el.id} image_url={el.image_url} key={idx}/>
					}
					
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