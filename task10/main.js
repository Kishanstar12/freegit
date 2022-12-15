var form = document.getElementById('my-form');

var userName = document.getElementById('name');
var email = document.getElementById('email');

console.log(userName);
console.log(email);

form.addEventListener('submit', addLocalStorage);

function addLocalStorage() {
    //e.preventDefault();
    // console.log(userName);
    // console.log(email);
    var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    localStorage.setItem(userName, email);
    userName = '';
    email = '';
}