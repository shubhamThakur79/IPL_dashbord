import React, { useEffect, useState } from 'react';

const News = () => {
    const [news, setNews] = useState([]);

    async function fetchNews() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=7533629c950948c083e7855e35dcb7a7";
        try {
            let res = await fetch(url);
            let data = await res.json();
            console.log('Fetched data:', data);
            setNews(data?.articles || []);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }

    useEffect(() => {
        fetchNews();
    }, []);

    const formatDate = (dateString) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <div className='pb-10'>
            {news.length > 0 ? news.map((newsData, i) => (
                <div className='md:px-8 mx-2 my-3 md:my-3' key={i}>
                    <a className='flex mt-4 flex-col md:flex-row border border-white/20 items-center justify-center rounded-xl overflow-hidden' target='_blank' rel='noopener noreferrer' href={newsData?.url}>
                        <div>
                            <img
                                className='max-w-[100%] md:hidden block h-[60%] rounded-xl'
                                src={newsData.urlToImage || "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"}
                                alt={newsData.title}
                            />
                        </div>
                        <div>
                            <h1 className='text-[#63c6f8] md:p-6 px-1 py-2 text-lg line-clamp-2 hover:underline'>{newsData?.title}</h1>
                            <p className='text-gray-300/80 md:mt-[-30px] md:mb-[25px] md:pt-3 md:ml-6 px-1 line-clamp-1 py-1'>Published at: {formatDate(newsData?.publishedAt)}</p>
                        </div>
                        <div>
                            <img
                                className='hidden md:block md:max-w-[270px] md:max-h-28 rounded-xl'
                                src={newsData.urlToImage || "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"}
                                alt={newsData.title}
                            />
                        </div>
                    </a>
                </div>
            )) : <h1>News loading...</h1>}
            <h1 className='text-center text-xl text-gray-400 font-mono'>Have a great day!</h1>
        </div>
    );
}

export default News;
