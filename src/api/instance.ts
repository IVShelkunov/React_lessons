import axios, { AxiosError } from 'axios'
export const api = axios.create({
	baseURL: 'http://localhost:3001',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json'
	}
});

api.interceptors.response.use(
	(response) => response, //ok 200 
	(error: AxiosError ) => {
		//если ответ получен но ошибка
		if(error.response) {
			switch(error.response.status) {
			case 404: 
				console.error('не найдено');
				break;
			case 500: 
				console.error('ошибка сервера');
			}//если запрос отправлен но не дошел до серверa
		} else if(error.request) {
					console.error('Ошибка сети');
				} else {
					console.error('Ошибка настройки запроса:', error.message); //ошибка в запросе
				}
		return Promise.reject(error);

	}
);