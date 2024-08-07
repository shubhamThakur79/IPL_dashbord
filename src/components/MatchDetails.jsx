import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InPageNavigation from './InPageNavigation'

const MatchDetails = () => {
    let { id } = useParams()
   
    const [data, setData] = useState([])


    async function fetchMatchDetails() {
        const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}`;
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
            setData(result)
            // console.log(result);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        fetchMatchDetails()
        // setData(fixedData)
        // console.log("daatdata", data)

    }, [])
    console.log("daatdata", data)


    return (
        <div className=''>
            <h1 className='text-[21px] text-center m-5 text-white/80'>MatchDetails</h1>
            {data.length <= 0 ? <h1>Loding...</h1> :
                <InPageNavigation teams={[
                    data.matchInfo.team1.shortName,
                    data.matchInfo.team2.shortName,
                ]} >


                    {
                        data.matchInfo.team1.playerDetails.map((playerInfo, i) => {
                            return <div className='mx-5 my-2' key={i}>

                                <h1 className='text-xl text-white/90'>{playerInfo.fullName}</h1>
                                <h1 className="text-white/60">{playerInfo.role}</h1>
                            </div>
                        })
                    }
                    {
                        data.matchInfo.team2.playerDetails.map((players, i) => {
                            return <div className='mx-5 my-2' key={i}>

                                <h1 className='text-xl text-white/90'>{players.fullName}</h1>
                                <h1 className="text-white/60">{players.role}</h1>
                            </div>

                        })
                    }
                </InPageNavigation>
            }


        </div>
    )
}

export default MatchDetails

