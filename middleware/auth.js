import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.Authorization.split(' ')[1];

    let decodeData;

    if (token) {
      decodeData = jwt.verify(token, 'secret123');
      req.userId = decodeData?.id;
    }

    next();
  } catch (error) {
    console.log(error);
  }
}

export default auth;