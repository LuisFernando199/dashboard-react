import React from 'react'
import './barChartBox.scss'
import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';

type Props = {
  title:string;
  chartData:object[];
  dataKey:string;
  color:string;
}

export const BarChartBox = ({title, chartData, dataKey, color}: Props) => {
  return ( 
    <div className='BarChartBox'> 
    <h1>{title}</h1>
      <div className="chart">
      <ResponsiveContainer width="99%" height={150}>
        <BarChart width={150} height={40} data={chartData}>
          <Tooltip 
            contentStyle={{background: "#1f1e1d"}}
            labelStyle={{display:"none"}}
            cursor={{fill:"none"}}
          />
          <Bar dataKey={dataKey} fill={color} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
    
  )
}
