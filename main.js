const taskList = document.getElementById('tasklist');

taskList.addEventListener('click', (event) =>{
    if(event.target.tagName === 'LI'){
        const listItem = document.querySelectorAll('#taskList li')
        listItem.forEach(item => item.classList.remove('selected'));
        event.target.classList.add('selected');
    }
});