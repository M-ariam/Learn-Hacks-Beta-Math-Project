let ans = ''
let equation = ''
const equationList = []

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

function evaluateInput(input) {
    equation = input
    ans = eval(input)
    equationList.push(String(equation + "=" + ans))
    addHistory()

    try {
        return ans;
    } catch (error) {
        return 'Error';
    }
}

function addOperator(input, operator) {
    if (ans !== '' && input == ans) {
        return 'ans' + operator
    }
    else {
        return input + operator
    }
}
