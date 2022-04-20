const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
        label: "Week2 notes",
        url: "week2/index.html"
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