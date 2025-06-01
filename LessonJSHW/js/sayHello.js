const sayHello = (name) => `Hello,  ${name} !`;

function greet() {
    const name = document.getElementById('nameInput').value;
    const result = sayHello(name);
    document.getElementById('result').textContent = result;
}
