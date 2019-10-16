'use strict';
var gNextId = 101
var gItems;
createItems()

function createItems(){
    gItems = [
        createItem('Book Shop','img/screenshots/book-shop.PNG','Shop Managing','Powerful Shop Managing Tool','Control your shop linke never before With a revolutionary system that works perfectly!','02/10/19','Shop Managing Tool','https://almightyjesus.github.io/Book-Shop/'),
        createItem('Guess-Who!','img/screenshots/guess-me.PNG','Have fun!','Build the tree of knowledge!','Have fun while building the tree of knowledge! Control the flow of information in the world and expand your horizons!','06/10/19','Fun & Games','https://almightyjesus.github.io/Guess-Me/'),
        createItem('Mine Field','img/screenshots/mine-field.PNG','Mine Blowing','Dont get blown up','Play the amazing famous game with some addons and a nice design! Great for enhancing brain power!','21/09/19','Fun & Games','https://almightyjesus.github.io/Mine-Field/'),
        createItem('Pacman','img/screenshots/pacman.PNG','Fun','Eat all the dots!','Enjoy a nice adaptation to the famous title, dont get eaten and eat all the dots to survive! if you need help, use the SUPER FOODS!','16/09/19','Fun & Games','https://almightyjesus.github.io/Pacman/'),
        createItem('Safe Content','img/screenshots/safe-content.PNG','Hide the info','Will you be able to crack the safe?','Check out the secret content inside the safe!If you want, use - username:Admin,and pass:1234 to see the admin panel aswell!Know the information about all the users.','02/10/19','Content Delivery','https://almightyjesus.github.io/Safe-Content/'),
        createItem('Grid Layout','img/screenshots/grid-ex.PNG','Stunning display','Watch the wonders of Grid come to life!','Look at the amazing display and utilities of the new Grid display of CSS! with STUNNING website design and ability to modify it yourself!','10/10/19','Website Design','https://almightyjesus.github.io/grid-layout-proj/')
    ]
    gNextId = gItems[gItems.length - 1].id + 1;
}

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
