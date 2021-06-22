import React from "react";
import styled from "styled-components";
import { CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";

const Todos = styled.ul`
    width: 100%;
    margin-top: 5vh;
`;

export const TodoList = ({children}) => {
    return(
        <> 
            <SwitchTransition>
                <CSSTransition key={children} classNames={"show-"} timeout={0} appear={true}>
                    {true && <Todos filterInputText={children}>
                        <TransitionGroup component={null}>
                            {children} 
                        </TransitionGroup>
                    </Todos>}
                </CSSTransition>
            </SwitchTransition>
        </>
    )
}

