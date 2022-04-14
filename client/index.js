const baseURL = 'https://hello-scalio.herokuapp.com';
// const baseURL = 'http://localhost:3000';

document.querySelector('#div-detail').style.display = 'none';
document.querySelector('#div-error').style.display = 'none';
document.querySelector('#div-back').style.display = 'none';

const btnSend = document.querySelector('#btn-send');
const btnBack = document.querySelector('#btn-back');

btnSend.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#div-home').style.display = 'none';
  document.querySelector('#div-detail').style.display = 'block';
  document.querySelector('#div-back').style.display = 'block';

  const postId = document.querySelector('#post-id').value;

  fetch(`${baseURL}/posts/${postId}`).then((response) => {
    return response
      .json()
      .then((json) => {
        document.querySelector('#title').innerHTML = json.title;
        document.querySelector('#body').value = json.body;
        console.log(json);
      })
      .catch(() => {
        document.querySelector('#div-home').style.display = 'none';
        document.querySelector('#div-detail').style.display = 'none';
        document.querySelector('#div-error').style.display = 'block';
        document.querySelector('#div-back').style.display = 'block';
      });
  });
});

btnBack.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#div-detail').style.display = 'block';
  window.location.href = '/';
});
