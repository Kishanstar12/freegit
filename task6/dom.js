//console.dir(document);

//console.dir(document.domain);
//console.dir(document.URL);
//console.dir(document.title);
//console.dir(document.head);
//console.dir(document.all[10]);
//console.dir(document.forms);

//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='Have Fun';
//headerTitle.innerText='dont run';

//headerTitle.innerHTML='<h3>why so serious</h3>';
//header.style.borderBottom='solid 3px #000';
// var textOfTitle='ADD ITEM';
// var titleFontChange=document.querySelector('.title');
// titleFontChange.innerHTML=textOfTitle.bold();
// titleFontChange.style.color='green';

// var items=document.getElementsByClassName('list-group-item');
// console.log(items[2]);
// items[2].style.backgroundColor='green';

// for(let i=0;i<items.length;i++){
//     items[i].style.color='red';
//     items[i].style.fontWeight='bold';
// }

// var li=document.getElementsByTagName('li');
// console.log(li[4]);
// li[4].style.backgroundColor='green';

// for(let i=0;i<li.length;i++){
//     li[i].style.color='red';
//     li[i].style.fontWeight='bold';
// }

// var seconChild=document.querySelector('.list-group-item:nth-child(2)');
// seconChild.style.backgroundColor='green';

// var lastChild=document.querySelector('.list-group-item:nth-child(3)');
// lastChild.style.display='none';


var odd=document.querySelectorAll('li:nth-child(odd)');

for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}