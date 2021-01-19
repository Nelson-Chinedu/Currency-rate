import axios from 'axios';

import { respondWithSuccess } from '../lib/httpResponse';

const api = 'https://api.exchangeratesapi.io/latest';

const currencyConverter = async (req, res) => {
  let { base, currency } = req.query;

  try {
    base = base.toUpperCase();
    currency = currency.split(',').map((data) => data.toUpperCase());
  
    const apiUrl = `${api}?base=${base}`;
  
    const data = await axios.get(`${apiUrl}`);
  
    const rates = data.data.rates;
  
    const filteredRate = Object.keys(rates)
      .filter((key) => currency.includes(key))
      .reduce((obj, key) => {
        obj[key] = rates[key];
        return obj
      }, {});
      
      const payload = {
        base: data.data.base,
        date: data.data.date,
        rates: filteredRate
      }

      return respondWithSuccess(res, 200, {results:{...payload}});
  
  } catch (error) {
    const errorr = error.response.data.error;
    return res.status(400).send({
      message: errorr
    });
  }
};

export default currencyConverter;