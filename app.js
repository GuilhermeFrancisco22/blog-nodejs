const express = require("express");
const app = express();

const port = 8080;
const feedRoutes = require("./routes/feedRoutes");

// json parser do express - middware para criar
app.use(express.json());

//middleware para configurar o CORS
app.use((req, res, next) => {
  res.setHeader("Acess-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT< PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-type, Authorization");
  next();
});

//Rotas do app
app.use("/feed", feedRoutes);

app.listen(port, () => {
  console.log("Server online na porta: " + port);
});