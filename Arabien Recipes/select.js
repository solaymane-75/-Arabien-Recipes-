window.onload = first()
fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    .then(response => response.json())
    .then(data => {
        for (i = 0; i < data.meals.length; i++) {
            option = `<option value="${data.meals[i].strArea}">${data.meals[i].strArea}</option>`
            document.getElementById('area').innerHTML += option
        }
    })
fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then(response => response.json())
    .then(data => {
        for (i = 0; i < data.meals.length; i++) {
            option = `<option value="${data.meals[i].strCategory}">${data.meals[i].strCategory}</option>`
            document.getElementById("category").innerHTML += option
        }
    })
// area //////////////////////////////////////////////////////////////////////////////////

function afficher_Area(area_choizser) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area_choizser}`)
        .then(response => response.json())
        .then(data => {
            if (document.getElementById("category").value == '1') {
                var meals = data.meals
                var aff = ``
                for (var z = 1; z <= Math.ceil(meals.length / 12); z++) {
                    aff += `<a class="page-link"  id="page${z}">${z}</a>`
                }
                document.getElementById('pages').innerHTML = aff
                const page1 = meals.slice(0, 12)
                affic(page1)
                const page2 = meals.slice(12, 24)
                const page3 = meals.slice(24, 36)
                const page4 = meals.slice(36, 48)
                const page5 = meals.slice(48, 60)
                document.getElementById('page1').onclick = function () {
                    affic(page1)
                }

                document.getElementById('page2').onclick = function () {
                    affic(page2)
                }
                document.getElementById('page3').onclick = function () {
                    affic(page3)
                }
                document.getElementById('page4').onclick = function () {
                    affic(page4)
                }
                document.getElementById('page5').onclick = function () {
                    affic(page5)
                }
            } else if (
                document.getElementById("category").value != '1' ||
                area_choizser == '1'
            ) {
                afficher_Category(document.getElementById("category").value)
            } else {
                var affecar = []
                for (var i = 0; i < data.meals.length; i++) {
                    fetch(
                        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.meals[i].idMeal}`
                    )
                        .then(response => response.json())
                        .then(data => {
                            if (
                                data.meals[0].strArea == document.getElementById("category").value
                            ) {
                                affecar.push(data.meals[0])
                            }
                            var aff = ``
                            console.log(Math.ceil(affecar.length / 12))

                            for (var z = 1; z <= Math.ceil(affecar.length / 12); z++) {
                                aff += `<a class="page-link"  id="page${z}">${z}</a>`
                            }
                            document.getElementById('pages').innerHTML = aff

                            const page1 = affecar.slice(0, 12)
                            affic(page1)
                            const page2 = affecar.slice(12, 24)
                            const page3 = affecar.slice(24, 36)
                            const page4 = affecar.slice(36, 48)
                            const page5 = affecar.slice(48, 60)
                            document.getElementById('page1').onclick = function () {
                                affic(page1)
                            }

                            document.getElementById('page2').onclick = function () {
                                affic(page2)
                            }
                            document.getElementById('page3').onclick = function () {
                                affic(page3)
                            }
                            document.getElementById('page4').onclick = function () {
                                affic(page4)
                            }
                            document.getElementById('page5').onclick = function () {
                                affic(page5)
                            }
                        })
                }
            }
        })
}

// category   ///////////////////////////////

function afficher_Category(chois) {
    fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${chois}`
    )
        .then(response => response.json())
        .then(data => {
            if (document.getElementById('area').value == '1') {
                var meals = data.meals
                var aff = ``

                for (var z = 1; z <= Math.ceil(meals.length / 12); z++) {
                    aff += `<a class="page-link"  id="page${z}">${z}</a>`
                }
                document.getElementById('pages').innerHTML = aff

                const page1 = meals.slice(0, 6)
                affic(page1)
                const page2 = meals.slice(6, 12)
                const page3 = meals.slice(24, 36)
                const page4 = meals.slice(36, 48)
                const page5 = meals.slice(48, 60)
                document.getElementById('page1').onclick = function () {
                    affic(page1)
                }

                document.getElementById('page2').onclick = function () {
                    affic(page2)
                }
                document.getElementById('page3').onclick = function () {
                    affic(page3)
                }
                document.getElementById('page4').onclick = function () {
                    affic(page4)
                }
                document.getElementById('page5').onclick = function () {
                    affic(page5)
                }
            } else {
                var affecar = []
                for (var i = 0; i < data.meals.length; i++) {
                    fetch(
                        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.meals[i].idMeal}`
                    )
                        .then(response => response.json())
                        .then(data => {
                            if (
                                data.meals[0].strArea == document.getElementById('area').value
                            ) {
                                affecar.push(data.meals[0])
                            }
                            var aff = ``
                            console.log(Math.ceil(affecar.length / 12))

                            for (var z = 1; z <= Math.ceil(affecar.length / 12); z++) {
                                aff += `<a class="page-link"  id="page${z}">${z}</a>`
                            }
                            document.getElementById('pages').innerHTML = aff

                            const page1 = affecar.slice(0, 6)
                            affic(page1)
                            const page2 = affecar.slice(6, 12)
                            const page3 = affecar.slice(24, 36)
                            const page4 = affecar.slice(36, 48)
                            const page5 = affecar.slice(48, 60)
                            document.getElementById('page1').onclick = function () {
                                affic(page1)
                            }

                            document.getElementById('page2').onclick = function () {
                                affic(page2)
                            }
                            document.getElementById('page3').onclick = function () {
                                affic(page3)
                            }
                            document.getElementById('page4').onclick = function () {
                                affic(page4)
                            }
                            document.getElementById('page5').onclick = function () {
                                affic(page5)
                            }
                        })
                }
            }
        })
}
// aficher select //////////////////////////////////
function affic(vluchercher) {
    document.getElementById("card-container").innerHTML = '';
    var contant;
    for (var i = 0; i < vluchercher.length; i++) {
        contant = `<div class="card" style="width: 30rem;">
    <img src="${vluchercher[i].strMealThumb}" class="card-img-top" alt="Sunset Over the Sea" style="z-index:-5"/>
    <div class="card-body">
      <h3>${vluchercher[i].strMeal}</h3>
      <h5>Category: ${vluchercher[i].strCategory} </h5>
      <h5> Area: ${vluchercher[i].strArea}</h5>
    </div>
    <button type="button" class="btn btn-success" onclick="View(${vluchercher[i].idMeal})" id="myBtn">View All</button>
  </div>`;
        document.getElementById('card-container').innerHTML += contant;
    }
};
//  afficher cards ///////////////////////////////////////////////////////////
function afficher() {
    document.getElementById('card-container').innerHTML = '';
    var contant;
    for (var i = 0; i < 6; i++) {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(data => {

                contant = `
        <div class="card" style="width: 30rem;">
            <img src="${data.meals[0].strMealThumb}" class="card-img-top" alt="Sunset Over the Sea" style="z-index:-5"/>
            <div class="card-body">
              <h3>${data.meals[0].strMeal}</h3>
              <h5>Category: ${data.meals[0].strCategory} </h5>
              <h5> Area: ${data.meals[0].strArea}</h5>
            </div>
            <button type="button" class="btn btn-success" onclick="View(${data.meals[0].idMeal})" id="myBtn">View All</button>
          </div>
          `
                document.getElementById("card-container").innerHTML += contant;
            })
    }
}

// afficher modal ////////////////////////////////////
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
///// releod //////////////////////////////////////////////////////

function first() {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Moroccan`)
        .then(response => response.json())
        .then(data => {
            var meals = data.meals
            var affec = []
            for (var i = 0; i < meals.length; i++) {
                fetch(
                    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.meals[i].idMeal}`
                )
                    .then(response => response.json())
                    .then(data => {
                        if (data.meals[0].strCategory == 'Lamb') {
                            affec.push(data.meals[0])
                        }
                        affic(affec)
                        var aff = ``
                        for (var z = 1; z <= Math.ceil(affec.length / 12); z++) {
                            aff += `<a class="page-link"  id="page${z}">${z}</a>`
                        }
                        document.getElementById('pages').innerHTML = aff
                        const page1 = affec.slice(0, 12)
                        affic(page1)
                        const page2 = affec.slice(12, 24)
                        const page3 = affec.slice(24, 36)
                        const page4 = affec.slice(36, 48)
                        const page5 = affec.slice(48, 60)
                        document.getElementById('page1').onclick = function () {
                            affic(page1)
                        }

                        document.getElementById('page2').onclick = function () {
                            affic(page2)
                        }
                        document.getElementById('page3').onclick = function () {
                            affic(page3)
                        }
                        document.getElementById('page4').onclick = function () {
                            affic(page4)
                        }
                        document.getElementById('page5').onclick = function () {
                            affic(page5)
                        }
                    })
            }
        })
}