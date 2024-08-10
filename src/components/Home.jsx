import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MatchResult from "./MatchResult"; // Ensure the correct import path

function Home() {
  const [matcheData, setMetcheData] = useState([]);
  const [error, setError] = useState(null);

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
      const filterData = result?.matchDetails?.filter((data) => data?.matchDetailsMap);
      setMetcheData(filterData || []);
    } catch (error) {
      console.error('Error fetching IPL data:', error);
      setError('Failed to load match data. Please try again later.');
    }
  }

  useEffect(() => {
    fetchIplData();
  }, []);

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="bg-background text-foreground rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold my-4">Match Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {matcheData.length > 0 ? (
          matcheData.map((matches, i) =>
            matches?.matchDetailsMap?.match?.map((singleMatch, j) => (
              <Link
                key={`${i}-${j}`}
                to={`/matchdetails/${singleMatch.matchInfo.matchId}`}
                className="w-full border-3 border-black rounded-lg overflow-hidden"
              >
                <MatchResult
                  matchInfo={{
                    matchFormat: singleMatch.matchInfo.matchFormat,
                    matchDesc: singleMatch.matchInfo.matchDesc,
                    matchDate: singleMatch.matchInfo.matchDate,
                    team1: singleMatch.matchInfo.team1,
                    team1Img: `https://res.cloudinary.com/digkgdovw/image/upload/v1715267905/iplTeamLogo/${singleMatch?.matchInfo?.team?.imageId}`, // Adjust the URL as necessary
                    team1Score: singleMatch.matchScore?.team1Score?.inngs1 || {},
                    team2: singleMatch.matchInfo.team2,
                    team2Img: `https://res.cloudinary.com/digkgdovw/image/upload/v1715267905/iplTeamLogo/${singleMatch?.matchInfo?.team2?.imageId}`, // Adjust the URL as necessary
                    team2Score: singleMatch.matchScore?.team2Score?.inngs1 || {},
                    status: singleMatch.matchInfo.status,
                    matchKey: matches.matchDetailsMap.key,
                  }}
                />
              </Link>
            ))
          )
        ) : (
          <p className="text-center">No match data available.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
