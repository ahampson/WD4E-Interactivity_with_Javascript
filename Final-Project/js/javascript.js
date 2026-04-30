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
    
    var sectionList = document.getElementsByTagName('section');
    for(var index = 0 ; index <= sectionList.length ; index ++){
        console.log(index, sectionList[index])
    }
}

