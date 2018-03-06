import {c} from './compute';
import {collection} from './index';
export function compute1(id)
{
	
	for(var i=0;i<collection.length;i++)
	{
		if(collection[i].name == id)
		{
			collection[i].movies.push(c);
			
		}
	}
}