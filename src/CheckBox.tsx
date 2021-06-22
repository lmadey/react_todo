import React from "react";
import styled from "styled-components";
import { Colors } from "./Colors";

const Wrapper = styled.div``;

const Label = styled.label`
    position: relative;
    line-height: 30px;
    cursor: pointer;
    ::before{
        content: "";
        height: 30px;
        width: 30px;
        border: 1px solid #7f857f;
        position: absolute;
        left: -30px;
        border-radius: 5px;
        margin: 5px auto;
        transition: .5s transform;
    }
    i{  
        font-size: 20px;
        position: absolute;
        left: -23px;
        top: 11px;
        color: #585757;
        transition: transform .3s, color .3s;
        display: ${({todo}) => todo.completed ? "block" : "none"};
        :hover{
        transform: scale(1.2);
        color: ${Colors.black};
        z-index: 1;
        }
    }
`;

const Input = styled.input`
    display: none;
`;

export const CheckBox = ({ todo }) => {
    return(
        <Wrapper>
            <Input type="checkbox"/>
            <Label todo={todo}>{todo.completed && <i className="fas fa-check"></i>}</Label>
        </Wrapper>
    )
}