document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('header-burger').addEventListener('click', function() {
        document.querySelector('header').classList.toggle('open')
    })
})