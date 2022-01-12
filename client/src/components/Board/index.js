import React, { useState, useEffect } from 'react';
import produce from 'immer';
import axios from "axios";
import { loadLists } from '../../services/api';

import BoardContext from './context';

import List from '../List';

import { Container } from './styles';

const Board = () => {
    const [listas, setListas] = useState([]);

    function move(fromList, toList, from, to) {
        setListas(produce(listas, draft => {
            const dragged = draft[fromList].cards[from];

            draft[fromList].cards.splice(from, 1);
            draft[toList].cards.splice(to, 0, dragged);
        }))
    }

    useEffect(() => {
        const fetchTasks = async () => {
            const {data} = await axios.get(
                "http://localhost:8080/Lists"
            );

            setListas(data);
        };
        fetchTasks();
    }, []);


    return (
        <BoardContext.Provider value={{listas, move}}>
            <Container>
                {listas.map((list, index) => <List key={list.title} index={index} data={list}/>)}
            </Container>
        </BoardContext.Provider>
    );
}
export default Board;



