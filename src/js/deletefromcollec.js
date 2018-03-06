export function deletefromcollec(input,collection)
{
	let flag = -1;
    for (let i = 0; i < collection.length; i++) {
        if (input == collection[i].name)
        	flag = i;  	 
    }
    if(flag!=-1)
    	collection.splice(flag,1);
}