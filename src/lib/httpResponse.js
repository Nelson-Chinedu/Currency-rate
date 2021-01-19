export const respondWithWaning = (res, status, message) => {
  res.status(status).send(message);
};

export const respondWithSuccess = (res, status, payload={}) => {
  res.status(status).send(payload);
}