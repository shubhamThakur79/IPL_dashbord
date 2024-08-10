import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

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
            setTableData(result?.pointsTable[0]?.pointsTableInfo || []);
        } catch (error) {
            console.error('Error fetching points table data:', error);
        }
    }

    useEffect(() => {
        fetchPointsTable();
    }, []);

    if (tableData === null) {
        return <div className='w-full text-center mt-3'>Loading...</div>;
    }

    return (
        <div className='w-full lg:ml-1 mt-3'>
            <table className='w-full text-center mx-auto border-collapse'>
                <thead>
                    <tr className='h-8 text-center text-gray-300/70 border-b'>
                        <td className='w-[20%] lg:w-auto'>Team</td>
                        <td>M</td>
                        <td>W</td>
                        <td>L</td>
                        <td>NRR</td>
                        <td>Pts</td>
                        <td>Last 5</td>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((table, i) => (
                        <tr className='h-[40px] border-b border-gray-400/40 hover:bg-gray-300/20' key={i}>
                            <td className='flex items-center justify-center'>
                                <img className='w-5 h-5 mr-2 object-contain' 
                                    src={`https://res.cloudinary.com/digkgdovw/image/upload/v1715267905/iplTeamLogo/${table?.teamImageId}`} 
                                    alt={`${table?.teamFullName} logo`} />
                                {i + 1}. {table?.teamName}
                            </td>
                            <td>{table?.matchesPlayed}</td>
                            <td>{table?.matchesWon}</td>
                            <td>{table?.matchesLost}</td>
                            <td>{table?.nrr}</td>
                            <td>{table?.points}</td>
                            <td className='flex justify-center items-center'>
                                {[...table.form].reverse().map((result, j) => (
                                    <span key={j} className='ml-1'>
                                        {result === "W" ? (
                                            <FaCheck className='h-4 text-sm p-[2px] text-white rounded-full w-4 bg-green-500' />
                                        ) : (
                                            <RxCross2 className='h-4 text-sm p-[2px] text-white rounded-full w-4 bg-red-400' />
                                        )}
                                    </span>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PointsTable;
