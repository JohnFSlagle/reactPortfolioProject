import './ThreeSteps.css';

export default function ThreeSteps() {
    return (     
        <div>
            <h1 className='ThreeStepsHeading'>Three Steps to Your Next Board Game!</h1>
        <div className='ThreeStepsContainer'>
    <div className="TS1">
        <img style ={{width: '50%'}} src="/images/NumberOne.jpg" alt='NumberOne'></img>
        <h1>Find Your Game</h1>
        <p className='threeStepsP'>Use our search bar or browse through our categories to locate the board game you want to play.</p>
    </div>
    <div className='TS2'>
        <img style ={{width: '45%'}} src='/images/NumberTwo.jpg' alt='NumberTwo'></img>
        <h1>Check out the summary</h1>
        <p className='threeStepsP'>Once you have found a board game that looks interesting, check out the summary to see if it fits your style of gaming. </p>
    </div>
    <div className='TS3'>
        <img style ={{width: '70%'}} src='/images/NumberThree.jpg' alt='NumberThree'></img>
        <h1>Read the review</h1>
        <p className='threeStepsP'>Provided are outside reviews so you have another opinion. Board games can be expensive so the more information before a purchase the better.</p>
    </div>
    </div> 
    </div>
    )
}

