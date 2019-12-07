<?php

include_once __DIR__ . "/../authenticate/api.php";

const INVOICE_DIRECTORY = __DIR__ . "/../../../files/invoices";

api("mk", function ($action, $parameters) {
    $user = authenticate();
    if ($user !== null) {
        if ($action === "save") {
            if (isset($parameters->name) && isset($parameters->text)) {
                $file = INVOICE_DIRECTORY . "/" . $user . "-" . basename($parameters->name);
                if (file_exists($file)) {
                    file_put_contents($file, $parameters->text);
                    return [true, "Saved"];
                }
                return [false, "You are not admin, only admin can create new invoices"];
            }
            return [false, "Missing parameters"];
        }
        return [false, "Unknown action"];
    }
    return [false, "Authentication failure"];
}, false);

echo json_encode($result);