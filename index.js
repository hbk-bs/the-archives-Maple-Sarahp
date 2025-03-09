//document.addEventListener("DOMContentLoaded", () => {
	//console.log("DOM is loaded");
//});

//constante wegen mehrfachen gebrauch -benutzt den button öfter
const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

//function toggleSidebar(){
//	sidebar.classList.toggle('close')
//	toggleButton.classList.toggle('rotate')

//	Array.from (sidebar.getElementsByClassName('show')).forEach(ul => {
//		ul.classList.remove('show')
//		ul.previousSibling.classList.remove('rotate')
//	})
//}

function toggleSubMenu(button){
	button.nextElementSibling.classList.toggle('show')
	button.classList.toggle('rotate')

	if(sidebar.classList.contains('close')){
		toggleButton.classList.toggle('rotate')
	}
}
