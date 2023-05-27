const buttons = document.querySelectorAll('.calculadora__botao');
const display = document.querySelector('#tela');
const calculationData = {num1: undefined, num2: undefined, operation: ''};

buttons.forEach(element => {
    element.addEventListener('click', () => {
        if(!element.dataset.action) {
            addNumber(element.textContent);
        }
        else {
            addOperation(element);
        }
    });
});

function addNumber(buttonContent) {
    if(display.textContent.length < 11 && !Number.isNaN(parseInt(buttonContent))) {
        display.innerHTML += buttonContent;
        console.log(display.textContent);
    }
    else if(buttonContent === '.') {
        function procuraPonto () {
            let achou = false;

            for(let item of display.textContent) {
                if (item === '.') {
                    achou = true;
                }
            }

            return achou 
        }

        if(procuraPonto() === false) {
            display.innerHTML += buttonContent;
        }
    }
};

function addOperation(button) {
    const buttonData = button.dataset.action;
    
    if(buttonData === 'limpar') {
        calculationData.num1 = undefined;
        calculationData.num2 = undefined;
        calculationData.operation = '';
        display.innerHTML = '';
    }
    else if(!calculationData.operation) {
        if(buttonData === 'somar') {
            calculationData.num1 = parseFloat(display.textContent);
            calculationData.operation = '+';
            display.innerHTML = '';
        }
        else if(buttonData === 'subtrair') {
            if(tela.textContent === '') {
                display.innerHTML = button.textContent;
            }
            else {
                calculationData.num1 = parseFloat(display.textContent);
                calculationData.operation = '-';
                display.innerHTML = '';
            }
        }
        else if(buttonData === 'multiplicar') {
            calculationData.num1 = parseFloat(display.textContent);
            calculationData.operation = '*';
            display.innerHTML = '';
        }
        else if(buttonData === 'dividir') {
            calculationData.num1 = parseFloat(display.textContent);
            calculationData.operation = '/';
            display.innerHTML = '';
        }
        else if(buttonData === 'calcular') {
            calculationData.num1 = parseFloat(display.textContent);
            display.innerHTML = '';
            result();
        }
    }
    else {
        if(buttonData === 'calcular') {
            calculationData.num2 = parseFloat(display.textContent);
            display.innerHTML = '';
            result();
        }
        else if(buttonData === 'subtrair') {
            if(tela.textContent === '') {
                display.innerHTML = button.textContent;
            }
        }
    }
    
}

function result() {
    let resultAux = undefined;

    if(calculationData.num1 && calculationData.num2 && calculationData.operation) {
        if(calculationData.operation === '+') {
            resultAux = calculationData.num1 + calculationData.num2;
        }
        else if(calculationData.operation === '-') {
            resultAux = calculationData.num1 - calculationData.num2;
        }
        else if(calculationData.operation === '*') {
            resultAux = calculationData.num1 * calculationData.num2;
        }
        else {
            resultAux = calculationData.num1 / calculationData.num2;
        }
    }
    else {
        resultAux = calculationData.num1;
    }

    display.innerHTML = resultAux;
    calculationData.num1 = resultAux;
    calculationData.num2 = undefined;
    calculationData.operation = '';
    resultAux = undefined;
}
