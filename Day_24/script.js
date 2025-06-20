function saveToLocalStorage() {
  const name = document.getElementById("username").value;
  localStorage.setItem("localName", name);
  alert("Saved to Local Storage");
}

function saveToSessionStorage() {
  const name = document.getElementById("username").value;
  sessionStorage.setItem("sessionName", name);
  alert("Saved to Session Storage");
}

function saveToCookie() {
  const name = document.getElementById("username").value;
  document.cookie = `cookieName=${name}; path=/; max-age=86400`;
  alert("Saved to Cookie");
}

function loadAll() {
  const local = localStorage.getItem("localName") || "Not Found";
  const session = sessionStorage.getItem("sessionName") || "Not Found";
  const cookie = document.cookie
    .split("; ")
    .find(row => row.startsWith("cookieName="))
    ?.split("=")[1] || "Not Found";

  document.getElementById("output").innerHTML = `
    <p><strong>Local Storage:</strong> ${local}</p>
    <p><strong>Session Storage:</strong> ${session}</p>
    <p><strong>Cookie:</strong> ${cookie}</p>
  `;
}
