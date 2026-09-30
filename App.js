const showMemeBtn = document.getElementById("showBtn");
const numberInput = document.getElementById("numberInput");
const message = document.getElementById("message");
const memeContainer = document.getElementById("memeContainer");

showBtn.addEventListener("click", function() {
  let val = numberInput.value;

  // بتاكد من الرقم اللي داخل (من 0 إلى 99)
  if ( val < 0 || val > 99) {
    message.textContent = "Please Enter Valid Number";
     memeContainer.innerHTML = "";
   return;
  }else{
    numberInput.value="";
  }



  fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => {
      memeContainer.innerHTML = "";
      
      let memes = data.data.memes;
      let selectedMeme = memes[val];

      if (selectedMeme) {

        //  هنا لو انت عايز نفس الديزاين اللي في تاسك مش هتفرق هنخلي العنوان قبل الصورة في ترتيب الكود

        memeContainer.innerHTML = `
          <div>

         <img src="${selectedMeme.url}"    alt="Photo">
            <h5 class="text-dark mt-3">${selectedMeme.name}</h5>
          
            </div>
       
        `;
      } else {
        memeContainer.innerHTML = `<p class="text-danger">Enter Number From 0 to 99</p>`;
      }
    })
    .catch(() => {
      memeContainer.innerHTML = `<p class="text-danger">Something went wrong!!!</p>`;
    });
});