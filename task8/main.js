var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem);

function addItem(e){
    e.preventDefault();

    var newItem=document.getElementById('item').value;

    var li=document.createElement('li');

    li.className='list-group-item';

    li.appendChild(document.createTextNode(newItem));

    var deleteBtn=document.createElement('button');

    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    var editBtn=document.createElement('button');

    editBtn.className='btn btn-primary btn-sm float-right edit';

    editBtn.style.margin=' auto 2px';

    editBtn.appendChild(document.createTextNode('edit'));

    li.appendChild(editBtn);

    itemList.appendChild(li);
}


function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}