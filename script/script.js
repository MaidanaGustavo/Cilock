const menuBar = document.getElementsByClassName('menuBar')[0];
const menu = document.getElementById('menuItem');
menuBar.addEventListener("click",() => menu.classList.toggle("active"));


