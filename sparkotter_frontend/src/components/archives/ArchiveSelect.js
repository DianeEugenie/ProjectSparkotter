import React from 'react';
import moment from 'moment';

const ArchiveSelect = (props) => {



  const allDates = Array.from(new Set(props.selections.map(date => date.dateCreated.substring(0,10))))


  const sendDate = (event) => {
    if (event.target.value === "default") {
      props.handleDate(event.target.value, false)
    } else {
    props.handleDate(event.target.value, true)
    }
  }


  const archiveOptions = allDates.map((date, index) => {
    return <option key={index} value={date}>{moment(date).local().format('LL')}</option>
  }
  )

  return (
    <div>

    <select className="sparkive-select" name="archiveItem" onChange={sendDate} defaultValue='default'>
    <option  value='default'>Show All Sparks</option>
    {archiveOptions}

    </select>
    </div>
  );

}


export default ArchiveSelect;
