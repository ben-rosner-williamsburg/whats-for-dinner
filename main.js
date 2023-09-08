var letsCookBtn = document.querySelector("#letsCook");
var sideRadioBtn = document.querySelector("#side");
var mainDishRadioBtn = document.querySelector("#mainDish");
var dessertRadioBtn = document.querySelector("#dessert");
var cookpot = document.querySelector("#cookpot");
var modalTwo = document.querySelector(".modal-two");



var sides = [
    "Miso Glazed Carrots",
    "Coleslaw",
    "Garden Salad",
    "Crispy Potatoes",
    "Sweet Potato Tots",
    "Coconut Rice",
    "Caesar Salad",
    "Shrimp Summer Rolls",
    "Garlic Butter Mushrooms",
    "Hush Puppies"
]

var mains = [
    "Spaghetti and Meatballs",
    "Pineapple Chicken",
    "Shakshuka",
    "Thai Yellow Curry",
    "Bibimbap",
    "Chicken Parmesean",
    "Butternut Squash Soup",
    "BBQ Chicken Burgers",
    "Ramen",
    "Empanadas",
    "Chicken Fried Rice",
    "Sheet Pan Fajitas",
    "Margarita Pizza"
]

var desserts = [
    "Apple Pie",
    "Lemon Meringue Pie",
    "Black Forest Cake",
    "Banana Bread",
    "Peach Cobbler",
    "Cheesecake",
    "Funfetti Cake",
    "Baklava",
    "Flan",
    "Macarons",
    "Macaroons",
    "Chocolate Cupcakes",
    "Pavolva",
    "Pumpkin Pie",
    "Key Lime Pie",
    "Tart Tatin",
    "Croissants",
    "Eclairs"
]

letsCookBtn.addEventListener("click", function (event, meal){
    if (sideRadioBtn.checked){
        event.preventDefault();
        meal = getMeal(sides);
        toggleImg(cookpot);
        displayMeal(meal, modalTwo);
    }
    else if (mainDishRadioBtn.checked){
        event.preventDefault();
        meal = getMeal(mains);
        toggleImg(cookpot);
        displayMeal(meal, modalTwo);
    }

    else if (dessertRadioBtn.checked){
        event.preventDefault();
        meal = getMeal(desserts);
        toggleImg(cookpot);
        displayMeal(meal, modalTwo);
    }
})

function getMeal(meals){
    var mealIndex = randomIndex(meals)
    return meals[mealIndex]
}

function randomIndex(meals){
    var index = Math.floor(Math.random() * meals.length);
    return index
}

function toggleImg(image){
    image.classList.toggle('hidden');
}

function displayMeal(meal, container){
    container.innerHTML = `<p class="pre-text">You should make:</p><h1 class="meal">${meal}!</h1>`
}