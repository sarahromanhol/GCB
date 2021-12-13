import axios from 'axios';

export const getAddress = (cep) => {
    axios
    .get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}