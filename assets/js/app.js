const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Se requiere cambiar el selector a uno de tipo clase
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) { // Se requiere declarar como una funcion async
  $n.textContent = 'cargando...';
  try { // Se requiere un try - catch
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // Se agrega esta linea para extraer los datos del cuerpo de la respuesta HTTP como un objeto JS
    console.log(data);
    $n.textContent = '${data.name}';
    $b.textContent = '${data.blog}';
    $l.textContent = '${data.location}';
  } catch (err) { // Se adhiere el catch
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; // hacia falta $ para relacionarlo con un elemento del DOM y ;
}

displayUser('stolinski').catch(handleError);