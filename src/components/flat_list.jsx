import React, { Component } from 'react';
import Flat from './flat';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map((flat, index) => <Flat 
        flat={flat} 
        key={flat.lat}
        index={index}
        selectFlat={props.selectFlat}
        selectedFlat={flat.name === props.selectedFlat.name}
      />)}
    </div>
  );
};

export default FlatList;
