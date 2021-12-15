import axios from 'axios';

export const getAddress = (cep) => {
    return axios
    .get(`https://viacep.com.br/ws/${cep}/json/`)
}
