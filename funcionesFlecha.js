let miFuncion = function() {
        console.log('dentro de mi funcion');
    }
    /*
    const miFuncionFlecha = () => {
        console.log(' dentro de la funcion flecha');

    }*/

const miFuncionFlecha = () => console.log('dentro de la funcion flecha');

const saludar = () => {
    return 'como la ves';
}

const regObjeto = () => ({ nombre: 'David', apellido: 'lose' });

console.log(saludar());
miFuncionFlecha();
miFuncion();