const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewarse = jsonServer.defaults();

const port = 5001
server.use(middlewarse);

// 회원가입
server.get("/api/signup", (req, res) => {
	res.status(200).jsonp({result : true})
});

server.post("/api/signup", (req, res) => {
	res.status(200).jsonp({result : true})
});

// 아이디 중복 검사
server.post("/api/signup/useridCheck", (req, res) => {
	res.status(200).jsonp({result : false})
});

// 로그인 요청
server.post("/api/login", (req, res) => {
	res.status(200).jsonp({accessToken : '1q2w3e4r5t6y7u8i9o0p'})
});

// 로그인 중복 검사
server.get("/api/loginCheck", (req, res) => {
	res.status(200).jsonp({result : false})
});

// 로그아웃
server.get("/user/logout", (req, res) => {
	res.status(200).jsonp({result : "로그아웃 되었습니다"})
});


server.use((req, res, next) => {
	next();
});

server.use(router);
server.listen(`${port}`, () => {
	console.log(`server is runing http://localhost:${port}`);
})