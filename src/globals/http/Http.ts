import { IHttp } from '../../typesAndInterfaces/interfaces';
import { TBasic, TEntitiesDb } from '../../typesAndInterfaces/types';
import {apiURL, methodHttp} from '../constants/constants';

const fetchData = async <T extends TEntitiesDb.Objects>(url: string, options: IHttp.RequestOptions): Promise<IHttp.Get<T>> => {
	const response = await fetch(url, options).catch((error) => console.log('Error fetch with server!!!', error));
	if (!response) {
		console.log('Error connection with server!!!');
	}
	if (response?.ok) {
		try {
			const json = await response.json();
			return {code: 200, data: json};
		} catch {
			console.log('Error parse JSON!!!')
		}
	}
	return {code: 404, data:undefined};
}

const requestGet = async <T extends TEntitiesDb.Objects>(controller: TBasic.Controllers, method: typeof methodHttp["get"]): Promise<IHttp.Get<T>> => {
	const url = `${apiURL}/${controller}`;
	
	const options = {
		method,
		headers:{
			'Content-Type':'application/json'
		}
	};

	return fetchData(url, options) as Promise<IHttp.Get<T>>;
};

const get = async <T extends TEntitiesDb.Objects>(controller: TBasic.Controllers): Promise<IHttp.Get<T>> => await requestGet(controller, methodHttp.get);



export {
	get,
};