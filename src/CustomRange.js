import React from 'react';
import dates from './utils/dates';
import localizer from './localizer';
import {navigate} from './utils/constants';

import TimeGrid from './TimeGrid';

let CustomRange = React.createClass({

  propTypes: {
    date: React.PropTypes.instanceOf(Date).isRequired,
  },

  getDefaultProps() {
    return TimeGrid.defaultProps
  },

  render() {
    let {date, ...props} = this.props
    let {start, end} = CustomRange.range(date, this.props);

    return (
        <TimeGrid {...props} start={start} end={end} eventOffset={15}/>
    );
  }

});

CustomRange.navigate = (date, action) => {
  switch (action) {
    case navigate.PREVIOUS:
      return dates.add(date, -1, 'week');

    case navigate.NEXT:
      return dates.add(date, 1, 'week');

    default:
      return date;
  }
}

CustomRange.range = (date, {culture, customDates}) => {
  let start = dates.min.apply(this, customDates);
  let end = dates.max.apply(this, customDates);

  console.log(start, end);
  return {start, end}
}

export default CustomRange
