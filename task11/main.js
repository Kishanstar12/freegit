var form = document.getElementById('my-form');

var userName = document.getElementById('name');
var email = document.getElementById('email');

console.log(userName);
console.log(email);

form.addEventListener('submit', addLocalStorage);

function addLocalStorage(e) {
    e.preventDefault();
    var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    var str=`{"name":"${userName}","email":"${email}"}`;

    //console.log(str);

    var json=JSON.parse(str);
    //console.log(json);
    localStorage.setItem(userName, json);
    userName = '';
    email = '';
}