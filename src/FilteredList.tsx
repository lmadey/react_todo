import React from "react";
import styled from "styled-components";
import { Colors } from "./Colors";

const FilteredTodos = styled.div`
    border: 1px solid ${Colors.black};
    border-bottom: none;
    width: 100%;
    margin-top: 5vh;
`;

export const FilteredList = ({children}) => {
    return(
        <FilteredTodos>
            {children}
        </FilteredTodos>
    )
}