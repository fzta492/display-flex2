var currentNumber2 = document.getElementById('currentNumber');
var currentNumber = 0;
function increment() {
    currentNumber = currentNumber + 1;
    currentNumber2.innerHTML = currentNumber;
}
function decrement() {
    currentNumber = currentNumber - 1;
    currentNumber2.innerHTML = currentNumber;

}

function soma(a, b) {
    return a + b
}

console.log(soma(3, 4))

function criarParagrafo() {
    let para = document.createElement('p');
    para.textContent = 'Você clicou o botao!';
    alert(para.textContent);
    document.body.appendChild(para);
    }
