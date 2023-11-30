fetch('https://app-uniesp-p2-43622fe4ead4.herokuapp.com/mensagens')
 .then(response => response.json())
 .then(data => {
  const table = document.getElementById('myTable');
  data.forEach(item => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = item.nome;
    const emailCell = document.createElement('td');
    emailCell.textContent = item.email;
    const messageCell = document.createElement('td');
    messageCell.textContent = item.mensagem;
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(messageCell);
    table.appendChild(row);
  });
 })
 .catch(error => console.error('Erro:', error));



 document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  checkCredentials();
 });

 
 function checkCredentials() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (email === 'admin@admin.com' && password == '1234') {
  window.location.href = 'adm.html';
  } else {
  document.getElementById('errorMessage').textContent = 'Email ou senha incorretos.';
  }
 }
 

 document.getElementById('messageForm').addEventListener('submit', function(event) {
  event.preventDefault();
  sendMessage();
 });
 
 function sendMessage() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  fetch('https://app-uniesp-p2-43622fe4ead4.herokuapp.com/mensagens', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: name, email: email, message: message })
  })
  .then(response => response.json())
  .then(data => {
  if (data.success) {
    document.getElementById('messageResponse').textContent = 'Mensagem enviada com sucesso.';
  } else {
    document.getElementById('messageResponse').textContent = 'Erro ao enviar a mensagem.';
  }
  })
  .catch(error => {
  document.getElementById('messageResponse').textContent = 'Erro ao enviar a mensagem: ' + error;
  });
 }
 
