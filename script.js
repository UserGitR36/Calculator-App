document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (buttonText === 'Del') {
        
                display.value = display.value.slice(0, -1);
            } else if (buttonText === 'Reset') {
                
                display.value = '0';
            } else if (buttonText === '=') {
        
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                
display
                display.value += buttonText;
            }
        });
    });
});
