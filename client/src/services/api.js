export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'teste 1',
          labels: [],
          user: 'https://avatars.dicebear.com/api/bottts/ravte.svg'
        },
        {
          id: 2,
          content: 'teste 2',
          labels: [],
          user: 'https://avatars.dicebear.com/api/bottts/ravte.svg'
        },
        {
          id: 3,
          content: 'teste 3',
          labels: [],
          user: 'https://avatars.dicebear.com/api/bottts/ravte.svg'
        },
        
        
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'fazendo',
          labels: [],
          user: 'https://avatars.dicebear.com/api/bottts/ravte.svg'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'pause 2',
          labels: [],
          user: 'https://avatars.dicebear.com/api/bottts/ravte.svg'
        },
        {
          id: 8,
          content: 'pause',
          labels: [],
          user: 'https://avatars.dicebear.com/api/bottts/ravte.svg'
        },
   
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'concluido 1',
          labels: ['#54e1f7'],
        },
        {
          id: 12,
          content: 'concluido 2',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'concluido 3',
          labels: ['#54e1f7'],
        }
      ]
    },
  ];
}