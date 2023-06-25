// Variables
let ans = ''
let equation = ''

// Adds equation and answer to the history tab
function addHistory() {
    const div = document.createElement('div');

    div.className = 'historyItem';

    div.innerHTML = `
        <div>${equation}</div>
        <div>${ans}</div>
`;

    const historyContainer = document.getElementById('history');
    historyContainer.prepend(div);
}

// Evaluates inputs
function evaluateInput(input) {
    equation = input
    ans = eval(input)
    addHistory()

    try {
        return ans;
    } catch (error) {
        return 'Error';
    }
}

// Determines if ans is needed
function addOperator(input, operator) {
    if (ans !== '' && input == ans) {
        return 'ans' + operator
    }
    else {
        return input + operator
    }
}
