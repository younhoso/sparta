import axios from "axios";

const instance = axios.create({
	headers: {"Content-Type": "application/json"},
	timeout: 5000
});

// 요청을 보내기 전에 가로채서 할 수 있는 것들
instance.interceptors.request.use((config) => {
	config.headers["X-AUTH-TOKEN"] = "1234";
	return config;
}, (err) => {
	return Promise.reject(err);
});

// 응답을 보내기 전에 가로채서 할 수 있는 것들
instance.interceptors.response.use((res) => {
	console.log(res)
	return res;
}, (err) => {
	console.log(err)
	return Promise.reject(err);
})



export default instance;