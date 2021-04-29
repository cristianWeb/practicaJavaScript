/*
una permutación de un conjunto es, en términos generales, una disposición de sus miembros en una secuencia u orden lineal, o si el conjunto ya está ordenado, una reordenación de sus elementos.
La palabra "permutación" también se refiere al acto o proceso de cambiar el orden lineal de un conjunto ordenado.
Más en: https://en.wikipedia.org/wiki/Permutation
 */

const createPermutations = (str) => {
    // convertir una cadena en matriz
    const arr = str.split('')

    // obtener la longitud de la matriz
    const strLen = arr.length
        // esto contendrá todas las permutaciones
    const perms = []
    let rest //
    let picked
    let restPerms
    let next

    // si strLen es cero, devuelve la misma cadena
    if (strLen === 0) { return [str] }
    // recorrer la longitud para obtener todas las permutaciones
    for (let i = 0; i < strLen; i++) {
        rest = Object.create(arr)
        picked = rest.splice(i, 1)

        restPerms = createPermutations(rest.join(''))

        for (let j = 0, jLen = restPerms.length; j < jLen; j++) {
            next = picked.concat(restPerms[j])
            perms.push(next.join(''))
        }
    }
    return perms
}

console.log(createPermutations('abc')) // should print ["abc", "acb", "bac", "bca", "cab", "cba"]