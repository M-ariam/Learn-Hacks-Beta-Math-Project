let ans = ''

function evaluateInput(input) {
    ans = eval(input)

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