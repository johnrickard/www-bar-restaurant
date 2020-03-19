import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DatePicker from 'react-datepicker'
import YAMLReservation from '../yaml/reservation.yaml'

const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <div className="container__reservation">
      <div className="anchor">
        <a id="reservation"> </a>
        <h1 className="reservation__header">{YAMLReservation.title}</h1>
      </div>
      <div className="reservation__form">
        <Form name="Reservations" data-netlify="true" action="/thank-you">
          <input type="hidden" name="form-name" value="Reservations" />
          <Form.Group controlId="formName">
            <Form.Label>{YAMLReservation.formLabel1}</Form.Label>
            <Form.Control type="text" required="true" name="fullname" />
          </Form.Group>

          <Form.Group controlId="formNumber">
            <Form.Label>{YAMLReservation.formLabel2}</Form.Label>
            <Form.Control type="text" required="true" name="phonenumber" />
          </Form.Group>

          <Form.Group controlId="formDate">
            <Form.Label>{YAMLReservation.formLabel3}</Form.Label>
            <div>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="MMMM d, yyyy HH:mm"
                name="dateandtime"
              />
            </div>
          </Form.Group>

          <Form.Group controlId="formGuests">
            <Form.Label>{YAMLReservation.formLabel4}</Form.Label>
            <Form.Control type="text" required="true" name="numberofguests" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{
              width: '100%',
              minHeight: '3em',
              backgroundColor: '#341817',
              borderColor: '#341817',
              marginTop: '.5em',
              color: 'white',
              fontSize: '1em',
              borderRadius: '.25em',
            }}
          >
            {YAMLReservation.buttonText}
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Reservation
