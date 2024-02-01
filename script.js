function menu(){
document.addEventListener('DOMContentLoaded', function () {
    var icon = document.querySelector('.fa-bars'); // Change to the correct selector
    var dropdown = document.getElementById('dropdown-content');

    icon.addEventListener('click', function () {
        dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
    });

    window.addEventListener('click', function (event) {
        if (!event.target.matches('.fa-bars')) { // Change to the correct selector
            dropdown.style.display = 'none';
        }
    });
});
}
menu()

function scrollBottom() {
    const height = document.body.scrollHeight;
    window.scrollTo(0, height);
}

