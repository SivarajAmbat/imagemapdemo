function showPopup(event) {
    var popup = document.getElementById('popup');
    var popupContent = document.getElementById('popup-content');
 
    if (event.clientX > 627 && event.clientX < 1066)
        if (event.clientY > 333 && event.clientY < 730) {
            console.log(event.clientX, event.clientY);
            popupContent.innerHTML = document.getElementById('pop1').innerHTML;
        }

    popup.style.display = 'block';
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}
