document.addEventListener("DOMContentLoaded", function(){


const searchBox = document.getElementById("searchDistrict");

const cards = document.querySelectorAll(".district-box");



searchBox.addEventListener("keyup", function(){


let searchValue = searchBox.value.toLowerCase();



cards.forEach(function(card){


let districtName = 
card.querySelector("h3").innerText.toLowerCase();



if(districtName.includes(searchValue)){


card.style.display = "block";


}

else{


card.style.display = "none";


}



});


});


});