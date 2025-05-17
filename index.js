const data = [
    { firstname: "Jill", lastname: "Smith", age: 50},
    { firstname: "Eve", lastname: "Jackson", age: 94}
];
const tbody = document.querySelector("#table tbody");
data.forEach(person => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${person.firstname}</td>
    <td>${person.lastname}</td>
    <td>${person.age}</td>
    `;
    tbody.appendChild(tr);
});