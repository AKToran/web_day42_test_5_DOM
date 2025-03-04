function disableButton(id){
  document.getElementById(id).setAttribute('disabled', true);
}

function decrementTaskAssigned(){
  const strTasks = document.getElementById('task-assigned').innerText;
  let tasks = parseInt(strTasks);
  tasks -= 1;
  document.getElementById('task-assigned').innerText = tasks;
  if(tasks === 0){
    alert("CONGRATULATIONS! You have completed all available tasks.")
  }
}

function incrementTaskCompleted(){
  const strTasks = document.getElementById('task-completed').innerText;
  let tasks = parseInt(strTasks);
  tasks += 1;
  document.getElementById('task-completed').innerText = tasks;
}

function setActivityLog(id){
  const title = document.getElementById(id).innerText;
  const time = new Date().toLocaleTimeString();
  let activityDiv = document.getElementById('activity-log');
  let div = document.createElement('div');
  div.classList.add('m-4', 'p-4', 'rounded-xl', 'bg-slate-100');
  div.innerHTML = `
  <p>You have completed the task <span class="font-bold"> ${title} </span> at ${time}.</p>
  `
  activityDiv.appendChild(div);
}

document.getElementById('clear-log').addEventListener('click', function(){
  document.getElementById('activity-log').innerHTML = ``;
})