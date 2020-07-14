function load(userID) {
    // Show the homepage
    view("home");
    // Load the user ID
    MonyKount.updateID(userID);
}

class MonyKount {

    static updateID(userID) {
        this.ID = userID;
    }

    static syncInvoice() {
        api("scripts/backend/invoice/invoice.php", "invoice", "sync", {
            name: get("invoice-name").value,
            text: get("invoice-text").value
        }, (success, result) => {
            if (success)
                popup("Saved.", 2000, "#668866");
            else
                popup(result, 2000, "#886666");
        }, authenticate());
    }

    static createInvoice() {
        api("scripts/backend/invoice/invoice.php", "invoice", "create", {
            name: get("invoice-name").value
        }, (success, result) => {
            if (success)
                popup("Created.", 2000, "#668866");
            else
                popup(result, 2000, "#886666");
        }, authenticate());
    }

    static loadInvoice() {
        fetch("files/invoices/" + this.ID + "-" + get("invoice-name").value).then(response => {
            response.text().then((result) => {
                get("invoice-text").value = result;
            });
        });
    }

}