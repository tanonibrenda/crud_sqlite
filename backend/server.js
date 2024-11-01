const http = require ('http');
const sqlite3 = require('sqlite3');

//Crear conexion con bdd
const db = new sqlite3.Database('empresa.db', (err)=>{
    if(err){
        console.error(err);
        }else{
            console.log('conexion exitosa a bdd')
        }
});

// Crear una Tabla
db.run(`CREATE TABLE IF NOT EXISTS Productos (
    ProductID INTEGER PRIMARY KEY AUTOINCREMENT,
    ProductName TEXT,
    CategoryID INTEGER,
    Price FLOAT,
    Description TEXT,
    Origin TEXT,
    Image BLOB
)`, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Tabla 'Productos' creada exitosamente.");
    }
});

// Consulta para adición de productos
const insertData = db.prepare('INSERT INTO Productos (ProductName, CategoryID, Price, Description, Origin, Image) VALUES (?, ?, ?, ?, ?, ?)', function (err) {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Datos ingresados correctamente');
    }
});

//Crear opción delete
