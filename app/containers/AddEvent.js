import React from 'react'
import { connect } from 'react-redux'
import { addEvent } from '../actions'

let AddEvent = ({ dispatch }) => {
  let input
  // const Event = ({ start_time, end_time, event_name, description, location, tags, photo }) =>
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addEvent(input.value))
        input.value = ''
      }}>
        <input
          ref={(node) => {
            input = node
          }}
          placeholder='Add Event'
          type='text'
        />
        <input label='Event Name' type='text' placeholder='What is your event name?' value={e.event_name}/>
        <input type='text' placeholder='Event Description'/>
        <input type='datetime' placeholder='Start Date/Time'/>
        <input type='datetime' placeholder='End Date/Time'/>
        <input type='url' label='Photo'/>
        <input type='submit' value='Add Event' />
      </form>
    </div>
  )
}

{/* <form onSubmit={this.handleSubmit.bind(this)}>
  <h1>Add a book</h1>
  <input label='Title' type='text' placeholder='Enter a title' value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} />
  <input label='Author' type='text' placeholder='Author' value={this.state.author} onChange={(e) => this.setState({author: e.target.value})} />
  <input type='submit' />
</form> */}

AddEvent = connect()(AddEvent)

export default AddEvent
