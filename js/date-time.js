 //dynamic year by toLocalDateString
 const year_option = {year: 'numeric'}
 document.getElementById('currentyear').textContent = new Date().toLocaleDateString('en-ZA', year_option)
// dynamic last modified js
 let lastmod = new Date(document.lastModified)
 const options = {hour: 'numeric', minute: 'numeric', hour24: true, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}
 document.getElementById('lastupdated').textContent = lastmod.toLocaleDateString('en-ZA', options)