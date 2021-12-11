const { palindrome } = require('../elementForTesting')

//Prueba exitosa donde la entrada corresponde a la salida
test('Palindrome arroz', () => {
    const result = palindrome("arroz");
    expect(result).toBe("zorra");
})

//Prueba exitosa donde la entrada es un string vacio
test('Palindrome of empty string', () => {
    const result = palindrome('');
    expect(result).toBe('');
})

test('Palindrome of undefined', () => {
    const result = palindrome();
    expect(result).toBeUndefined();
})



