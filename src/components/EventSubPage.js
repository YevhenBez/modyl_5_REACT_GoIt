import useFetchEvent from '../hooks/useFetchEvent';

const EventSubPage = () => {
  const eventSub = useFetchEvent();

  // const { name, images[0]  } = eventSub;
  console.log(eventSub);

  return (
    <>
      {eventSub && (
        <>
          <p>{eventSub.name}</p>
          <img src={eventSub.images[0].url} alt={eventSub.name} />
        </>
      )}
    </>
  );
};

export default EventSubPage;
