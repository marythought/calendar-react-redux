import React from 'react'
import { connect } from 'react-redux'
import { addEvent } from '../actions'
import AddEventForm from '../components/AddEventForm'

let AddEvent = ({ dispatch }) => {
  let input
  // const Event = ({ start_time, end_time, event_name, description, location, tags, photo }) =>
  return (
    <div>
      <AddEventForm onSubmit={values =>
        console.log(values)} />
    </div>
  )
}

/* <form onSubmit={this.handleSubmit.bind(this)}>
  <h1>Add a book</h1>
  <input label='Title' type='text' placeholder='Enter a title' value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} />
  <input label='Author' type='text' placeholder='Author' value={this.state.author} onChange={(e) => this.setState({author: e.target.value})} />
  <input type='submit' />
</form> */

// class ContactPage extends React.Component {
//   handleSubmit = (values) => {
//     // Do something with the form values
//     console.log(values);
//   }
//   render() {
//     return (
//       <ContactForm onSubmit={this.handleSubmit} />
//     );
//   }
// }
// Potentially set the form values initially, with the initialValues prop.

AddEvent = connect()(AddEvent)

export default AddEvent
