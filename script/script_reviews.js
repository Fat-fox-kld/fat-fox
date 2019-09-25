var commonDiv = document.querySelector('.new_message_field');

var newMessage = document.querySelector('.reviews_form_field');
var newMessageName = newMessage.querySelector('#user_name_field');
var newMessageText = newMessage.querySelector('#reviews_message_field');

var messageTemplate = document.querySelector('#reviews-template').content;
var divForm = messageTemplate.querySelector('.comment');
var nameForm = messageTemplate.querySelector('.name');
var textForm = messageTemplate.querySelector('.text');

newMessage.addEventListener('submit', function(evt) {
  evt.preventDefault();

  var userName = newMessageName.value;
  var message = newMessageText.value;

  var clonedForm = divForm.cloneNode(true);
  var clonedFormName = clonedForm.querySelector('.name');
  var clonedFormText = clonedForm.querySelector('.text');

  clonedFormName.textContent = userName + ':';
  clonedFormText.textContent = message;

  commonDiv.appendChild(clonedForm);

  newMessageName.value = '';
  newMessageText.value = '';
});



