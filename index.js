//document.addEventListener("DOMContentLoaded", () => {
	//console.log("DOM is loaded");
//});

//constante wegen mehrfachen gebrauch -benutzt den button öfter
const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')



function toggleSubMenu(button){
	button.nextElementSibling.classList.toggle('show')
	button.classList.toggle('rotate')

	if(sidebar.classList.contains('close')){
		toggleButton.classList.toggle('rotate')
	}
}
