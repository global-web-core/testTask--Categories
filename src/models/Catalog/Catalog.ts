import { Http } from "../../globals";
import { controllers } from "../../globals/constants/constants";
import {IHttp, ICategories} from '../../typesAndInterfaces/interfaces';

const getAll = async (): Promise<IHttp.Get<ICategories.Db>> => await Http.get(controllers.categories);

export {
	getAll
}