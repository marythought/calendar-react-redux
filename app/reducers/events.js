const event = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return {
        id: action.id,
        eventName: action.eventName,
        startTime: action.startTime,
        endTime: action.endTime,
        description: action.description,
        location: action.location,
        tags: action.tags,
        photo: action.photo,
      };
    default:
      return state;
  }
};

const staticEvents = [
  {
    startTime: 'January 1, 2017',
    endTime: 'February 1, 2017',
    eventName: 'Dryuary',
    description: 'No drinking all month! Start the year with a clean mind and liver!',
    location: 'Seattle, WA',
    tags: ['newyear', 'sober'],
    photo: 'https://www.hedweb.com/animimag/parrot.jpg.pagespeed.ce.Oj1akPd-0_.jpg',
    id: '0',
  },
  {
    startTime: 'February 22, 2017',
    endTime: 'February 22, 2017',
    eventName: 'Mary\'s Birthday',
    description: 'Buy her pressies!',
    location: 'Seattle, WA',
    tags: ['mary', 'birthday', 'newyear'],
    photo: 'https://www.hedweb.com/animimag/parrot.jpg.pagespeed.ce.Oj1akPd-0_.jpg',
    id: '1',
  },
  {
    startTime: 'March 15, 2017',
    endTime: 'March 15, 2017',
    eventName: 'Ides of March',
    description: 'Beware',
    location: 'Seattle, WA',
    tags: ['ides', 'party', 'mary'],
    photo: 'https://www.hedweb.com/animimag/parrot.jpg.pagespeed.ce.Oj1akPd-0_.jpg',
    id: '2',
  },
];

const events = (state = [...staticEvents], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        event(undefined, action),
      ];
    default:
      return state;
  }
};

export default events;
