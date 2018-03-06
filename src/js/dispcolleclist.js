import {collection} from './index';
import {compute1} from './compute1';
export function dispcolleclist(addul) {
	
    addul.html('');	
    let text;
    if(collection.length!=0)
    {
    for (let i = 0; i < collection.length; i++) {
        text = `<a href="#!" class="collection-item" id="` + collection[i].name + `">` + collection[i].name + `</a>`;
    	addul.append(text);
    	let may = document.getElementById(collection[i].name);
    	
    	may.addEventListener('click',function(){
    		compute1(may.id);
    	});
    }

    }
}