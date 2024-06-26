import { Router } from "express";
import { User } from "../../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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
    const token = jwt.sign({ email, id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    response.status(200).send(token);
  } catch (error) {
    console.log(error);
    response.status(400).send(error);
  }
});

export default loginRouter;
