import React from 'react';
import {v4 as uuidv4} from "uuid"
import { Container } from './styles';
import AddList from "../AddList";
import List from "../List";
export default function Header() {


const handleListAddition = (listTitle) => {
    const newTasks = [
        ...List,

        {
            title: listTitle,
            id: uuidv4(),
            creatable: false,
        },
    ];



  return (
    <Container>
      <h1>minhas tarefas</h1>
        <AddList handleListAddition={ handleListAddition}/>
    </Container>
  );
}}
