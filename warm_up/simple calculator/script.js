const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === 'C') {
            result.value = '';
        } else if (value === '=') {
            try {
                result.value = eval(result.value);
            } catch (error) {
                result.value = 'Error';
            }   
        } else {
            if (value === 'X') {
                result.value += '*';
            } else {
                result.value += value;
            }
        }   
    });
});

