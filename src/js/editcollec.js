export function editcollec(input1,input2,collection)
{
	for(let i=0;i<collection.length;i++)
	{
		if(collection[i].name == input1)
			collection[i].name = input2;
	}
	console.log(collection);
}