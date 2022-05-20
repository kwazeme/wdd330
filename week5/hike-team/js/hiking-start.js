// Example of using Classes and modules to organize the code needed to render our list of hikes. Not using MVC here.

//create an array of hikes



fetch('/data/hikes/.json').then(function(response) {
    return response.json();
}).then(function(data) {
    const hikeList = data.items;

    let hikes = new Hikes('hikes');

    hikes.showHikeList(hikeList);
});

const imgBasePath = "//byui-cit.github.io/cit261/examples/";
//on load grab the array and insert it into the page on load

export default class Hikes {
  constructor(elementId) {
    this.parentElement = document.getElementById(elementId);

    console.log(this.parentElement);
    // we need a back button to return back to the list. This will build it and hide it. When we need it we just need to remove the 'hidden' class
    this.backButton = this.buildBackButton();
  }
  // why is this function necessary?  hikeList is not exported, and so it cannot be seen outside of this module. I added this in case I ever need the list of hikes outside of the module. This also sets me up nicely if my data were to move. I can just change this method to the new source and everything will still work if I only access the data through this getter.
  getAllHikes() {
    return hikeList;
  }
  // For the first stretch we will need to get just one hike.
  getHikeByName(hikeName) {
    return this.getAllHikes().find(hike => hike.name === hikeName);
  }
  //show a list of hikes in the parentElement
  showHikeList(hikes) {
    renderHikeList(this.parentElement, hikes);
  }
  // show one hike with full details in the parentElement
  showOneHike(hikeName) {}
  // in order to show the details of a hike ontouchend we will need to attach a listener AFTER the list of hikes has been built. The function below does that.
  addHikeListener() {
    // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
  }
  buildBackButton() {
    const backButton = document.createElement("button");

    return backButton;
  }
}
// methods responsible for building HTML.  Why aren't these in the class?  They don't really need to be, and by moving them outside of the exported class, they cannot be called outside the module...they become private.
function renderHikeList(parent, hikes) {
    hikes.forEach(function(hike) {
        const hike_element = renderOneHikeLight(hike);

        parent.append(hike_element);
    });
}
function renderOneHikeLight(hike) {
  const item = document.createElement("li");
  item.innerHTML = ` <h2>${hike.name}</h2>
  <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
  <div>
          <div>
              <h3>Distance</h3>
              <p>${hike.distance}</p>
          </div>
          <div>
              <h3>Difficulty</h3>
              <p>${hike.difficulty}</p>
          </div>
  </div>`;
  return item;
}
function renderOneHikeFull(hike) {
  const item = document.createElement("li");

  return item;
}