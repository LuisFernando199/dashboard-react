import React from 'react';
import './home.scss'
import { Deals } from '../../Components/Deals/Deals';
import { ChartBox } from '../../Components/ChartBox/ChartBox';
import {chartBoxUser,chartBoxProduct,chartBoxRevenue,chartBoxConversion, barChartBoxVisit, barChartBoxRevenue} from '../../data'
import { BarChartBox } from '../../Components/BarChartBox/BarChartBox';
import { PieChartBox } from '../../Components/PieChartBox/PieChartBox';
import { BigChartBox } from '../../Components/BigChartBox/BigChartBox';

export const Home = () => {
  return (
    
    <div className='Home'>
     <div className="box box1"><Deals /></div>
     <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
       <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
      <div className="box box6"><PieChartBox /></div>
      <div className="box box5"><ChartBox {...chartBoxRevenue}/></div>
  <div className="box box4"><ChartBox {...chartBoxConversion}/></div>
      <div className="box box7"><BigChartBox /></div>
      <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>
    </div>
  )
}
