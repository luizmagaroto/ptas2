const express = require("express");
const app = express();

app.use(express.urlencoded({extend: true}));
app.use (express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const veiculoRoutes = require("./routes/veiculosRoutes");
app.use("/Veiculos", veiculoRoutes);

app.listen(8000, (err) => {
    console.log("Aplicação rodando em localhost:8000");
});