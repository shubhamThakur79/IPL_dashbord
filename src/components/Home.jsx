import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MatchResult from "./MatchResult"; // Ensure the correct import path

function Home() {
  const [matcheData, setMetcheData] = useState([]);
 
  async function fetchIplData() {
    const url = 'https://cricbuzz-cricket.p.rapidapi.com/series/v1/7607';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const filterData = result.matchDetails.filter((data) => data["matchDetailsMap"]);
      setMetcheData(filterData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchIplData();
    // const filterData = data.matchDetails.filter((data) => data["matchDetailsMap"]);
    // setMetcheData(filterData);
  }, []);

  return (
    <div className="bg-background text-foreground  rounded-lg shadow-lg ">
      <h2 className="text-xl font-bold my-4 mx-3">Match Results</h2>
      <div className="grid  grid-cols-1 md:grid-cols-2 ">
        {matcheData.map((matches, i) => {
          return matches.matchDetailsMap.match.map((singleMatch, j) => {
            // const team1Score = singleMatch.matchScore?.team1Score?.inngs1 || {};
            // const team2Score = singleMatch.matchScore?.team2Score?.inngs1 || {};
            // console.log("team1 score" + team1Score)

            return (
              <Link key={`${i}-${j}`} to={`/matchdetails/${singleMatch.matchInfo.matchId}`} className="w-full border-3 border-black">
                <MatchResult
                  matchInfo={{
                    matchFormat: singleMatch.matchInfo.matchFormat,
                    matchDesc: singleMatch.matchInfo.matchDesc,
                    matchDate: singleMatch.matchInfo.matchDate,
                    team1: singleMatch.matchInfo.team1,
                    team1Img: singleMatch?.matchInfo?.team?.imageId,
                    team1Score: singleMatch.matchScore?.team1Score?.inngs1 || {},
                    team2: singleMatch.matchInfo.team2,
                    team2Img: singleMatch?.matchInfo?.team2?.imageId,
                    team2Score: singleMatch.matchScore?.team2Score?.inngs1 || {},
                    status: singleMatch.matchInfo.status,
                    matchKey: matches.matchDetailsMap.key,
                  }}

                />
              </Link>
            );
          });
        })}
      </div>
    </div>
  );
}

export default Home;
