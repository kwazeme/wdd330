const links = [
    {
      label: "Week1 notes - LocalStorage and an activity completed and learned.",
      url: "week1/index.html"
    },
    {
        label: "Week2 notes - Programming basics, functions and arrays.",
        url: "week2/index.html"
      },
      {
        label: "Week3 notes - Objects, DOM & Events.",
        url: "week3/index.html"
      },
      {
        label: "Week4 notes - Forms, OOP and Modern JavaScript",
        url: "week4/index.html"
      },
      {
        label: "Week5 notes - Testing and Debugging. Todo app and Great Hikes",
        url: "week5/index.html"
      },
      {
        label: "Week6 - ToDO Web App Challenge",
        url: "week6/todo/todo.html"
      },
      {
        label: "Week7 - Further Functions, Ajax and Great Hikes",
        url: "week7/index.html"
      }


  ]
const ol = document.querySelector("#linkList")
function loadTitles(element) {
    let li = document.createElement("li");
    li.innerHTML = `<a href="${element.url}" target="_blank" rel="noopener noreferrer">${element.label}</a><hr>`
    ol.appendChild(li)
}
//    Read a list of links from an array.
links.forEach(loadTitles)