import axios from "axios";

export const axiosApi = axios.create({
	baseURL: "http://localhost:80",
	//cookieを一緒に送るかどうか
	withCredentials: true,
});
