import { respondWithWaning } from "../lib/httpResponse";

const checkQueryParam = (req, res, next) => {

 const {base, currency} = req.query;
 
 if (!base && !currency){
   return respondWithWaning(res, 400, 'No query params found');
 }
  
 if (!base){
   return respondWithWaning(res, 400, 'Base query param not found');
 }

 if (!currency) {
   return respondWithWaning(res, 400, 'Currency query param not found');
 }

  next();
};

export default checkQueryParam;