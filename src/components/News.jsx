import React, { useEffect, useState } from 'react'

const News = () => {
    const [news, setNews] = useState([])
    let data = [
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "The Associated Press",
            "title": "Election 2024 live updates: Harris picks Minnesota Gov. Tim Walz as her running mate - The Associated Press",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5HNXdvTURTVGxidi1MN1djWXdEY1hmZVBpSDlNWXhYMlJBRDBFOGdZRGczcW5UN18yamxoaGc4TTVnVTNLNzM5dWViRUdWenY0Q19kTGRmeHlWRWs4aFBrU3dyZU9PbzRRczc0OGJB?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-08-06T14:24:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "MarketWatch",
            "title": "Yen carry trade unwind is only about halfway finished, JPMorgan warns - MarketWatch",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQdG1oNzB3VUxHT19ORHVocUo1VEZJR2JBc2V0YTZGVDhobnFrdC1aenhMTGNvRS12QTBuOEpzOG94TVRVTkh5aWF4YkFtMnBPcGJvU1ZUYkp6amRUbmU3SXlFZUFxYkZQS1JOYjdWS292SnFBQnF3R1o1c0lTeVB5Nld1UVpKczE2dllYTTgzX05kdkhJeFdITnhHcEtTbDBrNmhNZDF0aWVwTDZCUTZoZ9IBtgFBVV95cUxOcERnVXAybldRbDVISGJBNU15TFhyOW5SaXhEWXFRMWpEV0p3b3o4OWdKUFB5b0lxNGdGWmJMYV9uOFhLb0g5ZGhFR0JuUGpjWjZVcHJBdHlsaDJEbVBIYmpDeEJRN3NYb3hWdUd4V3FIOEh3U3lXQ0loMTVKSnFjYlE3bGt3LWFLdHo3OVJwbHlGNE9lVi1pRnVJNUUtMjBGZUpob1I4b2IxelAzMzc3OVEyMG9ldw?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-08-06T13:11:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "The New York Times",
            "title": "49ers have discussed potential Brandon Aiyuk trade with multiple teams: Source - The Athletic - The New York Times",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxQSFY4MHg4ZmM1ZEhXTzk4U21qdzA4T0ZQOFdrd1NndE5DMDBTczcyNHV5RENRQkdnd1FFVmdCZmVfalowZHhVTUJBTFh6UFU4U3hnTHZjeWloZXVMUm5tRGV1Wlhzc19weFhsSTJwMVlaVFdad19icDNCSGJsTmV6MC04N2VJQ3YtaHFWcA?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-08-06T13:08:05Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "9to5Google",
            "title": "Google Assistant has a future on Nest speakers, displays with coming Gemini updates - 9to5Google",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBKaWhwc3dGd3FsbmF6SXVFYmhMb0xrb01KSktUbzFKODBYaWk1N19kMktzWmpzbjlTX1lPNXVfcGVITmZrdXBNWGY0STVXejIzR3pPZnF2LW50dmE1bVFLTzh1dlRYcld2SUJveHJHdTJFcFctY0tuZXdXRkNka3M?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-08-06T13:01:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "The Verge",
            "title": "Nest renewed: Google launches a complete redesign of the iconic smart thermostat - The Verge",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNclp5S25zVHFUMER2ZWNNM2FvS293Z2dTbzktck9WOEJud0ZkY2dPZ0s1bjIzRHZTQmVfSE1hUy1OZjFQU01lVV9wTFAzZmluZXRleFBYZ05KOHJLV1dYZ2Z0eGt4RkRNd1ZDVUJ0elVmQ1ZLZWJnV2FMNTNYeGJDOTgzckIycmtPSzd0MUVpLUFwd1E1cmtPYkR6ekRHNVVRRmdfTk5fV2swcDFGY09R?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-08-06T13:00:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "ABC News",
            "title": "Fast-moving San Bernardino wildfire torches hillside community, forcing evacuations - ABC News",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxObW5GSzZXZDI2ZXpoSkM5LUNYdThCT0dLYXF5QlJLdlBoMy03VzVzODlMNEdJTmtjTHQ0bkphZWNUc3k0c1hVYzd3ZUpmemhtSm1SbXJWSWVEZW01eHUzZzgxOHNxbkhfREphRm0yVmhXeVhvelBRMEdUbU5ZYlVQOUZPbjFOLUxXRE1wRzZfWHNCMVZGNTI3MmVWQkZVeENDdUo0S3VDZlhPcHhC0gGyAUFVX3lxTE85UXRjZHd1b1NmdEF6OVBLdnhWdFlfWWJ2cm02elA1am9Lb1pTZjJGeEJOZFVSanZIVjNmWm5XeVJldHBSMUlFRkY2aDFpSGtOSFhDNG9wYXdCcXRwNXZCdWN5Z2poNzVhM2ZJb29TOUhQNll6aHAyLUJEUEMzWGFkRFV6TU1zY3BzY2xKMzFDYlQ2MWRuMHBuRUhvWnhfQlRfM2VvdWhwZ3JJRWYwWTBMRFE?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-08-06T12:51:48Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "BBC.com",
            "title": "Government creates new prison places for rioters - BBC.com",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5sTk5RVmNIakRod1Q2QUtrY3ltQVg5WXpIc2lLTVpuR1JhUC1jVGNPX09FSG5oTldOUHAyY3M0ajFySEFFN0EycEFuVDQzeGZsVHY2aGtjX2RWZ9IBX0FVX3lxTE5mNlpzblR0enFvRWM2WUFwel9qdnBfdkQxWUpaaXBxd2R0blBES0dSbl9SeGNrbDB6b2hDUDdmU21OQ2RVQmdjNERGbXE5bm1zdXhnY25jcTZiMGltVmJj?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-08-06T12:49:15Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "The Wall Street Journal",
            "title": "Stock Market Today: Japan's Nikkei Jumps 10%; Dow, S&P 500 Futures Rise After Global Selloff — Live Updates - The Wall Street Journal",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOaUdzVEc0VUxhSTJPZ0VxYlY1NHE1Y3ZtblpzaXBBdG1Oa1IwQU5NR1BST3B3VkM1U2QyYjJJMTA4TVEtWWZsaFpCVVRSa1pkN3hsNkVZLTBEUGlyU283ejZmQTAyMnRRck1nMXRPOWs2R01rNm9UbEhRYTNZejY2UVQtRE45UXhEZ29rSWhzUTl1ZG80b3RCQXFn?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-08-06T12:24:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Cosmopolitan",
            "title": "Jennifer Lopez Is Reportedly \"Furious\" at Ben Affleck: \"He Humiliated Her\" - Cosmopolitan",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPOEo2RFpXQW1UdEFQTFZ2RXJpSERxbHBmLVJMLWdqM21mQ2lfTk15Q2tKMzNnMXFSaHZtMGFnUDRmejlxTWhZdm5tSE9OT0h0R2pRXzJzemRxUVVaQzRtU2JqZUdTaFNHMUhHc0gxOW1RTFA3ejZiZGJ1V0R2SUg0ZVdHcVlIdWtOZXdKaGxzeUZXdWFpZUJONGg2QVA?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-08-06T11:57:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "WLWT Cincinnati",
            "title": "Recreational Rollout: What to expect as recreational marijuana sales begin in Ohio - WLWT Cincinnati",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxPUHFtTS1vVVlSUjNETUo3aDR6QWdBTjR2S2p4T2pLdkJUbjcyQy05SmFpVE5YR0M3ZGdBalc0VE1JM1RvWnJpZ3lTd2dEVGxoTjdsZTFDa0FUVXVQTEhzUkdKMF9ET0hVbVRucFhHV0hZd0Myc3F0bkZKaUNYclJlUU50YndJRHl5NTd0d3lMbWRaQQ?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-08-06T11:52:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Reuters",
            "title": "Hezbollah launches drone attacks on Israel, says more to come - Reuters",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxOUU5mWlJOb2pRT2pfTVptcWpfWGg2d0p3Sm9TczFzelQ2eWRyalBhT1p4c1FwS2ZDU1ZmRWh5LWU5bTg5cWVPcVU2V2ZVeEVTck9hbGVwNmE3TlNzQnppZ2dKd25jRFk5eE9TTWx2ZGxGLV80VFFrSmx1bTJTNHROVFZsYnFqM01KRmdEVG0zVnRaNmRrQzlwUWZDTUdSUDdrbDZmTnZfbmFCVzZSVkVMQi1KcWZJZFRxQjJWMGUtMExvZw?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-08-06T11:44:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Al Jazeera English",
            "title": "Bangladesh frees Hasina rival Khaleda Zia from house arrest - Al Jazeera English",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPTDNRdmZJaTJ2ajJYLTdVVC1aRlJkTTZMNU9QWmh5aU9zSG41RmF1M081cmdFY1gzM3FoS0FmOG1TLWR0UU9yNmxrZTR4VHJEdU1fVm9IamV4NHc2X2piOXlqckJuZTlaZHdXZTdQaldORGhQUEtab0xCX2x1Q3dheGVGSmFEaS0ySU9hcEZLM1hhVHByRVJMUWVlZHdmTUJ60gGmAUFVX3lxTE14dmRYRDE3Y0JLU0FwNmc4bnBPMUk1UmpBOVhyUTVjdHBpcEdVd0UwN0ZnX1dkLURWM0pwemo3WjNjTkIxWm54bnRXSXhRLTlGeG9LeFp4X3kzRXl2T3VHSUdaNkExbXdZVlZpcVQ4TGVUMHlWN08wd01rQVE3NjBlYy1uUHVKZDRtVGgtZ2prbGlwclNYVDczaEdoV0dReWJLcmhFM3c?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-08-06T11:27:47Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "9to5Mac",
            "title": "Apple Intelligence prompts found in the Mac beta tell Smart Reply not to hallucinate - 9to5Mac",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiakFVX3lxTE1ySURLSS1VZHg0TTNjS0d3VE1XWHZUczNFUEYzQUxCQk1wbnc4N3BLWkFfa2JqYVdiRXY0TnVCWHpJTXB6R1lObWZvNFg3bk92X2MtQWJpSWwydXNkbTY4Nl9wR0RMMzl3WlE?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-08-06T11:23:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "CNN",
            "title": "Several US personnel injured in rocket attack on Iraq base, official says - CNN",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNbFFYME1QMHJ0U2hKa25ybXl2V0plUXNmRFlVYzZSeVBTS3VHeHhuWmQ0VVM0NG92TndjXzlybE4tWUk2SkVtcmRnLW1ET2MxajBnUjR6V1hwampGWk9LYUpwa29xWENrNTZCYThXY2piOVFkcEoxak9Zd3ZxZkhER1c4cU5sLWFXaWNGM0RkVHNXbmvSAYoBQVVfeXFMTWxsdDB4SlNwN2RrcDFBSHJDakx6UkFaMTlTc3o3VzN4enRLSG1ZWmpnR0RNOWhKeTZ6ZUtFeGxZOGlFM05xck5qcUVVaDhhTFJFajJ5NG1WSTl0eHRtUG9RY3dtaFFtMFZteXUwNHJPcV9BbTZUOTVPWllyMWlLWlZGalpZT1IyLVdR?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-08-06T11:09:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Star Tribune",
            "title": "How to watch Minnesota’s latest celestial show: the Perseid meteor shower - Star Tribune",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQU2VHN0I4MThoUGVMdHV3d3N1dG9BQ1BzSi04elpEdVo2RGxJbGdJTjJUbGZDeXFsNWRKRHNmeUtwa25NSDNORVEwRjBiRkl2ZGd5bzdick03Qml5RnJtaVhrYXFRSEpUX0JreEhzY3NzMG1Ic0hTQ0ludUxKUXVMaHdidFBaRkJt?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-08-06T11:07:53Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "CBS News",
            "title": "Slow moving Tropical Storm Debby could bring \"catastrophic flooding\" to parts of Georgia and the Carolinas, forecasters say - CBS News",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPdGwtcno5bmJSZW9lbWxFem05cV81cXpMV2I3aUtLd2JOSTA0d3l5V3FlLVc5Z3FieGVJV0FWaUVOYmV6TFRGOWIyalpSTWJvSUo0bVh4UGFiSmd4Sl9qWHVFT1NGd2d2MzZBNEVfR24tQno1UmVodjY3TUtBM3drS2pGU1Iwc2hSNk9ldjlOX1Z6X1JMczhjSUlCeml3d9IBowFBVV95cUxPSlZ2NVFuUmgwcE5XVWpUVWFKQmU1TmNmWjhvTXRjc2N1X0twMGZrbzhUb2RxN1AtRjlzdnBDaV9CVzlZNVhHeDkzY29uLTV6bU51cmcwOUNGS0FsSnJsekwzSWQzR1l3MmdjMXN3d2FrYTVqWFpQZl9maGNmc2twcHhwbWpDWUprNEFjaFNxZURGeWRHVWpyYUtoYnpKTW1SU05F?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-08-06T11:02:54Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "Yahoo Sports",
            "title": "Team USA vs. Brazil: How to watch the USA Men's Basketball Quarterfinal game at the 2024 Olympics today - Yahoo Sports",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxOQkFLVFVFbzM4NDV6ZEhuUURDUjFpZGFjS0VZdDFuN2ZYajFVVG1KNWxlekVBeUZKdk1MVEpDWnloSGY4bC1aZUJVckQ4LUhzVWQzcDhiUHR0ajBfZFM0RVA1Vkt0bTFRVERYNFVwSm1JbVBUMVN5MC1xWXFQc3RYc25jSTRBNUJyUC1OeG1MUnhPbVk2ZVhFVmc5MGo0cE9OSm9BQlYxOFFrV1VXc05xTmZGbzB1NGkwWlJNSTU1cFpseHFpNjRSUkh4Z1BIUFhLRmtEOC1OVQ?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-08-06T10:55:59Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "The Associated Press",
            "title": "Bloomberg gives $600 million to four Black medical schools’ endowments - The Associated Press",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPVlZIMlhlNk9Ic3g2YmczbEZEVzRtYU8zZk85SkRrQ01McE0ySWhBaGNnSjZGUXloMXRWcWlaOHMyemRyWXZCSDRocGxwQW1PeDV4ZWxPbW5ieVBTYVpqOEh3UEdUSVBfTW8zbXFMTlFDdHNmOUN6N0tUZ1QwWFZOYTJ5VnQ5YXNsbU0tN1hyQ1VNQlR2M05ENkt2eTdEOFZObVJ1dEIza0VJUXlPTWtpcVlpcnZTSk9Oc1NzejVRcFhUaGdhcFRIXzVLZXF2Zw?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-08-06T10:00:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "POLITICO",
            "title": "Siena poll: Harris gives Democrats breathing room in New York - POLITICO",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxOTll2WFM2NE91WG5QczF5WnhxTko3SnZla3lIREI2TnNlYl94ZUxocU9Fd2hHbFQxZ2xjc0M0TUl6RUd0LVNIR1E0WnctU0NPcGJlNVppQnR2cXRqTTZUNlJ1RURSOGEtNUJvZDdjTm9UcW1TRS1vN1FhODNwNmZNU1pRNGltTTQ?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-08-06T09:30:00Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "NBC Sports",
            "title": "Mondo Duplantis breaks his own WORLD RECORD for gold on Olympic stage in Paris | NBC Sports - NBC Sports",
            "description": null,
            "url": "https://news.google.com/rss/articles/CCAiC3BfZjU0ZUpPaGQ0mAEB?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-08-06T09:26:18Z",
            "content": null
        }
    ]
    async function fetchNews() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=7533629c950948c083e7855e35dcb7a7"
        let res = await fetch(url)
        let data = await res.json()
        setNews(data?.articles || [])
        // console.log(data)
    }

    useEffect(() => {
        // fetchNews()
        setNews(data)
    }, [])
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
    console.log(news)
    return (

        <div className='pb-10'>
            {news.length > 0 ? news.map((newsData, i) => {

                return <div className='md:px-8 mx-2 my-3 md:my-3  ' key={i}>
                

                    <a className='flex mt-4 flex-col md:flex-row border border-white/20 items-center justify-center rounded-xl overflow-hidden' target='_blank' href={newsData?.url}>
                    <div>
                            <img className='max-w-[100%] md:hidden block h-[60%] rounded-xl'
                                src={newsData.urlToImage || "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"}
                            />
                        </div>
                        <div>
                            <h1 className='text-[#63c6f8] md:p-6 px-1 py-2 text-lg line-clamp-2 hover:underline '>{newsData?.title}</h1>
                            <p className='text-gray-300/80 md:mt-[-30px] md:mb-[25px] md:pt-3 md:ml-6 px-1 line-clamp-1 py-1'>Published at: {formatDate(newsData?.publishedAt)}</p>
                        </div>
                        <div>
                            <img className=' hidden md:block md:max-w-[270px] md:max-h-28 rounded-xl'
                                src={newsData.urlToImage || "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"}
                            />
                        </div>
                    </a>
           
                </div>
            }) : <h1>News loading...</h1>}

<h1 className='text-center text-xl text-gray-400 font-mono'>Have a greate day!</h1>   
        </div>
    )
}

export default News