setTimeout(function() {
  var emailText = document.getElementById('email');
  var addressText = document.getElementById('address');
  var phoneText = document.getElementById('phone');
  var contactInfo = document.getElementById('contact-info');

  emailText.innerHTML = atob('ZGhydXZAc2luZ2hhbC5tZQ==');
  addressText.innerHTML = atob('MTUxIERyeWRlbiBSb2FkLCBBcHQgNTIwLCBJdGhhY2Es' +
    'IE5ZIDE0ODUw');
  phoneText.innerHTML = atob('KzEgKDYwNykgMjc5LTU3Mjk=');
  contactInfo.style.display = 'block';
}, 2000);