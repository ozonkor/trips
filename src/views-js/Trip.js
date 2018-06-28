import React from 'react';

class Trip extends React.Component {

  handleClick() {
    const {showTrip, trip} = this.props
    showTrip(trip)
  }

  render() {
    const {trip} = this.props

    return (
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src="http://via.placeholder.com/100x70" alt="" /></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">{trip.name}</a>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
              aspernatur!</p>
            <a href="#"
               className="btn btn-primary"
               onClick={(e) => this.handleClick(e)}
            >
              Show
            </a>
          </div>
          <div className="card-footer">
            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>
    )
  }
}
export default Trip;

