document.getElementById('blog').addEventListener('click', function(){
  window.location.href = 'blog.html';
});

document.getElementById('btn-1').addEventListener('click', function(event){
  alert("You have successfully completed a task");
  disableButton('btn-1');
  setActivityLog('card-title-1');
  decrementTaskAssigned();
  incrementTaskCompleted();
})

document.getElementById('btn-2').addEventListener('click', function(event){
  alert("You have successfully completed a task");
  disableButton('btn-2');
  setActivityLog('card-title-2');
  decrementTaskAssigned();
  incrementTaskCompleted();
})

document.getElementById('btn-3').addEventListener('click', function(event){
  alert("You have successfully completed a task");
  disableButton('btn-3');
  setActivityLog('card-title-3');
  decrementTaskAssigned();
  incrementTaskCompleted();
})

document.getElementById('btn-4').addEventListener('click', function(event){
  alert("You have successfully completed a task");
  disableButton('btn-4');
  setActivityLog('card-title-4');
  decrementTaskAssigned();
  incrementTaskCompleted();
})

document.getElementById('btn-5').addEventListener('click', function(event){
  alert("You have successfully completed a task");
  disableButton('btn-5');
  setActivityLog('card-title-5');
  decrementTaskAssigned();
  incrementTaskCompleted();
})

document.getElementById('btn-6').addEventListener('click', function(event){
  alert("You have successfully completed a task");
  disableButton('btn-6');
  setActivityLog('card-title-6');
  decrementTaskAssigned();
  incrementTaskCompleted();
})