import React from 'react';
import moment from 'moment';

const ArchiveSelect = (props) => {

  // const tryout = () => {
  //   console.log(props.selections[0].dateCreated.substring(0,10)) // gets YYYY-MM-DD
  // }

  const allDates = Array.from(new Set(props.selections.map(date => date.dateCreated.substring(0,10))))
  //props.selections.map(date => moment(date.dateCreated).local().format('LL'));

  const sendDate = (event) => {
    if (event.target.value === "default") {
      props.handleDate(event.target.value, false)
    } else {
    props.handleDate(event.target.value, true)
    }
  }

  // const uniqueDates(date, index, self)function onlyUnique(value, index, self) {
  //   return self.indexOf(value) === index;


// myArray.filter((v, i, a) => a.indexOf(v) === i);
//date.dateCreated.substring(0,10)}


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
