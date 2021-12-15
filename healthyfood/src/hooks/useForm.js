import { useState } from "react";
import { getAddress } from "../services/integracoes";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = async (event) => {
        const { value, name } = event.target
        if (name === 'cep') {
            setForm({ ...form, [name]: value })
            console.log(value)
            const { data } = await getAddress(value)
            const infos = {
                logradouro: data.logradouro,
                localidade: data.localidade,
                bairro: data.bairro,
                uf: data.uf
            }
            console.log(infos)
            setForm({ ...form, ...infos })

        } else {
            setForm({ ...form, [name]: value })
        }

    }

    const clear = () => {
        setForm(initialState)
    }

    return [form, onChange, clear]
}

export default useForm

