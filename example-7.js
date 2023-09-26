/*Example 7 - practica: Array

*/

const original = [1, 2, 3, 4, 5];
const fakeCopy = original;  //* aici este copiata calea catre referinta originala
const copy = [...original]; //* operatorul spread: creaza o copie, intr-o noua referinta --> scopul: modificarea noi variabile, pastrarea intacta a originalului

console.log(original);  // [1, 2, 3, 4, 5] //  
console.log(fakeCopy);  // [1, 2, 3, 4, 5] // --> //*! Aparent, toate sunt la fel, dar... 
console.log(copy);      // [1, 2, 3, 4, 5] //
                                

original.push(6);  // *1) //    
console.log(original); // [1, 2, 3, 4, 5, 6]; // --> //* Adauga 6, la referinta originala
console.log(fakeCopy); // [1, 2, 3, 4, 5, 6]; // --> //* Transmiterea lui 6.
console.log(copy)      // [1, 2, 3, 4, 5];    // --> //* Nu se intamplta nimic

fakeCopy.push(7);  // *2) //
console.log(original); // [1, 2, 3, 4, 5, 6, 7]; // --> //* Transmiterea lui 7.
console.log(fakeCopy); // [1, 2, 3, 4, 5, 6, 7]; // --> //* Adauga 7, la referinta originala
console.log(copy)      // [1, 2, 3, 4, 5];       // --> //* Nu se intamplta nimic

copy.push(8);      // *3) //
console.log(original); // [1, 2, 3, 4, 5, 6, 7]; // --> //* Nu se intammpla nimic
console.log(fakeCopy); // [1, 2, 3, 4, 5, 6, 7]; // --> //* Nu se intampla nimic
console.log(copy);     // [1, 2, 3, 4, 5, 8];    // --> //* Aadauga 8, la referinta creata, noua


/* 
*1) Modificarea variabilei originale: --> modificarea referintei originale:
-Se adauga valoarea "6", array-ului "original", (referinta originala se modifica, oarecum).
--> Se transmite valoarea "6", array-ului "fakeCopy", ("sunt legati" prin aceeasi referinta).
--> Array-ul "copy" nu se modifica, el are o referinta proprie si este compus din elementele initiale ale referintei originale.

*2) Modificarea variabilei legate la original: --> modificarea referintei originale:
-Se adauga valoarea "7", array-ului "fakeCopy", care este legat de referinta originala
--> Se transmite valoarea "7", array-ului "original", (modificarea ref. org. in sens invers)
--> Array-ul "copy" nu se modifica, el are o referinta proprie si ramane la fel.

*3) Modificarea variabilei copiate din original: --> modificarea referintei specifice (noua):
-Se adauga valoarea "8", array-ului "copy", (referinta lui specifica (noua), se modifica)
--> Array-ul "original" nu se modifica, nu isi schimba referinta (cea de sus este o copie, ce nu influnteaza originalul)
--> Array-ul "fakeCopy" nu se modifica, ( fiind legat de aceeasi referinta cu "original")
*/