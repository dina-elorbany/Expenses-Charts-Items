import React from 'react';
import Card from '../UI/Card';
import './Chart.css';
import ChartBar from './ChartBar';

export default function Chart(props) {
  const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);

  const totalMaxValue = Math.max(...dataPointsValues);
  // console.log(totalMaxValue);

  return (
    <Card className='chart'>
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </Card>
  );
}
