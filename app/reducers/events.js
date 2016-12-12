// start_time, end_time, event_name, description, location, tags, photo
const event = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return {
        start_time: action.start_time,
        end_time: action.end_time,
        event_name: action.event_name,
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
  { start_time: 'January 1, 2017',
    end_time: 'February 1, 2017',
    event_name: 'Parrot Party',
    description: 'A conga line of parrots',
    location: 'Seattle, WA',
    tags: ['parrots', 'party'],
    photo: 'https://www.hedweb.com/animimag/parrot.jpg.pagespeed.ce.Oj1akPd-0_.jpg',
    id: '0'
  },
  { start_time: 'January 2, 2017',
    end_time: 'February 2, 2017',
    event_name: 'Parrot Party 2',
    description: 'A conga line of parrots',
    location: 'Seattle, WA',
    tags: ['parrots'],
    photo: 'https://www.hedweb.com/animimag/parrot.jpg.pagespeed.ce.Oj1akPd-0_.jpg',
    id: '1'
  },
  { start_time: 'January 1, 2017',
    end_time: 'February 1, 2017',
    event_name: 'Parrot Party',
    description: 'A conga line of parrots',
    location: 'Seattle, WA',
    tags: ['parrots', 'party'],
    photo: 'https://www.hedweb.com/animimag/parrot.jpg.pagespeed.ce.Oj1akPd-0_.jpg',
    id: '2'
  }
]
const events = (state = staticEvents, action) => {
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
