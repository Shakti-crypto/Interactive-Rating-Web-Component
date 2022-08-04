const ratingState=document.querySelector(".rating-state");
const thankState=document.querySelector(".thank-you-state");
console.log(thankState);

const ratingContainer=ratingState.querySelector(".rating");
const ratingButtons=ratingContainer.querySelectorAll(".circular-button");
const submitButton=ratingState.querySelector(".submit-button");
let currentSelectedRating=0;

ratingButtons.forEach(ratingButton => {
    ratingButton.addEventListener("click",SelectRating);
});

function SelectRating(e){
    ratingButtons[currentSelectedRating].classList.remove("button-selected");
    currentSelectedRating=parseInt(e.target.textContent);
    currentSelectedRating=Math.max(0,currentSelectedRating-1);
    ratingButtons[currentSelectedRating].classList.add("button-selected");
    submitButton.addEventListener("click",RatingSubmitted);
}



function RatingSubmitted(){
    const ratingSpan=thankState.querySelector("#rating-span");
    ratingSpan.innerHTML=currentSelectedRating+1;
    ratingState.setAttribute("hidden",true);
    thankState.removeAttribute("hidden");
}
