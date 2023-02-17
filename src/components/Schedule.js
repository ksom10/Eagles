import React from 'react'
import './Schedule.css'
import { useState } from 'react';
import lions from '../images/logos/lions.png'
import vikings from '../images/logos/vikings.png'
import commanders from '../images/logos/commanders.png'
import jaguars from '../images/logos/jaguars.png'
import cardinals from '../images/logos/cardinals.png'
import cowboys from '../images/logos/cowboys.png'
import steelers from '../images/logos/steelers.png'
import colts from '../images/logos/colts.png'
import packers from '../images/logos/packers.png'
import titans from '../images/logos/titans.png'
import giants from '../images/logos/giants.png'
import bears from '../images/logos/bears.png'
import saints from '../images/logos/saints.png'
import texans from '../images/logos/texans.png'
import eagles from '../images/logos/eagles.png'

let schedule = [
    {week: 'Week 1', date: 'Sun 09/11', time: '1:00 PM EST', opp: 'Detroit Lions', logo: lions, loc: '@' + 'FORD FIELD'},
    {week: 'Week 2', date: 'Mon 09/19', time: '8:30 PM EST', opp: 'Minnesota Vikings', logo: vikings, loc: '@' + 'LINCOLN FINANCIAL FIELD'},
    {week: 'Week 3', date: 'Sun 09/25', time: '1:00 PM EST', opp: 'Washington Commanders', logo: commanders, loc: '@' + 'FEDEX FIELD'},
    {week: 'Week 4', date: 'Sun 10/02', time: '1:00 PM EST', opp: 'Jacksonville Jaguars', logo: jaguars, loc: '@' + 'LINCOLN FINANCIAL FIELD'},
    {week: 'Week 5', date: 'Sun 10/09', time: '4:25 PM EST', opp: 'Arizona Cardinals', logo: cardinals, loc: '@' + 'STATE FARM FIELD'},
    {week: 'Week 6', date: 'Sun 10/16', time: '8:20 PM EST', opp: 'Dallas Cowboys', logo: cowboys, loc: '@' + 'LINCOLN FINANCIAL FIELD'},
    {week: 'Week 7', date: '', time: '', opp: 'BYE', logo: eagles, loc: ''},
    {week: 'Week 8', date: '10/30', time: '1:00 PM EST', opp: 'Pittsburgh Steelers', logo: steelers, loc: '@' + 'LINCOLN FINANCIAL FIELD'},
    {week: 'Week 9', date: '11/03', time: '8:15 PM EST', opp: 'Houston Texans', logo: texans, loc: '@' + 'NRG STADIUM'},
    {week: 'Week 10', date: '11/14', time: '8:15 PM EST', opp: 'Washington Commanders', logo: commanders, loc: '@' + 'LINCOLN FINANCIAL FIELD'},
    {week: 'Week 11', date: '11/20', time: '1:00 PM EST', opp: 'Indianapolis Colts', logo: colts, loc: '@' + 'LUCAS OIL STADIUM'},
    {week: 'Week 12', date: '11/27', time: '8:20 PM EST', opp: 'Green Bay Packers', logo: packers, loc: '@' + 'LINCOLN FINANCIAL FIELD'},
    {week: 'Week 13', date: '12/04', time: '1:00 PM EST', opp: 'Tennessee Titans', logo: titans, loc: '@' + 'LINCOLN FINANCIAL FIELD'},
    {week: 'Week 14', date: '12/11', time: '1:00 PM EST', opp: 'New York Giants', logo: giants, loc: '@' + 'METLIFE STADIUM'},
    {week: 'Week 15', date: '12/18', time: '1:00 PM EST', opp: 'Chicago Bears', logo: bears, loc: '@' + 'SOLDIER FIELD'},
    {week: 'Week 16', date: '12/24', time: '4:25 PM EST', opp: 'Dallas Cowboys', logo: cowboys, loc: '@' + 'AT&T STADIUM'},
    {week: 'Week 17', date: '01/01', time: '1:00 PM EST', opp: 'New Orleans Saints', logo: saints, loc: '@' + 'LINCOLN FINANCIAL FIELD'},
    {week: 'Week 18', date: '01/08', time: '4:25 PM EST', opp: 'New York Giants', logo: giants, loc: '@' + 'LINCOLN FINANCIAL FIELD'},
]
function Schedule() {

const [games, setGames] = useState(schedule);
  return (
    <div>
         <div className='title'>
            <div className='titleHeader'>
            <h1>2022-23 Schedule</h1>
            </div>
        </div>
    {games.map(game => (
        <div className='schedule'>
        <div className='gameDate'>
            <h1>{game.week}</h1>
            <h3>{game.date}</h3>
            <h3>{game.time}</h3>
        </div>
        <div className='gameInfo'>
            <img src={game.logo}/>
            <h1>{game.opp}</h1>
        </div>
        <div className='location'>
            <h1>{game.loc}</h1>
        </div>
        </div>
    ))}
    
    </div>
  )
}




export default Schedule