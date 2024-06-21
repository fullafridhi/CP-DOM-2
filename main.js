




document.addEventListener('DOMContentLoaded', function() {
    // Select the color-box 
    var colorBox = document.getElementById('color-box');
    var changeColorBtn = document.getElementById('change-color-btn');

    // Function to generate a random color in hexadecimal format
    function getRandomColor() {
        var letters = '0123456789';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 10)];
        }
        return color;
    }

    // Event listener for the change-color-btn
    changeColorBtn.addEventListener('click', function() {
        var randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;
    });
});
