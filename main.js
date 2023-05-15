// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//When the heart is clicked mimicServerCall()
let hearts = document.querySelectorAll('.like-glyph')


//Add an event listener to each of the hearts

const promiseSolve = 
hearts.forEach(heart => {
  heart.addEventListener('click', async () => {
    try{
      const res = await mimicServerCall()
      if(heart.innerText == EMPTY_HEART){
        heart.innerText = FULL_HEART
      heart.classList.add('activated-heart')
      }else if(heart.innerText == FULL_HEART){
        heart.innerText = EMPTY_HEART
        heart.classList.remove('activated-heart')
      }
      return res
    }
    catch(error){
      const rej = error
      console.log("error")
      return rej
    }
  })
})

// const likeButton = (answer) =>{
//   if(answer == 'Pretend remote server notified of action!'){
//     console.log('red button')
//   }else{
//     console.log('error')
//   }
// }








//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
