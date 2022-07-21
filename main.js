const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password_confirm');
const passwordError = document.querySelector('.password_error');
const checkNum = passwordError.querySelector('.password_num');
const checkChar = passwordError.querySelector('.password_char');
const checkEight = passwordError.querySelector('.password_eight');
const passwordConfirmError = document.querySelector('.password_confirm_error');
const br = document.createElement('br');
function validatePassword() {
  if (password.validity.patternMismatch) {
    const currentValue = password.value;
    const regExpCap = /[A-Z]/g;
    const regExpDig = /[0-9]/g;
    if (regExpCap.test(currentValue)) {
      checkChar.textContent += '';
    } else {
      checkChar.textContent = '하나의 대문자가 있어야 합니다.';
    }
    if (regExpDig.test(currentValue)) {
      checkNum.textContent += '';
    } else {
      checkNum.textContent = '하나의 숫자가 있어야 합니다.';
    }
    if (currentValue.length < 9) {
      checkEight.textContent = '최소 글자수는 8글자 입니다.';
    } else {
      checkEight.textContent = '';
    }
  } else {
    passwordError.textContent = '';
  }
}

function matchPassword() {
  if (password.value != passwordConfirm.value) {
    passwordConfirmError.textContent = "패스워드가 맞지않습니다.";
  } else {
    passwordConfirmError.textContent = '';
  }
}

password.addEventListener('input', validatePassword);
passwordConfirm.addEventListener('input', matchPassword);