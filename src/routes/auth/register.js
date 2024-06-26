import { Router } from "express";
import bcrypt from "bcrypt";
import { User } from "../../models/user.js";

const registerRouter = Router();

registerRouter.post("/", async (request, response) => {
  try {
    const { email, password } = request.body;
    const userExists = await User.exists({ email });

    if (userExists) {
      response.status(500).send("Error al registrar usuario");
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    User.create({ email, password: hashedPassword });
    response.status(200).send("Usuario creado correctamente");
  } catch (error) {
    console.log(error);
    response.status(400).send(error);
  }
});

export default registerRouter;
