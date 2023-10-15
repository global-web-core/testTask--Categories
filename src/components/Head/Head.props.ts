import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ICategories } from '../../typesAndInterfaces/interfaces';

export interface HeadProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	isRobots: ICategories.Db["index"];
}