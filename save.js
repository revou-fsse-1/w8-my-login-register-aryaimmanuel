function save() {
  contactList = JSON.parse(localStorage.getItem("listItem")) ?? [];
  var id;
  contactList.length != 0
    ? contactList.findLast((item) => (id = item.id))
    : (id = 0);

  if (document.getElementById("id").value) {
    contactList.forEach((value) => {
      if (document.getElementById("id").value == value.id) {
        (value.name = document.getElementById("name").value),
          (value.age = document.getElementById("age").value),
          (value.email = document.getElementById("email").value);
      }
    });

    document.getElementById("id").value = "";
  } else {
    var item = {
      id: id + 1,
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      email: document.getElementById("email").value,
    };
    contactList.push(item);
  }

  localStorage.setItem("listItem", JSON.stringify(contactList));

  allData();

  document.getElementById("form").reset();
}
