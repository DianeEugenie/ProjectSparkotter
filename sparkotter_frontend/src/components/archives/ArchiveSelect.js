import React, {Component} from 'react';
import moment from 'moment';

const ArchiveSelect = (props) => {

  // const tryout = () => {
  //   console.log(props.selections[0].dateCreated.substring(0,10)) // gets YYYY-MM-DD
  // }

  const allDates = Array.from(new Set(props.selections.map(date => date.dateCreated.substring(0,10)))).reverse()
  //props.selections.map(date => moment(date.dateCreated).local().format('LL'));

  const sendDate = (event) => {
    props.handleDate(event.target.value, true)
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

    <select name="archiveItem" onChange={sendDate}>
    <option selected value=''>Show All Sparks</option>
    {archiveOptions}

    </select>
    </div>
  );

}


export default ArchiveSelect;
