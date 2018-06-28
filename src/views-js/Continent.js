import React from 'react';

class Continent extends React.Component {

  handleClick() {
    const {onSelect, continent} = this.props
    onSelect(continent)
  }

  render () {
    const {continent, selected} = this.props
    let className = 'list-group-item list-group-item-action';
    if (selected) {
      className += ' active';
    }
    return(
      <div className={className} key={continent.id} onClick={(e) => this.handleClick(e)}>
        <h4>{continent.name}</h4>
      </div>
    )
  }
}
export default Continent;