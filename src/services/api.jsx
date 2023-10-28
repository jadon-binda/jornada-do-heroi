import axios from 'axios';

export default axios.create({
  baseURL: 'http://homologacao3.azapfy.com.br/api/ps/metahumans',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});
