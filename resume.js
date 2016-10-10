setTimeout(function() {
  var emailText = document.getElementById('email');
  var addressText = document.getElementById('address');
  var phoneText = document.getElementById('phone');
  var contactInfo = document.getElementById('contact-info');

  emailText.innerHTML = atob('cGFydGhzaW5naGFsQGJlcmtlbGV5LmVkdQ==');
  addressText.innerHTML = atob('MjczMiBIYXN0ZSBTdHJlZXQsIEJlcmtlbGV5LCBDQSA5N' +
    'DcwNA==');
  phoneText.innerHTML = atob('KzEgKDUxMCkgNjc0LTQ2NTU=');
  contactInfo.style.display = 'block';
}, 2000);
