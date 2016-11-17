import React, { Component, PropTypes } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar';
import axios from 'axios';

import CreateClass from '../components/create_class/CreateClass.js';

BigCalendar.momentLocalizer(moment);

export default class Calendar extends Component {
  constructor(props){
    super(props);

    this.state = {events: []};
    this.getAllEvents();
  }

  componentWillMount() {
  }

  getAllEvents() {
    var self = this;
    axios.get('/api/teacher/classes/class/event')
    .then (function (response) {
      console.log('this is the response in getAllEvents:', response);
      self.setState({events: response.data})
      console.log('self.state.events ------------------>', self.state.events);
    })
    .catch(function (error) {

      console.log('hey, sooooo...shit went left when i tried to get events:', error);
    });
    console.log('component will mount this:', this.state.events);
  }

  render(){
  // console.log('Testing new Date object in Calendar.js:', new Date(2016, 3, 11, 10, 30, 0, 0));
  console.log('this.state.events',this.state.events)

  const list =
    [
      {
        'title': 'All Day Event',
        'allDay': true,
        'start': new Date(2016, 10, 0),
        'end': new Date(2016, 10, 0)
      },
      {
        'title': 'Long Event',
        'start': new Date(2016, 10, 7),
        'end': new Date(2016, 10, 10)
      },
      {
        'title': 'DTS STARTS',
        'start': new Date(2016, 10, 13, 0, 0, 0),
        'end': new Date(2016, 10, 20, 0, 0, 0)
      },
      {
        'title': 'DTS ENDS',
        'start': new Date(2016, 10, 6, 0, 0, 0),
        'end': new Date(2016, 10, 13, 0, 0, 0)
      },
      {
        'title': 'Some Event',
        'start': new Date(2016, 10, 9, 0, 0, 0),
        'end': new Date(2016, 10, 9, 0, 0, 0)
      },
      {
        'title': 'Conference',
        'start': new Date(2016, 10, 11),
        'end': new Date(2016, 10, 13),
        'desc': 'Big conference for important people'
      },
      {
        'title': 'Meeting',
        'start': new Date(2016, 10, 11, 10, 30, 0),
        'end': new Date(2016, 10, 11, 11, 55, 0),
        'desc': 'Pre-meeting meeting, to prepare for the meeting'
      },
      {
        'title': 'Lunch',
        'start':new Date(2016, 10, 11, 12, 0),
        'end': new Date(2016, 10, 11, 13, 0),
        'desc': 'Power lunch'
      },
      {
        'title': 'Meeting',
        'start':new Date(2016, 10, 11,14, 0, 0, 0),
        'end': new Date(2016, 10, 11,15, 0, 0, 0)
      },
      {
        'title': 'Happy Hour',
        'start':new Date(2016, 10, 11, 17, 0, 0, 0),
        'end': new Date(2016, 10, 11, 17, 30, 0, 0),
        'desc': 'Most important meal of the day'
      },
      {
        'title': 'Dinner',
        'start':new Date(2016, 10, 11, 20, 0, 0, 0),
        'end': new Date(2016, 10, 11, 21, 0, 0, 0)
      },
      {
        'title': 'Birthday Party',
        'start':new Date(2016, 10, 13, 7, 0, 0),
        'end': new Date(2016, 10, 13, 10, 30, 0)
      }
    ];
    return (
      
      <div>
        <BigCalendar
          {...this.props}
          selectable
          popup
          events={this.state.events}
          timeslots={4}
          step={15}
          style={{height: "400px"}}
          startAccessor={this.state.events.start}
          endAccessor={this.state.events.end}
          scrollToTime={new Date(1970, 1, 1, 7)}
          defaultDate={new Date(2016, 10, 11)}
        />

        <CreateClass />
      </div>
    )
  }
};