import React from 'react';

const cardClass = "bg-card p-4 rounded-lg";
const flexClass = "flex justify-between";
const buttonClass = "bg-primary text-primary-foreground hover:bg-primary/80  p-2 rounded";

const MatchResult = ({ matchInfo }) => {
    return (
        <div className={cardClass + " hover:" + buttonClass + " m-0 border border-white/10 rounded"}>
            <div className={flexClass + " items-center"}>
                <span className="font-semibold">{matchInfo.matchFormat} {matchInfo.matchDesc}</span>
                <span>{matchInfo.matchKey}</span>
                {/* <span className="text-muted">{matchInfo.matchDate}</span> */}
            </div>
            <div className={flexClass + " mt-2"}>
                <span className="flex items-center">
                    <img className='w-6 h-6 mr-2' src={`https://res.cloudinary.com/digkgdovw/image/upload/v1715267905/iplTeamLogo/${matchInfo.team1Img - 1}`} alt={`${matchInfo.team1.teamSName} logo`} />
                    {matchInfo.team1.teamSName}
                </span>
                <span>{matchInfo.team1Score.runs}/{matchInfo.team1Score.wickets} ({matchInfo.team1Score.overs})</span>
            </div>
            <div className={flexClass + " mt-2"}>
                <span className="flex items-center">
                    <img className='w-6 h-6 mr-2' src={`https://res.cloudinary.com/digkgdovw/image/upload/v1715267905/iplTeamLogo/${matchInfo.team2Img}`} alt={`${matchInfo.team2.teamSName} logo`} />
                    {matchInfo.team2.teamSName}
                </span>
                <span>{matchInfo.team2Score.runs}/{matchInfo.team2Score.wickets} ({matchInfo.team2Score.overs})</span>
            </div>
            <div className="mt-2 font-semibold">{matchInfo.status}</div>
            {/* <button className={buttonClass + " bg-black p-5"}>Watch Highlights</button> */}
        </div>
    );
};

export default MatchResult;
