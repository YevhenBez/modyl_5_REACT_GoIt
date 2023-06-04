import { useState, useEffect } from 'react';
import { fetchEventById } from '../servises/events-api';
import { useParams } from 'react-router-dom';

const useFetchEvent = () => {
  const [event, setEvent] = useState(null);

  const { eventId } = useParams();

  useEffect(() => {
    fetchEventById(eventId)
      .then(setEvent)
      .catch(error => console.log(error));
  }, [eventId]);
    
    return event;
};

export default useFetchEvent