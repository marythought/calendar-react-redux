// startTime, endTime, eventName, description, location, tags, photo
const event = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return {
        startTime: action.startTime,
        endTime: action.endTime,
        eventName: action.eventName,
        description: action.description,
        location: action.location,
        tags: action.tags,
        photo: action.photo,
        id: action.id
      }
    default:
      return state
  }
}

const staticEvents = [
  { startTime: 'January 1, 2017',
    endTime: 'February 1, 2017',
    eventName: 'Parrot Party',
    description: 'A conga line of parrots',
    location: 'Seattle, WA',
    tags: ['parrots', 'party'],
    photo: 'https://www.hedweb.com/animimag/parrot.jpg.pagespeed.ce.Oj1akPd-0_.jpg',
    id: '0'
  },
  { startTime: 'January 2, 2017',
    endTime: 'February 2, 2017',
    eventName: 'Parrot Party 2',
    description: 'A conga line of parrots',
    location: 'Seattle, WA',
    tags: ['parrots'],
    photo: 'https://www.hedweb.com/animimag/parrot.jpg.pagespeed.ce.Oj1akPd-0_.jpg',
    id: '1'
  },
  { startTime: 'January 1, 2017',
    endTime: 'February 1, 2017',
    eventName: 'Parrot Party',
    description: 'A conga line of parrots',
    location: 'Seattle, WA',
    tags: ['parrots', 'party'],
    photo: 'https://www.hedweb.com/animimag/parrot.jpg.pagespeed.ce.Oj1akPd-0_.jpg',
    id: '2'
  }
]

const events = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        event(undefined, action)
      ]
    default:
      return state
  }
}

export default events
