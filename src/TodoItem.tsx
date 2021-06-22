import React, { useContext } from "react";
import styled from "styled-components";
import { Colors } from "./Colors";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { TodoContext } from "./TodoContext";

const TodoElement = styled.li`
    background-color: #c5bdbd29;
    background-color: ${({todo}) => todo.completed ? "#c5bdbd73" : ""};
    border-bottom: 1px solid ${Colors.black};
    display: flex;
    justify-content: space-around;
    line-height: 40px;
    height: 40px;
    width: 100%;
    p{  
        color: ${Colors.black};
        flex: 1;
        padding-left: 10px;
        text-decoration: ${({todo}) => todo.completed ? "line-through" : "none"};
        overflow: hidden;
        width: 80%;
    }
`;

const DeleteButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    height: 40px;
    outline: none;
    width: 10%;
    i{
        color: ${Colors.button};
        padding: 10px;
        transition: .3s;
        :hover{
            color: ${Colors.dark};
            transform: rotate(90deg);
        }
    }
`;

const Label = styled.label`
    cursor: pointer;
    line-height: 30px;
    position: relative;
    margin-left: 40px;
    ::before{
        border: 1px solid ${Colors.button};
        border-radius: 5px;
        content: "";
        height: 30px;
        left: -30px;
        margin: 5px auto;
        position: absolute;
        width: 30px;
    }
    i{  
        color: ${Colors.button};
        font-size: 20px;
        left: -23px;
        position: absolute;
        top: 3px;
        transition: transform .3s, color .3s;
        :hover{
            color: ${Colors.dark};
            transform: scale(1.2);
        }
    }
`;

const Input = styled.input`
    display: none;
`;

export const TodoItem = ({ onChange, todo }) => {

    const {setTodos, todos, filteredTodos, setFilteredTodos} = useContext(TodoContext)

    const checkHandeler = () => {
        onChange({ ...todo, completed: !todo.completed })
    }
    const onDeleteHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id))
        setFilteredTodos(filteredTodos.filter((item) => item.id !== todo.id))
    }

    return(
            <TodoElement todo={todo}>
                <p>{todo.text}</p>
                <div>
                    <Input type="checkbox"/>
                    <Label onClick={checkHandeler} todo={todo}>
                        {todo.completed && <i className="fas fa-check"></i>}
                    </Label>
                </div>
                <DeleteButton onClick={onDeleteHandler}><i className="fas fa-times"></i></DeleteButton>
            </TodoElement>
    )
}