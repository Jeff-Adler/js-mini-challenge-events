/***** Beginning of Starter Code ****/
document.addEventListener("DOMContentLoaded", () => {

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
const header = document.querySelector("#header")
header.addEventListener('click',function(e){
  toggleColor(e.target)
})

// header.addEventListener('click',toggleColor(e.target))

function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}


/***** Deliverable 2 *****/

const form = document.querySelector("#new-player-form")

form.addEventListener('submit', function(e) {
  e.preventDefault()
  // renderPlayer(e.target)
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = e.target.number.value

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${e.target.name.value} (<em>${e.target.nickname.value}</em>)</h3>
    <img src="${e.target.photo.value}" alt="${e.target.name.value}">
    <p class="likes">1000 likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
  e.preventDefault()
})


/***** Deliverable 3 *****/
})