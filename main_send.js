//variables

const form_task = document.querySelector('#task-form');
const task_list = document.querySelector('.list-ul');
const remove_all = document.querySelector('.remove-all');
const input_task = document.querySelector('#task');

//event listeners

loadEventListeners();


function loadEventListeners(){
    //adding Todo list one by one
    form_task.addEventListener('submit',addTask);

    //removing todo task one at a time
    task_list.addEventListener('click',removeTask);

    //removing todo all tasks all at once
    remove_all.addEventListener('click',removeAll);

    //adding background color, strike through, adding tick to the task
    task_list.addEventListener('click',finishedtask);

}

function addTask(e){
    if(input_task.value === ''){
        alert('Enter task');
    }
    //create li element
    const task_li = document.createElement('li');
    //create classname for li element
    task_li.className = 'list-li';

    //create checkbox
    const cb = document.createElement('input');
    cb.className = 'check-input';
    cb.type = "checkbox";
    //const label = document.createElement('label');
    //label.setAttribute('for','check-input');
    //cb.appendChild(label)
    task_li.appendChild(cb);


    //appending the input value to li element
    task_li.appendChild(document.createTextNode(input_task.value));
    const link = document.createElement('a');
    link.className = 'remove-a';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    task_li.appendChild(link)
    task_list.appendChild(task_li);

    /*const tick = document.createElement('a');
    tick.className = 'tick-a';
    tick.innerHTML = '<i class="fa fa-check"></i>';
    task_li.appendChild(tick);*/
    

    input_task.value = '';
    e.preventDefault();
}


function removeTask(e){
    if(e.target.parentElement.classList.contains('remove-a')){
        e.target.parentElement.parentElement.remove();
    }
    
    e.preventDefault();
}


function finishedtask(e){
    console.log(e.target);
    if(e.target.classList.contains('check-input')){
        e.target.parentElement.className = 'finish-task';
        e.target.className = 'checked';
    }
    else{
        e.target.parentElement.className = 'list-li';
        e.target.className = 'check-input';
    }
}

function removeAll(e){
    task_list.innerHTML = '';

    e.preventDefault();
}



