
import React, { useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const PointsTable = () => {
    const [tableData, setTableData] = useState(null);
 
    async function fetchPointsTable() {
        const url = 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/series/7607/points-table';
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
            setTableData(result.pointsTable[0].pointsTableInfo);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchPointsTable();
        // setTableData(pointsTableData.pointsTable[0].pointsTableInfo)

    }, []);

    return (
        <div className='w-full lg:ml-1 mt-3'>

            <table className='w-full text-center mx-auto  '>
                <tr className='w-full h-8 text-center mx-auto text-gray-300/70 border-b overflow-hidden  '>
                    <td className='w-[20%]  lg:w-auto '>Team</td>
                    <td>M</td>
                    <td>W</td>
                    <td>L</td>
                    <td>NRR</td>
                    <td>Pts</td>
                    <td>Last 5</td>
                </tr>



                {tableData === null ? (
                    <h1>Loading...</h1>
                ) : (
                    tableData.map((table, i) => (
                        <tr className='h-[40px] border-b border-gray-400/40 hover:bg-gray-300/20 ' key={i}>
                            <td className='flex lg:gap-1 mr-1   lg:w-[80%] items-center justify-center'>{i + 1}
                                <img className='w-5 h-5 mr-2 object-contain' src={`https://res.cloudinary.com/digkgdovw/image/upload/v1715267905/iplTeamLogo/${table.teamImageId}`} alt={`${table.teamFullName} logo`} />
                                {table.teamName}
                                           </td>
                            <td>{table.matchesPlayed}</td>
                            <td>{table.matchesWon}</td>
                            <td>{table.matchesLost}</td>
                            <td>{table.nrr}</td>
                            <td>{table.points}</td>
                            <td className='h-full text-center flex justify-center items-center ml-[-2px'>
                                {[...table.form].reverse().map((result, j) => (
                                    <td key={j} className=''>

                                        {result === "W" ? (
                                            <FaCheck className='h-4 text-sm ml-[7px] p-[2px] text-white rounded-[50%] w-4 bg-green-500' />
                                        ) : (
                                            <RxCross2 className='bg-red-400 text-sm h-4 ml-2 p-[2px] text-white rounded-[50%] w-4' />
                                        )}
                                    </td>
                                ))}
                            </td>
                        </tr>
                    ))
                )}
            </table>
        </div>
    );
};

export default PointsTable;

