const express = require("express");
const app = express();

//Settings (set)
app.set("PORT", process.env.PORT || 3000)

//Middlewares (use)
//app.use(express.json());                //Permite leer/escribir request/response que se reciban en formato json
app.use(express.urlencoded({ extended: false }))

//Routes
app.use("/api", require("./routes/usuarios"));

//Server Running
app.listen(app.get("PORT"), () => {
    console.log(`Server running on http://localhost:${app.get("PORT")}`); //Leer variables desde archivo .env
});

