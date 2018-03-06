import {mycollections} from './collections.js';
import { search } from './search';
import { display } from './display';
import $ from "jquery";
export function home(search1,search2,search3) {
  	search1.html(`<form class="example">
    <input class="form-control" type="text" placeholder="Search for a movie" name="Search" id="inputbar">
    <button class="waves-effect waves-light btn" type="button" id="submitbutton">Submit</button>
   	<a class="waves-effect waves-light btn" id="collections">My Collections</a>
    </form>`);

    search2.html('');
    search3.html('');

    $("#collections").click(function(){
    		mycollections(search1,search2,search3);
    });

    $("#submitbutton").click(function() {
        var a = search($("#inputbar").val(), (err, result) => {
            display(result, $('#display'));
        });
    });

}
