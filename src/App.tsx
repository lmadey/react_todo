import './App.css';
import React, { useState } from "react";
import { FormSubmit } from "./FormSubmit";
import { FormFilter } from "./FormFilter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem"
import { FilteredList } from './FilteredList';
import { CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";

import { TodoContext } from "./TodoContext";

function App() {
  const [inputText, setInputText] = useState("");
  const [filterInputText, setFilterInputText] = useState("")
  const [todos, setTodos] = useState<any[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<any[]>([]);
  const [select, setSelect] = useState("all");

  const onChangeHandler = (item) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
          if(todo.id === item.id) {
              return item;
          }
          return todo;
      })
    })
    setFilteredTodos((currentTodos) => {
      return currentTodos.map((todo) => {
          if(todo.id === item.id) {
              return item;
          }
          return todo;
      })
    })
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    if(!inputText){
        alert("ops, you are trying to add empty task!");
    }
    else{
        setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
    }
    setInputText("")
  }
const selectHandler = (e) => {
  setFilterInputText(e.target.value);
  switch(select){
      case "all":
        setFilteredTodos(todos.filter((item) => item.text.includes(filterInputText)));
        break;   
      case "to-do":
        setFilteredTodos(todos.filter((item) => !item.completed).filter((item) => item.text.includes(filterInputText)));
        break;   
      case "done":
        setFilteredTodos(todos.filter((item) => item.completed).filter((item) => item.text.includes(filterInputText)));
        break;   
  }
}

return (
    <div className="main-contianer">
      <TodoContext.Provider value={{setTodos, todos, setFilteredTodos, filteredTodos}}>
      <FormSubmit onSubmit={submitHandler} inputText={inputText} setInputText={setInputText}/>
      <FormFilter setSelect={setSelect} filterInputText={filterInputText} onSelect={selectHandler}/>
      
      {/* FILTERED LIST */}
        {filterInputText.length > 2 && filteredTodos.length > 0 ? <FilteredList>
          {filteredTodos.map((item) => (
            <TodoItem
            todo={item}
            onChange={onChangeHandler}
            />
          ))}
        </FilteredList> : null}

      {/* TODO LIST */}
      <TodoList>
      {todos.filter((item) => !item.completed).map((item) => (
        <TodoItem
        todo={item}
        onChange={onChangeHandler}
        />
      ))}
      </TodoList>

    {/* COMPLETED LIST */}
      <TodoList>
      {todos.filter((item) => item.completed).map((item) => (
            <TodoItem
            todo={item}
            onChange={onChangeHandler}
            />
      ))}
      </TodoList>
      </TodoContext.Provider>
    </div>
  );
}
export default App;