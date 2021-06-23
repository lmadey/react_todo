import React from "react";
import styled from "styled-components";

const Todos = styled.ul`
    width: 100%;
    margin-top: 5vh;
`;

export const TodoList = ({children}) => {
    return(
        <Todos filterInputText={children}>
                {children} 
        </Todos>
    )
}

