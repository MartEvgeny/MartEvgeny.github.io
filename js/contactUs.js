function submitMessage() {
  const mainPage = document.getElementById("main");
  const comment = document.getElementById("box-2");
  let firstName = document.querySelector("#firstName").value;
  let secondName = document.querySelector("#secondName").value;
  mainPage.innerHTML = `Hi ${firstName} ${secondName},
   Thank you for reaching out, we will call you soon.`;
  mainPage.style.width = "fit-content";
  mainPage.style.backgroundColor = "rgb(34, 169, 199)";
  mainPage.style.color = "white";
  mainPage.style.marginTop = "15px";
  mainPage.style.marginLeft = "5px";
  window.setTimeout(function () {
    window.location.href = "index.html";
  }, 4000);
}
