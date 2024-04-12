import Express from "express";

const app = Express();
const port = 3000;

app.listen(port, () => {
  console.log(`Api a la escucha en el puerto: ${port}`);
});

app.get("/", function (request, response) {
  response.send(`JFCarrizo API ${process.env.npm_package_version}`);
});
