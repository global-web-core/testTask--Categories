export interface Db {
	id: number;
	name: string;
	slug: string;
	index: boolean;
	children: Db[] | null;
}