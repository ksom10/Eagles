import React from 'react'
import './Eagles.css'
import blankenship from '../images/players/blankenship.jpg';
import book from '../images/players/book.jpg';
import bradberry from '../images/players/bradberry.jpg';
import bradley from '../images/players/bradley.jpg';
import brown from '../images/players/brown.jpg';
import calcaterra from '../images/players/calcaterra.jpg';
import covey from '../images/players/covey.jpg';
import cox from '../images/players/cox.jpg';
import davis from '../images/players/davis.jpg';
import dean from '../images/players/dean.jpg';
import dickerson from '../images/players/dickerson.jpg';
import dillard from '../images/players/dillard.jpg';
import driscoll from '../images/players/driscoll.jpg';
import edwards from '../images/players/edwards.jpg';
import elliott from '../images/players/elliot.jpg';
import elliss from '../images/players/elliss.jpg';
import epps from '../images/players/epps.jpg';
import gainwell from '../images/players/gainwell.jpg';
import goedert from '../images/players/goedert.jpg';
import graham from '../images/players/graham.jpg';
import hargrave from '../images/players/hargrave.jpg';
import hurts from '../images/players/hurts.jpg';
import jobe from '../images/players/jobe.jpg';
import ljohnson from '../images/players/ljohnson.jpg';
import kjohnson from '../images/players/kjohnson.jpg';
import pjohnson from '../images/players/pjohnson.jpg';
import joseph from '../images/players/joseph.jpg';
import jurgens from '../images/players/jurgens.jpg';
import kelce from '../images/players/kelce.jpg';
import lovato from '../images/players/lovato.jpg';
import maddox from '../images/players/maddox.jpg';
import mailata from '../images/players/mailata.jpg';
import mcphearson from '../images/players/mcphearson.jpg';
import minshew from '../images/players/minshew.jpg';
import opeta from '../images/players/opeta.jpg';
import pascal from '../images/players/pascal.jpg';
import reddick from '../images/players/reddick.jpg';
import robinson from '../images/players/robinson.jpg';
import sanders from '../images/players/sanders.jpg';
import bscott from '../images/players/bscott.jpg';
import jscott from '../images/players/jscott.jpg';
import sermon from '../images/players/sermon.jpg';
import seumalo from '../images/players/seumalo.jpg';
import sills from '../images/players/sills.jpg';
import slay from '../images/players/slay.jpg';
import smith from '../images/players/smith.jpg';
import stoll from '../images/players/stoll.jpg';
import suh from '../images/players/suh.jpg';
import sweat from '../images/players/sweat.jpg';
import wallace from '../images/players/wallace.jpg';
import watkins from '../images/players/watkins.jpg';
import white from '../images/players/white.jpg';
import williams from '../images/players/williams.jpg';

import { useState } from 'react';

let roster = [
    {image: blankenship, name: 'Reed Blakenship', number: 32,  position: 'S', height: '6-1', weight: 203,  age: 23, exp: 'R', college: 'Middle Tennessee State'},
    {image: book, name: 'Ian Book', number: 19,  position: 'QB', height: '6-0', weight: 206,  age: 24, exp: '2', college: 'Notre Dame'},
    {image: bradberry, name: 'James Bradberry', number: 24,  position: 'CB', height: '6-1', weight: 210,  age: 29, exp: '7', college: 'Samford'},
    {image: bradley, name: 'Shaun Bradley', number: 54,  position: 'LB', height: '6-1', weight: 240,  age: 25, exp: '3', college: 'Temple'},
    {image: brown, name: 'A.J. Brown', number: 11,  position: 'WR', height: '6-1', weight: 226,  age: 25, exp: '4', college: 'Mississippi'},
    {image: calcaterra, name: 'Grant Calcaterra', number: 81,  position: 'TE', height: '6-4', weight: 240,  age: 24, exp: 'R', college: 'SMU'},
    {image: covey, name: 'Britain Covey', number: 18,  position: 'WR', height: '5-8', weight: 173,  age: 25, exp: 'R', college: 'Utah'},
    {image: cox,name: 'Fletcher Cox', number: 91,  position: 'DT', height: '6-4', weight: 310,  age: 32, exp: '11', college: 'Mississippi State'},
    {image: davis, name: 'Jordan Davis', number: 90,  position: 'DT', height: '6-6', weight: 336,  age: 22, exp: 'R', college: 'Georgia'},
    {image: dean, name: 'Nakobe Dean', number: 17,  position: 'LB', height: '5-11', weight: 231,  age: 22, exp: 'R', college: 'Georgia'},
    {image: dickerson, name: 'Landon Dickerson', number: 69,  position: 'G', height: '6-6', weight: 332,  age: 24, exp: '2', college: 'Alabama'},
    {image: dillard, name: 'Andre Dillard', number: 77,  position: 'T', height: '6-5', weight: 315,  age: 27, exp: '4', college: 'Washington State'},
    {image: driscoll, name: 'Jack Driscoll', number: 63,  position: 'T/G', height: '6-5', weight: 312,  age: 25, exp: '3', college: 'Auburn'},
    {image: edwards, name: 'T.J. Edwards', number: 57,  position: 'LB', height: '6-1', weight: 242,  age: 26, exp: '4', college: 'Wisconsin'},
    {image: elliott, name: 'Jake Elliott', number: 4,  position: 'K', height: '5-9', weight: 167,  age: 27, exp: '6', college: 'Memphis'},
    {image: elliss, name: 'Christian Elliss', number: 53,  position: 'LB', height: '6-3', weight: 231,  age: 24, exp: '1', college: 'Idaho'},
    {image: epps, name: 'Marcus Epps', number: 22,  position: 'S', height: '6-0', weight: 198,  age: 26, exp: '4', college: 'Wyoming'},
    {image: gainwell, name: 'Kenneth Gainwell', number: 14,  position: 'RB', height: '5-9', weight: 200,  age: 23, exp: '2', college: 'Memphis'},
    {image: goedert, name: 'Dallas Goedert', number: 88,  position: 'TE', height: '6-5', weight: 256,  age: 28, exp: '5', college: 'South Dakota State'},
    {image: graham, name: 'Brandon Graham', number: 55,  position: 'DE', height: '6-2', weight: 265,  age: 34, exp: '13', college: 'Michigan'},
    {image: hargrave, name: 'Javon Hargrave', number: 97,  position: 'DT', height: '6-2', weight: 305,  age: 29, exp: '7', college: 'South Carolina State'},
    {image: hurts, name: 'Jalen Hurts', number: 1,  position: 'QB', height: '6-1', weight: 223,  age: 24, exp: '3', college: 'Oklahoma'},
    {image: jobe, name: 'Josh Jobe', number: 28,  position: 'CB', height: '5-11', weight: 190,  age: 24, exp: 'R', college: 'Alabama'},
    {image: ljohnson, name: 'Lane Johnson', number: 65,  position: 'T', height: '6-6', weight: 325,  age: 32, exp: '10', college: 'Oklahoma'},
    {image: kjohnson, name: 'Kyron Johnson', number: 58,  position: 'LB', height: '6-0', weight: 235,  age: 24, exp: 'R', college: 'Kansas'},
    {image: pjohnson, name: 'Patrick Johnson', number: 48,  position: 'LB', height: '6-2', weight: 248,  age: 24, exp: '2', college: 'Tulane'},
    {image: joseph, name: 'Linval Joseph', number: 72,  position: 'DT', height: '6-4', weight: 328,  age: 34, exp: '13', college: 'East Carolina'},
    {image: jurgens, name: 'Cam Jurgens', number: 51,  position: 'C/G', height: '6-3', weight: 303,  age: 23, exp: 'R', college: 'Nebraska'},
    {image: kelce, name: 'Jason Kelce', number: 62,  position: 'C', height: '6-3', weight: 295,  age: 35, exp: '12', college: 'Cincinnati'},
    {image: lovato, name: 'Rick Lovato', number: 45,  position: 'LS', height: '6-2', weight: 249,  age: 30, exp: '6', college: 'Old Dominion'},
    {image: maddox, name: 'Avante Maddox', number: 29,  position: 'CB', height: '5-9', weight: 184,  age: 26, exp: '5', college: 'Pittsburgh'},
    {image: mailata, name: 'Jordan Mailata', number: 68,  position: 'T', height: '6-8', weight: 365,  age: 25, exp: '5', college: ''},
    {image: mcphearson, name: 'Zech McPhearson', number: 27,  position: 'CB', height: '5-11', weight: 191,  age: 24, exp: '2', college: 'Texas Tech'},
    {image: minshew, name: 'Gardner Minshew', number: 10,  position: 'QB', height: '6-1', weight: 225,  age: 26, exp: '4', college: 'Washington State'},
    {image: opeta, name: 'Sua Opeta', number: 78,  position: 'G', height: '6-4', weight: 305,  age: 26, exp: '3', college: 'Weber State'},
    {image: pascal, name: 'Zach Pascal', number: 3,  position: 'WR', height: '6-2', weight: 215,  age: 28, exp: '5', college: 'Old Dominion'},
    {image: reddick, name: 'Hassan Reddick', number: 7,  position: 'LB', height: '6-1', weight: 240,  age: 28, exp: '6', college: 'Temple'},
    {image: robinson, name: 'Janarius Robinson', number: 59,  position: 'DE', height: '6-5', weight: 260,  age: 24, exp: '2', college: 'Florida State'},
    {image: sanders, name: 'Miles Sanders', number: 26,  position: 'RB', height: '5-11', weight: 211,  age: 25, exp: '4', college: 'Penn State'},
    {image: bscott, name: 'Boston Scott', number: 35,  position: 'RB', height: '5-6', weight: 203,  age: 27, exp: '4', college: 'Louisiana Tech'},
    {image: jscott, name: 'Josiah Scott', number: 33,  position: 'CB', height: '5-9', weight: 185,  age: 23, exp: '3', college: 'Michigan State'},
    {image: sermon, name: 'Trey Sermon', number: 34,  position: 'RB', height: '6-0', weight: 215,  age: 23, exp: '2', college: 'Ohio State'},
    {image: seumalo, name: 'Isaac Seumalo', number: 56,  position: 'G', height: '6-4', weight: 303,  age: 29, exp: '7', college: 'Oregon State'},
    {image: sills, name: 'Josh Sills', number: 61,  position: 'G', height: '6-6', weight: 325,  age: 24, exp: 'R', college: 'Oklahoma State'},
    {image: slay, name: 'Darius Slay', number: 2,  position: 'CB', height: '6-0', weight: 190,  age: 32, exp: '10', college: 'Mississippi State'},
    {image: smith, name: 'Devonta Smith', number: 6,  position: 'WR', height: '6-0', weight: 170,  age: 24, exp: '2', college: 'Alabama'},
    {image: stoll, name: 'Jack Stoll', number: 89,  position: 'TE', height: '6-4', weight: 247,  age: 24, exp: '2', college: 'Nebraska'},
    {image: suh, name: 'Ndamukong Suh', number: 74,  position: 'DT', height: '6-4', weight: 307,  age: 35, exp: '13', college: 'Nebraska'},
    {image: sweat, name: 'Josh Sweat', number: 94,  position: 'DE', height: '6-5', weight: 265,  age: 25, exp: '5', college: 'Florida State'},
    {image: wallace, name: 'Kvon Wallace', number: 42,  position: 'S', height: '5-11', weight: 205,  age: 25, exp: '3', college: 'Clemson'},
    {image: watkins, name: 'Quez Watkins', number: 16,  position: 'WR', height: '6-0', weight: 193,  age: 24, exp: '3', college: 'Southern Mississippi'},
    {image: white, name: 'Kyzir White', number: 43,  position: 'LB', height: '6-2', weight: 234,  age: 26, exp: '5', college: 'West Virginia'},
    {image: williams, name: 'Milton Williams', number: 93,  position: 'DT', height: '6-3', weight: 290,  age: 23, exp: '2', college: 'Louisiana Tech'},

]

function Eagles() {

const [players, setPlayers] = useState(roster);

  return (
    <div>
        <div className='title'>
            <div className='titleHeader'>
            <h1>Roster</h1>
            </div>
        </div>
        <div className='roster'>
            <div className='playerHeader'>
                <h4>Player</h4>
                <p></p>
                <p>#</p>
                <p>Position</p>
                <p>Height</p>
                <p>Weight</p>
                <p>Age</p>
                <p>Experience</p>
                <p>College</p>

            </div>
            {players.map(player => (
                <div className='player'>
                    <img className='playerImg' src={player.image}/>
                    <p>{player.name}</p>
                    <p>{player.number}</p>
                    <p>{player.position}</p>
                    <p>{player.height}</p>
                    <p>{player.weight}</p>
                    <p>{player.age}</p>
                    <p>{player.exp}</p>
                    <p>{player.college}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Eagles