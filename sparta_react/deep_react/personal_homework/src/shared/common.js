export const emailCheck = (email) => {
	let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;
	return _reg.test(email);
}
export const localStorage = (name, value) => {
	if(typeof(Storage) !== "undefined"){
		window.localStorage.setItem(name, JSON.stringify(value))
	}
}
export const localStorageGet = (name, value) => {
	return JSON.parse(window.localStorage.getItem("user_info"))
}