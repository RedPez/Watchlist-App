import React from 'react'
import ReviewModalWithButton from './ReviewModalWithButton'
import AddButton from './AddButton'

const DisplayCard = (props) => {
  return (
    <div>
       {props.results.map((result) => (
          <div key={result.show.id}>
            <h3>{result.show.name}</h3>
            {result.show.image && <img src={result.show.image.medium} alt={result.show.name} />}
            <div>
            <ReviewModalWithButton title={result.show.name}/>
            <AddButton show={result.show} />
            </div>
            </div>
        ))}
    </div>
  )
}

export default DisplayCard