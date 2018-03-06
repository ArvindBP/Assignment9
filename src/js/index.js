import '../css/styles.css';
import { home } from './home';
import $ from "jquery";
import {mycollections} from './collections.js';
import {addtocollec} from './addtocollec';
import {deletefromcollec} from './deletefromcollec.js';
import {editcollec} from './editcollec.js';
import {displaycollection} from './displaycollection';
import {dispcolleclist} from './dispcolleclist';
export let collection = [];

const search1 = $("#searchbar");
const search2 = $("#display");
const search3 = $("#displaycollections");
const search4 = $("#listprint1");
$(document).ready(function() {
    home(search1,search2,search3);
    $("#collections").click(function(){
    		mycollections(search1,search2,search3);
    });
});

$("#Adding").click(function()
{
	addtocollec($("#collec_name").val(),collection);
	displaycollection(search1,search2,search3);
});

$("#Deleting").click(function(){
	deletefromcollec($("#collec_del").val(),collection);
	displaycollection(search1,search2,search3);
});

$('#Editing').click(function()
{
	editcollec($("#collec_edit1").val(),$("#collec_edit2").val(),collection);
	displaycollection(search1,search2,search3);
});

$('#listprint').click(function()
{
   dispcolleclist(search4);		
});





