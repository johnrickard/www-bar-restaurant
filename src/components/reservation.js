import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DatePicker from 'react-datepicker'

const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <div className="container__reservation">
      <div className="anchor">
        <a id="reservation"> </a>
        <h1 className="reservation__header">
          MAKE A<br /> RESERVATION
        </h1>
      </div>
      <div className="reservation__form">
        <Form name="Reservations" data-netlify="true" action="/thank-you">
          <input type="hidden" name="form-name" value="Reservations" />
          <Form.Group controlId="formName">
            <Form.Label>Full name</Form.Label>
            <Form.Control type="text" required="true" name="fullname" />
          </Form.Group>

          <Form.Group controlId="formNumber">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="text" required="true" name="phonenumber" />
          </Form.Group>

          <Form.Group controlId="formDate">
            <Form.Label>Date and time of arrival</Form.Label>
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
            <Form.Label>Number of guests</Form.Label>
            <Form.Control type="text" required="true" name="numberofguests" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ width: '100%', backgroundColor: '#341817' }}
          >
            SEND
          </Button>
          <Form.Text className="text-muted">
            Or call us at +34 123 45 67 89
          </Form.Text>
        </Form>
      </div>
    </div>
  )
}

export default Reservation
