import { collection } from './index';
import { indicollecview } from './indicollecview';
export function displaycollection(search1, search2, search3) {
    search3.html('');
    if (collection.length == 0) {
        let text2 = `<h3>No Collection exists. Pls add a collection with the button on the bottom right</h3>`;
        search3.append(text2);
    } else {
        for (let i = 0; i < collection.length; i++) {
            let text2 = `<a href="#!"  id="` + collection[i].name + `" class="collection-item">` + collection[i].name + `</a>`;
            search3.append(text2);

            let may = document.getElementById(collection[i].name);

            may.addEventListener('click', function() {
                indicollecview(may.id,search1,search2,search3);
            });
        }

    }
}