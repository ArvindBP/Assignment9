import {renderhtml1} from './renderhtml1'
import {home} from './home';
import {displaycollection} from './displaycollection';
import $ from "jquery";
export function mycollections(sear,disp,sear1) {
    sear.html('');
    sear1.html('');
    let text = renderhtml1();
    disp.html(text);

    displaycollection(sear,disp,sear1);

    $("#home").click(function(){
        home(sear,disp,sear1)
    })
}