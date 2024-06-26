import { Router } from "express";
import bcrypt from "bcrypt";
import { User } from "../../models/user.js";

const loginRouter = Router();

loginRouter.post("/", async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await User.findOne({ email });

    const isSuccess = bcrypt.compareSync(password, user.password);
    if (!isSuccess) {
      response.status(400).send("Invalid credentials");
      return;
    }
    response.status(200).send(isSuccess);
  } catch (error) {
    console.log(error);
    response.status(400).send(error);
  }
});

export default loginRouter;
