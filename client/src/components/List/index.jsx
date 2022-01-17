import React from 'react';

import {MdAdd, MdDelete} from 'react-icons/md';

import Card from '../Card';

import { Container } from './styles';

export default function List({ data, index: listIndex, handleListDeletion, lists }) {



  return (




    <Container done={data.done}>
      <>

          {data.cards && data.cards.map((card, index) => (
          <Card
            key={card.id}
            listIndex={listIndex}
            index={index}
            data={card}
          />
        )) }
      </>

        <header>
            <h2>{data.title}</h2>
                <button type={"button"}>
                    onClick={() => handleListDeletion(lists.id)}
               <MdDelete size={24} color={"#FFF"} />
               </button>
            {data.creatable && (
                <button type="button">
                    <MdAdd size={24} color="#FFF" />
                </button>
            )}
        </header>


    </Container>
  );
}
