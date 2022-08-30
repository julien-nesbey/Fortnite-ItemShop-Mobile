import Axios from "axios";

const baseURL = "https://fortnite-api.theapinetwork.com"

const getShop = async () => {
	const url = `${baseURL}/store/get`;
	return await Axios.get(url).then(response => response.data);
}

const getUpcoming = async () => {
	const url = `${baseURL}/upcoming/get`;
	return await Axios.get(url).then(response => response.data);
}

const getSpecificItem = async (id) => {
	const url = `${baseURL}/item/get?id=${id}`
	return await Axios.get(url).then(response => response.data);
}

export {
	getShop,
	getUpcoming,
	getSpecificItem,
}