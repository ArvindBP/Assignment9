import { collection } from './index';
export function deleteindifromcollec(i,j)
{
	collection[i].movies.splice(j,1);
}