import Jwt from 'jsonwebtoken';
import dotenv from "dotenv"

dotenv.config()

export const verifyToken = (req, res, next) => {
  let token = '';

  // Check if the token is present in the headers
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.substring(7); // Extract the token without the 'Bearer ' prefix
  }

  // If the token is not present in the headers, check if it's in the request body
  if (!token && req.body.tokens) {
    token = req.body.tokens;
  }

  // If the token is not present in the headers or request body, check if it's in the cookies
  if (!token && req.cookies.access_token) {
    token = req.cookies.access_token;
  }

  if (!token) {
    throw new Error("You are not authenticated!");
  }

  Jwt.verify(token.replace(/"/g, ''), process.env.SECRET_JWT, (err, user) => {
    if (err) {
      throw new Error("Token is not valid!");
    }
    req.user = user;
    next();
  });
};


export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.user.role === 2 || req.user.user.role === 1) {
      next();
    } else {
      return next("You are not authorized!");
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.user.role === 2) {
      req.userId = req.user.user.id;
      next()
    }
    else throw new Error("Not authenticated!")
  })

}

