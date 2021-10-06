/*
    ####################################
    Get Main Vars In Slider  
    ####################################
*/
// get   imgs in slider
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

// get number of slider imgs
var slideCount = sliderImages.length;

// set first slide to show
var currentSlide = 1;

// slide number <<String that show as Slide #number>>
var slideNumberElement = document.getElementById("slide-number");

// prev and next elements 
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");


/*
    ####################################
    Create Dynamic Ul 
    ####################################
*/

// create ul elements 
var paginationElement = document.createElement("ul");

//set id of ul
paginationElement.setAttribute("id", "pagination-ul");

// create li to ul dynamic
for(var i = 1; i <= slideCount; i++) {
    // create li
    var paginationItem = document.createElement("li");

    // add attribute that have index
    paginationItem.setAttribute("data-index", i);

    // create text of li
    var textIndex = document.createTextNode(i);

    // add text to li 
    paginationItem.appendChild(textIndex);

    // add li to ul
    paginationElement.appendChild(paginationItem);
}

// append ul to html page 
document.getElementById("indicator").appendChild(paginationElement);


// get ul that created
var createdPaginationUl = document.getElementById("pagination-ul");


// get li elemeent inside create ul
var createdBaginationElements = Array.from(document.querySelectorAll("#pagination-ul li"));

/*
    ####################################
    Main  Functions 
    ####################################
*/

// handel click functions
prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;

// trigger the check function
theChecker();

// add action to pagination li
for(var i = 0;  i < createdBaginationElements.length; i++) {
    createdBaginationElements[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker();
    }
}



 


/*
    ####################################
    Assiest Functions 
    ####################################
*/

// prevSlide function
function prevSlide() {
    if(prevButton.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}

// nextSlide  function 
function nextSlide() {
    if(nextButton.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide++;
        theChecker();
    }

}

// create checker function
function theChecker() {
    // set slider number in div on top slider
    slideNumberElement.textContent="slide # " + currentSlide + " of " + slideCount;

    // remove active class before set on current index
    removeAllActive();
    
    // set active class on current slide
    sliderImages[currentSlide-1].classList.add("active");
 
    // set active class on current pagination li
    createdPaginationUl.children[currentSlide - 1].classList.add("active");

    // check if    current element first
    if (currentSlide == 1) {
        // add disabled class in prev button
        prevButton.classList.add("disabled");
    } else {
        // remove disabled class from prev button
        prevButton.classList.remove("disabled");
    }

    // check if current element last
   if(currentSlide == slideCount){
         // add disabled class in prev button
         nextButton.classList.add("disabled");
    } else {
        // remove disabled class from prev button
        nextButton.classList.remove("disabled");
    }

}

//  remove all active class form imgs and pagination
function removeAllActive() {
    // loops on imgs 
    sliderImages.forEach(function(img) {
        img.classList.remove("active");
    });

    createdBaginationElements.forEach(function(li) {
        li.classList.remove("active");
    });
}
