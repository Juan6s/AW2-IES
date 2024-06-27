import jwt from "jsonwebtoken";

export async function checkTokenMiddleware(request, response, next) {
  try {
    if (process.env.NODE_ENV === "test") {
      return next();
    }

    const token = request.headers["authorization"];
    if (!token) {
      throw new Error("No token");
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET, {});

    next();
  } catch {
    return response.status(401).send("Not authorized");
  }
}
