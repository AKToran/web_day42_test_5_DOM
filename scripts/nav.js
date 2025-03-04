document.getElementById('theme-btn').addEventListener('click', function(event){
  const body = document.getElementById('body');
  const theme = ['bg-lime-300','bg-gray-300','bg-red-300','bg-green-300','bg-purple-300','bg-yellow-300','bg-blue-300','bg-amber-300','bg-green-300','bg-orange-300'];
  body.classList = theme[Math.floor(Math.random()*10)]

  //! can get the same number at random.
  //? use a click counter and theme[count]? then it wont be random.
})