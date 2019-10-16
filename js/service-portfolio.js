'use strict';
var gNextId = 101
var gItems;

createItems()
console.log(gItems);


function createItems(){
    gItems = [
        createItem('Book Shop','img/screenshots/book-shop.png','Shop Managing','Powerful Shop Managing Tool','Control your shop linke never before With a revolutionary system that works perfectly!','02/10/19','Shop Managing Tool','https://almightyjesus.github.io/Book-Shop/'),
        createItem('Guess-Who!','img/screenshots/guess-me.png','Have fun!','Build the tree of knowledge!','Have fun while building the tree of knowledge! Control the flow of information in the world and expand your horizons!','06/10/19','Fun & Games','https://almightyjesus.github.io/Guess-Me/'),
        createItem('Mine Field','img/screenshots/mine-field.png','Mine Blowing','Dont get blown up','first try to use the modal and shit'),
        createItem('Pacman','img/screenshots/pacman.png','first one','walak first','first try to use the modal and shit'),
        createItem('Safe Content','img/screenshots/safe-content.png','Mine Blowing!','Dont get ','first try to use the modal and shit'),
        createItem('Grid Layout','img/screenshots/grid-ex.png','first one','walak first','first try to use the modal and shit')
    ]
    gNextId = gItems[gItems.length - 1].id + 1;
}

// links:
// https://almightyjesus.github.io/Mine-Field/
// https://almightyjesus.github.io/Safe-Content/
// https://almightyjesus.github.io/Guess-Me/
// https://almightyjesus.github.io/Book-Shop/
// https://almightyjesus.github.io/Pacman/
// https://almightyjesus.github.io/grid-layout-proj/

function createItem(name,imgUrl,subtitle,intro,desc,date,category,link) {
    return {
        id: gNextId++,
        name,
        imgUrl,
        subtitle,
        intro,
        desc,
        date:'Date: '+date,
        category:'Category: '+category,
        link
    }
}

function getItems(){
    return gItems
}
