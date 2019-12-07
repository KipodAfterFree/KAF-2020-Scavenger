let ID;

function load(id) {
    ID = id;
    page("home");
}

function save() {
    api("scripts/backend/mk/mk.php", "mk", "save", {
        name: get("invoice-name").value,
        text: get("invoice-text").value
    }, (success, result) => {
        if (success)
            get("invoice-text").value = result;
        else
            popup(result, 2000, "#886666");
    }, authenticate());
}

function invoice() {
    fetch("files/invoices/" + ID + "-" + get("invoice-name").value).then(response => {
        response.text().then((result) => {
            get("invoice-text").value = result;
        });
    });
}
