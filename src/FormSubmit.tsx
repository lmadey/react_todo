import React from "react";
import styled from "styled-components";
import { Colors } from "./Colors";

const Form = styled.form`
    display: flex;
    margin-bottom: 5vh;
    padding: 0;
    width: 100%;
`;

const Input = styled.input`
    background-color: transparent;
    border: none;
    border-left: 1px solid ${Colors.black};
    border-bottom: 1px solid ${Colors.black};
    color: ${Colors.black};
    height: 40px;
    outline: none;
    padding-left: 10px;
    width: 80%;
`;

const Button = styled.button`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${Colors.black};
    cursor: pointer;
    height: 40px;
    width: 20%;
    :hover{
        i{
            color: ${Colors.black};
            transform: rotate(90deg);
        }
    }
    i{
        color: ${Colors.button};
        font-size: 18px;
        transition: transform .3s;
    }
`;

export const FormSubmit = ({ onSubmit, inputText, setInputText }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    
    return(
        <Form>
            <Input value={inputText} onChange={inputTextHandler} placeholder="type new task..."/>
            <Button onClick={onSubmit}><i className="fas fa-plus"></i></Button>
        </Form>
    )
}