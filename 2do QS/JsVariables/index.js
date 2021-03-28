const littleText = 'Hola, ingresa los siguientes datos:';

function func1(params) {
    alert(littleText);
    let name = prompt('Escribe tu nombre:');
    let age = prompt('Escribe tu edad:');

    const info = `El nombre ingresado es: ${name} y la edad ingresada es: ${age}`
    document.write(info);
    alert(info)
};

func1();



