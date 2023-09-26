function TripList({trips}) {
    return (
      <ul className="flex flex-col gap-y-4">
          {trips && trips.map((trip) => {
              return <li className="border p-4  shadow-xl" key={trip.title}>
                      <h3 className="text-3xl mb-4">Title: {trip.title}</h3>
                      <p className="fst-italic mb-4">Price: {trip.price}</p>
                      <p className="font-medium">Location: {trip.loc}</p>
              </li>
          })}
      </ul>
    )
  }
  
  export default TripList