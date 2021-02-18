/**
 *  EXERCICI 1
 */
const firstName = ['S', 'A', 'R', 'A', 'H'];
firstName.forEach((char) => console.log(char));


/**
 *  EXERCICI 2
 */
function isVowel(char) {
  if (
    char === 'A' ||
    char === 'E' ||
    char === 'I' ||
    char === 'O' ||
    char === 'U'
  ) return true;
  return false;
}

console.log(`Partim del nom ${firstName.join('')}`);
firstName.forEach((char) => {
  if (typeof char === 'number') console.log(`Els noms de persones no contenen el número: ${char}`);
  else if (isVowel(char)) console.log(`He trobat la VOCAL ${char}`);
  else console.log(`He trobat la CONSONANT ${char}`);
});


/**
 *  EXERCICI 3
 */
const mapName = new Map();

function getOccurrence(array, value) {
  let count = 0;
  array.forEach(item => (item === value && count++));
  return count;
}

firstName.forEach(char => {
  mapName.set(char, getOccurrence(firstName, char));
});
console.log(mapName);


/**
 *  EXERCICI 4
 */
const surname = ['S', 'C', 'H', 'M', 'I', 'D', 'T'];
const spaceInName = firstName.concat(' ');
const fullName = spaceInName.concat(surname);
console.log(fullName);



/********** NIVELL 2 **********/
const text = "Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email";

const textToArray = text.split(' ');
console.log(textToArray);

const emails = [];
const emailRegEx = /[0-9a-zA-Z-ñ]+@[0-9a-zA-Z-ñ]+\.\w+/gi;


textToArray.forEach(item => {
  //item.replace(/^[(]/, '');
  //item.replace(/[):]$/, '');

  // no es el mejor código pero no sé cómo sacar los símbolos al inicio y final del item
  if (item.charAt(0) === '(') item = item.slice(1);
  if (
    item.charAt(item.length - 1) === '.' ||
    item.charAt(item.length - 1) === ':'
  ) item = item.slice(0, -1);
  if (item.charAt(item.length - 1) === ')') item = item.slice(0, -1);

  if (item.match(emailRegEx)) {
    if (!emails.includes(item)) {
      emails.push(item);
    }
  }
});
console.log(emails);
