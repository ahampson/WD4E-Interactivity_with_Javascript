function showPopup(message) {
  alert(message);
}
function addClickListeners() {
    // Select all section elements
    document.querySelectorAll('section').forEach(element => {
        var title = element.firstElementChild.innerHTML
        element.addEventListener('click', function() {
            showPopup(title);
        });
    });
}