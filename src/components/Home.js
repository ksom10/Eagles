import React from 'react'
import './Home.css'
import harris from '../images/harris.jpg'
import ad from '../images/ad.jpg'
import adtwo from '../images/adtwo.jpg'
function Home() {
  return (
    <div className='home'>
        <div className='homeCont'>
            <div className='homeContent'>
            <h1>Eagles reportedly re-sign their former starting safety </h1>
            <h3>A logical reunion</h3>
            <h4>By Brandon Lee Gowton | Updated Dec 13, 2022, 9:08am EST</h4>
            <img src={harris}/>
            <p>UPDATE: The Philadelphia Eagles are indeed re-signing Anthony Harris, 
            according to NFL insider Adam Schefter. Harris and new punter Brett Kern are 
            specifically being signed to the Eagles' practice squad, according to Jeff McLane.</p>
            <div className='storyCont'>
                <p>The Philadelphia Eagles hosted Anthony Harris — their former starting safety — 
                    on a free agent visit on Monday, according to a report from NFL insider Mike Garafolo.</p>
                <p>Harris was waived by the Denver Broncos last week. Between spending time on the practice squad and the roster, Harris logged 43 special 
                    teams snaps over three games played. He did not see any defensive playing time.</p>
                <p>The Eagles seemingly have interest in bringing Harris back following injuries to both CJGJ and Reed Blankenship. 
                    CJGJ will miss at least two more games while on injured reserve due to a lacerated kidney. 
                    Blankenship reportedly avoided an injury that will necessitate a trip to IR but he might miss a game or two.</p>
                <p>When it comes to healthy options, the Eagles are down to just Marcus Epps and
                 K'Von Wallace as full-time safeties. Epps is a quality starter but Wallace has been a liability more often than not when he's 
                 had to play. It could be preferable to insert Harris ahead of Wallace. Or at least have them split playing time.</p>
                 <p>We'll soon see if the Eagles officially add Harris to the mix. A reunion seems too logical not to happen.</p>
                 </div>
            </div>
            <div className='addContent'>
                <div className='ad'>
                    <img src={ad}/>
                </div>
                <div className='ad'>
                    <img src={adtwo}/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Home