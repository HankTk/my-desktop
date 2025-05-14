// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import Highcharts from 'highcharts';
import { DataPoint } from './DataPoint';
import { ColumnChart } from './ColumnChart';
import { PieChart } from './PieChart';
import {FxButton} from "../../../components";
import TextField from "@mui/material/TextField";

const initialMonthlySpending: Array<DataPoint> = [
  { name: 'Food & Dining', y: 22 },
  { name: 'Health Insurance', y: 18 },
  { name: 'Miscellaneous', y: 32 },
  { name: 'Travel & Shopping', y: 16 },
];

const categoryIds = ['food', 'health', 'misc', 'travel'];

Highcharts.setOptions({
  colors: [
    '#00BFF8',
    '#008733',
    '#FFB618',
    '#FF4A44',
    '#64E572',
    '#FF9655',
    '#FFF263',
    '#6AF9C4',
  ],
});

export const ChartDemo = () => {

  const styles = {
    demoContainer: {
      margin: '16px'
    },
    chart: {
      height: '320px',
      border: '1px solid #E2E6E9',
      borderRadius: '3px',
      marginBottom: '8px',
    },
    form: {
      border: '1px solid #E2E6E9',
      borderRadius: '3px',
      width: '100%',
      padding: '16px'
    }
  }

  const [monthlySpending, setMonthlySpending] = useState(
    initialMonthlySpending
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Set new values for monthly spending
    // @ts-ignore
    const elements = e.currentTarget.elements['monthlySpending'];
    const newMonthlySpending = [];
    for (let i = 0; i < elements.length; i++) {
      newMonthlySpending.push({
        name: monthlySpending[i].name,
        y: parseInt(elements[i].value, 10),
      });
    }
    setMonthlySpending(newMonthlySpending);
  };

  return (
    <main style={styles.demoContainer}>
      <div style={styles.chart}>
        <PieChart
          title="Top spending categories"
          totalLabel="$ per month"
          data={monthlySpending}
        />
      </div>

      <div style={styles.chart}>
        <ColumnChart title="Top spending categories" data={monthlySpending} />
      </div>

      <div style={styles.form}>
        <form onSubmit={handleSubmit} style={{display: 'flex'}}>
          {monthlySpending.map((category, i) => (
            <div key={categoryIds[i]} className="form-group" style={{margin: '16px'}}>
              <TextField label={category.name}
                 id={categoryIds[i]}
                 name="monthlySpending"
                 className="form-control"
                 defaultValue={category.y}
              />
            </div>
          ))}
          <FxButton
              type={"submit"}
              variant={'contained'}
              color={'primary'}
              style={{height: '60px', margin: '16px', width: '180px'}}>
            Submit
          </FxButton>
        </form>
      </div>
    </main>
  );

};
