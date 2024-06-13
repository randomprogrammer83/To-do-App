let btn = document.querySelector('.btn');
let input = document.querySelector('.inp');
let ul = document.querySelector('ul');

btn.addEventListener('click', function () {
  if (input.value === '') {
    alert('Heyy Please enter the task');
  } else {
    let list = document.createElement('li');
    let delt = document.createElement('button');
    delt.innerText = 'Delete';
    delt.className = 'btn1';
    list.innerHTML = input.value;
    console.log(list);
    ul.appendChild(list);
list.appendChild(delt);

    input.value = '';
    delt.addEventListener('click',function(){
    list.remove();
    delt.remove();
    })
  }
});

