import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Request.js'
import './Table.js'
import './fixed-data-table.css'

const {Table, Column, Cell} = require('fixed-data-table');

class MyTextCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    );
  }
}

class MyTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myTableData: [
        {name: 'Rylan', email: 'Angelita_Weimann42@gmail.com'}],
    };
  }

  render() {
    return (
      <Table
        rowsCount={this.state.myTableData.length}
        rowHeight={50}
        headerHeight={50}
        width={801}
        height={200}>
        <Column
          header={<Cell>Nation</Cell>}
          cell={
            <MyTextCell
              data={this.state.myTableData}
              field="Nation"
            />
          }
          width={200}
        />
        <Column
          header={<Cell>Population (People) </Cell>}
          cell={
            <MyTextCell
              data={this.state.myTableData}
              field="Population"
            />
          }
          width={200}
        />
        <Column
          header={<Cell>Area (Km^2)</Cell>}
          cell={
            <MyTextCell
              data={this.state.myTableData}
              field="Area"
            />
          }
          width={200}
        />
        <Column
          header={<Cell>Density (Person(s) per Km^2)</Cell>}
          cell={
            <MyTextCell
              data={this.state.myTableData}
              field="Density"
            />
          }
          width={200}
        />
      </Table>
    );
  }
}

export default MyTable;
