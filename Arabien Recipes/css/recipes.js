window.onload = Random();
function Random(){
for (let i = 0; i < 6; i++) {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            const meals = data.meals;
            const meal = meals[0];

            //    
            // API TEST 
            // 

            // console.log(meal.strMeal + " (" + meal.idMeal + ")");
            // console.log("Category: " + meal.strCategory);
            // console.log("Area: " + meal.strArea);
            // console.log("Instructions: " + meal.strInstructions);
            // console.log("Ingredients:");
            // Iterate over ingredients
            //    
            card = `
          <div class="card" style="width: 30rem;">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="Sunset Over the Sea" style="z-index:-5"/>
            <div class="card-body">
              <h3>${meal.strMeal}</h3>
              <h5>Category: ${meal.strCategory} </h5>
              <h5> Area: ${meal.strArea}</h5>
            </div>
            <button type="button" class="btn btn-success" onclick="View(${meal.idMeal})" id="myBtn">View All</button>
          </div>
        `;
            $("#card-container").append(card);


        });
}
};
// var card = '';
// for (let i = 0; i < 6; i++) {
//     fetch("https://www.themealdb.com/api/json/v1/1/random.php")
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             const meals = data.meals;
//             const meal = meals[0];
//             console.log(meal);
//             card +=
//                 `<div class="card col-4 container" id="cards2">
//                <div class="card" style="width: 30rem;">
//                  <img src="${meal.strMealThumb}" class="card-img-top" style="z-index:-5"/>
//                  <div class="card-body">
//                    <h3>${meal.strMeal}</h3>
//                    <h5>Category: ${meal.strCategory} </h5>
//                    <h5> Area: ${meal.strArea}</h5>
//                  </div>
//                  <button type="button" class="btn btn-primary" id="btnSearche2" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
//                    Voir
//                  </button>
//                </div>

//                <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel2" aria-hidden="true">
//                  <div class="modal-dialog">
//                    <div class="modal-content">
//                      <div class="modal-header">
//                        <h1 class="modal-title fs-5" id="staticBackdropLabel2">Modal title</h1>
//                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                      </div>
//                      <div class="modal-body">
//                        <p>Name: ${meal.strMeal}</p>
//                      </div>
//                    </div>
//                  </div>
//                </div>
//              </div>
//              `
//                 ;
//             document.getElementById('card-container').innerHTML = card;
//         })

// };
function View(idMeal) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then(response => response.json())
        .then(data => {
            const meals = data.meals;
            const meal = meals[0];
            console.log(meal);

            // Create the modal element
            var modal = document.createElement("div");
            modal.classList.add("modal");
            modal.setAttribute("id", "myModal");

            // Create the modal content element
            var modalContent = document.createElement("div");
            modalContent.classList.add("modal-content");

            // Create the modal header element
            var modalHeader = document.createElement("div");
            modalHeader.classList.add("modal-header");

            // Create the modal title element
            var modalTitle = document.createElement("h4");
            modalTitle.classList.add("modal-title");
            modalTitle.setAttribute("id", "myModalLabel");
            modalTitle.innerHTML = meal.strMeal;

            // Create
            // Create the close button element
            var closeButton = document.createElement("button");
            closeButton.classList.add("close");
            closeButton.setAttribute("type", "button");
            closeButton.setAttribute("data-dismiss", "myModal");
            closeButton.innerHTML = '<span id="span" aria-hidden="true">&times;</span>';

            // Append the modal title and close button to the modal header
            modalHeader.appendChild(modalTitle);
            modalHeader.appendChild(closeButton);

            // Create the modal body element
            var modalBody = document.createElement("div");
            modalBody.classList.add("modal-body");
            // Create the recipe ingredients element
            var recipeIngredients = document.createElement("p");
            recipeIngredients.setAttribute("id", "recipe-ingredients");
            recipeIngredients.innerHTML = `<h5>ingredients :</h5>`;
            for (let i = 1; i <= 20; i++) {
                let ingredient = meal["strIngredient" + i];
                let measure = meal["strMeasure" + i];
                if (ingredient && measure) {
                    recipeIngredients.innerHTML += "<br> - " + measure + "  " + ingredient;
                }
            }
            // Create the recipe instructions element
            var recipeInstructions = document.createElement("p");
            recipeInstructions.setAttribute("id", "recipe-instructions");
            recipeInstructions.innerHTML = `<h5>instructions :</h5>` + meal.strInstructions;

            modalBody.appendChild(recipeIngredients);
            modalBody.appendChild(recipeInstructions);
            modalContent.appendChild(modalHeader);
            modalContent.appendChild(modalBody);
            modal.appendChild(modalContent);
            document.body.appendChild(modal);

            // Show the modal
            modal.style.display = "block";
            var modal = document.getElementById("myModal");

            // Get the close button element
            var closeButton = modal.querySelector(".close");

            // Add an event listener to the close button
            closeButton.addEventListener("click", function () {

                modal.remove();
            });

            window.addEventListener("click", function () {

                modal.remove();
            });

        });


};

// const search = document.getElementById("search").value;
// function search() {

// } 

function search() {
    let value = document.getElementById('search').value;
    document.getElementById('card-container').innerHTML = '';
    if (value == '') {
        document.getElementById('pages').innerHTML = '';
        Random();
    } else {
        var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                var meals = data.meals;
                var cardRecherche = ``;
                console.log(Math.ceil(meals.length / 6));

                for (var i = 1; i <= Math.ceil(meals.length / 6); i++) {
                    cardRecherche += `<a class="page-link"  id="page${i}">${i}</a>`;
                }
                document.getElementById('pages').innerHTML = cardRecherche;

                const page1 = meals.slice(0, 6)
                afficher(page1)
                const page2 = meals.slice(6, 12);
                const page3 = meals.slice(12, 18);
                const page4 = meals.slice(18, 24);
                const page5 = meals.slice(24, 30);
                document.getElementById('page1').onclick = function () {
                    afficher(page1)
                }

                document.getElementById('page2').onclick = function () {
                    afficher(page2)
                }
                document.getElementById('page3').onclick = function () {
                    afficher(page3)
                }
                document.getElementById('page4').onclick = function () {
                    afficher(page4)
                }
                document.getElementById('page5').onclick = function () {
                    afficher(page5)
                }
            });
    };
};


window.onload = onload();
document.getElementById('search').addEventListener('keyup', search)

function affiche () {
  var value = document.getElementById('srch').value
  if (value == '') {
    randome()
  } else {
    var value = document.getElementById('search').value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.meals == null) {
          alert('sorry not');
          console.log('sorry not ');
          document.getElementById('card-container').innerHTML = ' ';
        } else {
          afficher(data.meals);
        }
      })
  }
}
function afficher (chercher) {
    document.getElementById('card-container').innerHTML = '';
    var contant;
    for (var i = 0; i < chercher.length; i++) {
      card = `
      <div class="card" style="width: 30rem;">
            <img src="${chercher[i].strMealThumb}" class="card-img-top" alt="Sunset Over the Sea" style="z-index:-5"/>
            <div class="card-body">
              <h3>${chercher[i].strMeal}</h3>
              <h5>Category: ${chercher[i].strCategory} </h5>
              <h5> Area: ${chercher[i].strArea}</h5>
            </div>
            <button type="button" class="btn btn-success" onclick="View(${chercher[i].idMeal})" id="myBtn">View All</button>
          </div>
        `;
      document.getElementById('card-container').innerHTML += card;
    }
  };