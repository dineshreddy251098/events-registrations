import './index.css'

const activeEventStatus = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props

  const renderNoActiveEvent = () => (
    <p className="no-active-heading">
      Click on an event, to view its registration details
    </p>
  )

  const renderYetToRegister = () => (
    <div className="yet-to-register-container">
      <img
        className="yet-to-register-image"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="yet-to-register-description">
        A live performance brings so much to your relationship with dance.
        seeing dance live can often make you fall totally in love with this
        beautiful art work
      </p>
      <button className="yet-to-register-btn" type="button">
        Register here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div className="yet-to-register-container">
      <img
        className="registered-image"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="registered-paragraph">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationsClosed = () => (
    <div className="yet-to-register-container">
      <img
        className="yet-to-register-image"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="registered-paragraph">Registrations Are Closed Now!</h1>
      <p className="yet-to-register-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  switch (registrationStatus) {
    case activeEventStatus.yetToRegister:
      return <div>{renderYetToRegister()}</div>
    case activeEventStatus.registered:
      return <div>{renderRegistered()}</div>
    case activeEventStatus.registrationsClosed:
      return <div>{renderRegistrationsClosed()}</div>
    case activeEventStatus.initial:
      return <div>{renderNoActiveEvent()}</div>
    default:
      break
  }

  return <div>{renderRegistrationsClosed()}</div>
}
export default ActiveEventRegistrationDetails
