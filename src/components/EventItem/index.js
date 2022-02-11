import './index.css'

const EventItem = props => {
  const {eachEvent, activeEvent, onClickEvent} = props
  const {id, imageUrl, name, location} = eachEvent
  const activeClass = activeEvent.id === id ? 'active-event' : ''

  const clickedEvent = () => {
    onClickEvent(id)
  }
  return (
    <li className="event-container">
      <button onClick={clickedEvent} type="button" className="event-btn">
        <img
          className={`event-image ${activeClass}`}
          src={imageUrl}
          alt="event"
        />
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </button>
    </li>
  )
}
export default EventItem
