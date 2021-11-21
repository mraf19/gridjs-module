import Table from "./Table.js"

const table = new Table ({
    columns : ["Name", "Email"],
    data : [
        ["Muhammad Rafli", "raflimr1902@gmail.com"],
        ["Fahri Hamzah", "hamzfahri88@gmail.com"],
        ["Erika Azhari" , "erikaazhr30@gmail.com"]
    ]
})

const app = document.getElementById("app")
table.render(app)