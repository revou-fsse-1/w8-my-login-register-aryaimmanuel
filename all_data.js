function allData() {
  table.innerHTML = ``;
  contactList = JSON.parse(localStorage.getItem("listItem")) ?? [];
  contactList.forEach(function (value, i) {
    var table = document.getElementById("table");
    table.innerHTML += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${value.name}</td>
                    <td>${value.age}</td>
                    <td>${value.email}</td>
                    <td>
                        <button onclick="find(${value.id})">EDIT
                        </button>
                    </td>
                    <td>
                        <button onclick="removeData(${value.id})">HAPUS
                        </button>
                    </td>
                </tr>`;
  });
}
