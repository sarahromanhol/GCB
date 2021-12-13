import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import * as S from './styled'

export const RegisterPage = () => {
    const [showAddress, setShowAddress] = useState(false)
    const [form, onChange, clear] = useForm({
        nome: "",
        dataNascimento: "",
        cpf: "",
        cep: "",
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        uf: ""
    })

    const changeFormInputs = () => {
        if (
            form.name === '' ||
            form.dataNascimento === '' ||
            form.cpf === ''
        ) {
            window.alert("Preencha corretamente os campos abaixo")
        } else {
            setShowAddress(!showAddress)
        }
        // setShowAddress(!showAddress)
    }

    const volta = () => {
        setShowAddress(!showAddress)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        setShowAddress(!showAddress)
        // signup(form, clear, history, setRightbuttonText)
    }


    return (
        <S.RegisterPageContainer>
            <form onSubmit={onSubmitForm}>
                {showAddress ?
                    <S.Form>
                        <input
                            name={"cep"}
                            value={form.cep}
                            onChange={onChange}
                            placeholder={"CEP"}
                            required
                        />
                        <input
                            name={"logradouro"}
                            value={form.logradouro}
                            onChange={onChange}
                            placeholder={"Logradouro"}
                            required
                        />
                        <input
                            name={"numero"}
                            value={form.numero}
                            onChange={onChange}
                            placeholder={"Número"}
                            required
                        />
                        <input
                            name={"complemento"}
                            value={form.complemento}
                            onChange={onChange}
                            placeholder={"Complemento"}
                        />
                        <input
                            name={"bairro"}
                            value={form.bairro}
                            onChange={onChange}
                            placeholder={"Bairro"}
                            required
                        />
                        <input
                            name={"cidade"}
                            value={form.cidade}
                            onChange={onChange}
                            placeholder={"Cidade"}
                            required
                        />
                        <input
                            name={"uf"}
                            value={form.uf}
                            onChange={onChange}
                            placeholder={"UF"}
                            required
                        />
                        <button
                            type={"submit"}
                            fullWidth
                            variant={"contained"}
                            color="primary"
                            margin={"normal"}
                            onClick={volta}
                        >
                            Register
                        </button>
                    </S.Form>
                    :
                    <S.Form>
                        <input
                            name={"nome"}
                            value={form.nome}
                            onChange={onChange}
                            placeholder={"Nome Completo"}
                            required
                            type={"name"}
                        />
                        <S.BirthDateContainer>
                        <label for="dataNascimento">Data de nascimento</label>
                            <input
                                id="dataNascimento"
                                name={"dataNascimento"}
                                value={form.dataNascimento}
                                onChange={onChange}
                                required
                                type={"date"}
                            />
                        </S.BirthDateContainer>
                        <input
                            name={"cpf"}
                            value={form.cpf}
                            onChange={onChange}
                            placeholder={"CPF - Somente números"}
                            required
                        />
                        <button
                            onClick={changeFormInputs}
                            type={'submit'}
                        >
                            Next
                        </button>
                    </S.Form>
                }


            </form>
        </S.RegisterPageContainer>
    )
}

