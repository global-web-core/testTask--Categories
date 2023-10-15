import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ICategories } from '../../typesAndInterfaces/interfaces';

export interface LinksProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	data: ICategories.Db;
}