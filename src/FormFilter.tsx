import React from "react";
import styled from "styled-components";
import { Colors } from "./Colors";

const Form = styled.form`
    display: flex;
    padding: 0;
    width: 100%;
`;

const Input = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${Colors.black};
    border-left: 1px solid ${Colors.black};
    height: 40px;
    outline: none;
    padding: 10px;
    width: 80%;
`;

const Select = styled.select`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${Colors.black};
    cursor: pointer;
    height: 40px;
    outline: none;
    width: 20%;
`;

export const FormFilter = ({ filterInputText, setSelect, onSelect }) => {

    const selectHandler = (e) => {
        setSelect(e.target.value);
    }
    
    return(
        <Form>
            <Input value={filterInputText} onChange={onSelect} placeholder="search task..."/>
            <Select onChange={selectHandler}>
                <option value="all">all</option>
                <option value="to-do">to do</option>
                <option value="done">done</option>
            </Select>
        </Form>
    )
}