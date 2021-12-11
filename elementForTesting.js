//Necesito una función que me reciba una cadena 
//y me devuelva la cadena invertida
const palindrome = (string) => {
    if (typeof(string) === 'undefined') return; 
    return string.split('').reverse().join('');
}

//Una función que me reciba un arreglo
//y me retorne el promedio de los valores del arreglo
const average = (array) => {
    if (typeof(array) === 'undefined') return; 
    if (array.length == 0) return 0;
    let sum=0;
    array.forEach(elem => { sum += elem});
    return sum/array.length
}

module.exports = {
    palindrome,
    average
}