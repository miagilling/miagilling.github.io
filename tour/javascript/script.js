function toggleDoor() {
    var myDoor = document.getElementsByClassName('door');
    var displaySetting = myDoor.style.display;
    var doorButton = document.getElementsById('doorButton');

    if (displaySetting == 'block'){
        myDoor.style.display = 'none';
        doorButton.innerHTML = 'Show door';
    }
    else{
        myDoor.style.display = 'block';
        doorButton.innerHTML = 'Hide door';
    }
}