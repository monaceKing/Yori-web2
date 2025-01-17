document.addEventListener('DOMContentLoaded', function() {
  const loginText = document.querySelector(".title-text .login");
  const loginForm = document.querySelector("form.login");
  const loginBtn = document.querySelector("label.login");
  const signupBtn = document.querySelector("label.signup");
  const signupLink = document.querySelector("form .signup-link a");

  if (signupBtn) {
      signupBtn.onclick = () => {
          loginForm.style.marginLeft = "-50%";
          loginText.style.marginLeft = "-50%";
      };
  } else {
      console.error("signupBtn not found");
  }

  if (loginBtn) {
      loginBtn.onclick = () => {
          loginForm.style.marginLeft = "0%";
          loginText.style.marginLeft = "0%";
      };
  } else {
      console.error("loginBtn not found");
  }

  if (signupLink) {
      signupLink.onclick = () => {
          signupBtn.click();
          return false;
      };
  } else {
      console.error("signupLink not found");
  }
});











// const loginText = document.querySelector(".title-text .login");
// const loginForm = document.querySelector("form.login");
// const loginBtn = document.querySelector("label.login");
// const signupBtn = document.querySelector("label.signup");
// const signupLink = document.querySelector("form .signup-link a");
// signupBtn.onclick = (()=>{
//   loginForm.style.marginLeft = "-50%";
//   loginText.style.marginLeft = "-50%";
// });
// loginBtn.onclick = (()=>{
//   loginForm.style.marginLeft = "0%";
//   loginText.style.marginLeft = "0%";
// });
// signupLink.onclick = (()=>{
//   signupBtn.click();
//   return false;
// });