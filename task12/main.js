var form = document.getElementById('my-form');

//var userName = document.getElementById('name');
//var email = document.getElementById('email');

//console.log(userName);
//console.log(email);

form.addEventListener('submit', addLocalStorage);

function addLocalStorage(e) {
    e.preventDefault();
    var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    //var str=`{"name":"${userName}","email":"${email}"}`;

    //console.log(str);

    //var json=JSON.parse(str);
    //console.log(json);

    var obj={
        name:userName,
        email:email
    }

    localStorage.setItem(`usedDeatails${email}`,JSON.stringify(obj) );
    userName = '';
    email = '';
}

for (const key in localStorage) {
    var obj1=JSON.parse(localStorage.getItem(key));
    //console.log(obj1);
    var newDiv=document.createElement('div');
    var newDivText=document.createTextNode(`${obj1.name} ${obj1.email}`);
    newDiv.appendChild(newDivText);
    newDiv.style.textAlign='centre';
    newDiv.style.fontSize='30px';
    var user=document.getElementById('users');
    user.appendChild(newDiv);
  }

//userDetailskishangautam945@gmail.com userDetailskishangautam945@gmail.comm userDetailskishangautam945@gmai.comm