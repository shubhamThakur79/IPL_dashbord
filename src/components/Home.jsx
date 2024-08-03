import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MatchResult from "./MatchResult"; // Ensure the correct import path

function Home() {
  const [matcheData, setMetcheData] = useState([]);
  // let data = {
  //   "matchDetails": [
  //     {
  //       "matchDetailsMap": {
  //         "key": "Fri, 22 Mar 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 89654,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "1st Match",
  //               "matchFormat": "T20",
  //               "startDate": "1711117800000",
  //               "endDate": "1711117800000",
  //               "state": "complete",
  //               "status": "Chennai Super Kings won by 6 wkts",
  //               "team1": {
  //                 "teamId": 58,
  //                 "teamName": "CHENNAI SUPER KINGS",
  //                 "teamSName": "CSK",
  //                 "imageId": 225641
  //               },
  //               "team2": {
  //                 "teamId": 59,
  //                 "teamName": "ROYAL CHALLENGERS BENGALURU",
  //                 "teamSName": "RCB",
  //                 "imageId": 225643
  //               },
  //               "venueInfo": {
  //                 "ground": "MA Chidambaram Stadium",
  //                 "city": "Chennai",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 58,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 176,
  //                   "wickets": 4,
  //                   "overs": 18.4
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 173,
  //                   "wickets": 6,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "adDetail": {
  //         "name": "native_news_index_random_1",
  //         "layout": "native_large",
  //         "position": 1
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Sat, 23 Mar 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 89661,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "2nd Match",
  //               "matchFormat": "T20",
  //               "startDate": "1711188000000",
  //               "endDate": "1711188000000",
  //               "state": "complete",
  //               "status": "Punjab Kings won by 4 wkts",
  //               "team1": {
  //                 "teamId": 65,
  //                 "teamName": "PUNJAB KINGS",
  //                 "teamSName": "PBKS",
  //                 "imageId": 225648
  //               },
  //               "team2": {
  //                 "teamId": 61,
  //                 "teamName": "DELHI CAPITALS",
  //                 "teamSName": "DC",
  //                 "imageId": 225644
  //               },
  //               "venueInfo": {
  //                 "ground": "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
  //                 "city": "Chandigarh",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 65,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 177,
  //                   "wickets": 6,
  //                   "overs": 19.2
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 174,
  //                   "wickets": 9,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           },
  //           {
  //             "matchInfo": {
  //               "matchId": 89665,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "3rd Match",
  //               "matchFormat": "T20",
  //               "startDate": "1711202400000",
  //               "endDate": "1711202400000",
  //               "state": "complete",
  //               "status": "Kolkata Knight Riders won by 4 runs",
  //               "team1": {
  //                 "teamId": 63,
  //                 "teamName": "KOLKATA KNIGHT RIDERS",
  //                 "teamSName": "KKR",
  //                 "imageId": 225646
  //               },
  //               "team2": {
  //                 "teamId": 255,
  //                 "teamName": "SUNRISERS HYDERABAD",
  //                 "teamSName": "SRH",
  //                 "imageId": 225649
  //               },
  //               "venueInfo": {
  //                 "ground": "Eden Gardens",
  //                 "city": "Kolkata",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 63,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 208,
  //                   "wickets": 7,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 204,
  //                   "wickets": 7,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Sun, 24 Mar 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 89668,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "4th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1711274400000",
  //               "endDate": "1711274400000",
  //               "state": "complete",
  //               "status": "Rajasthan Royals won by 20 runs",
  //               "team1": {
  //                 "teamId": 64,
  //                 "teamName": "RAJASTHAN ROYALS",
  //                 "teamSName": "RR",
  //                 "imageId": 225647
  //               },
  //               "team2": {
  //                 "teamId": 966,
  //                 "teamName": "LUCKNOW SUPER GIANTS",
  //                 "teamSName": "LSG",
  //                 "imageId": 389444
  //               },
  //               "venueInfo": {
  //                 "ground": "Sawai Mansingh Stadium",
  //                 "city": "Jaipur",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 64,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 193,
  //                   "wickets": 4,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 173,
  //                   "wickets": 6,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           },
  //           {
  //             "matchInfo": {
  //               "matchId": 89675,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "5th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1711288800000",
  //               "endDate": "1711288800000",
  //               "state": "complete",
  //               "status": "Gujarat Titans won by 6 runs",
  //               "team1": {
  //                 "teamId": 971,
  //                 "teamName": "GUJARAT TITANS",
  //                 "teamSName": "GT",
  //                 "imageId": 235085
  //               },
  //               "team2": {
  //                 "teamId": 62,
  //                 "teamName": "MUMBAI INDIANS",
  //                 "teamSName": "MI",
  //                 "imageId": 225645
  //               },
  //               "venueInfo": {
  //                 "ground": "Narendra Modi Stadium",
  //                 "city": "Ahmedabad",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 971,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 168,
  //                   "wickets": 6,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 162,
  //                   "wickets": 9,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Mon, 25 Mar 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 89682,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "6th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1711375200000",
  //               "endDate": "1711375200000",
  //               "state": "complete",
  //               "status": "Royal Challengers Bengaluru won by 4 wkts",
  //               "team1": {
  //                 "teamId": 59,
  //                 "teamName": "ROYAL CHALLENGERS BENGALURU",
  //                 "teamSName": "RCB",
  //                 "imageId": 225643
  //               },
  //               "team2": {
  //                 "teamId": 65,
  //                 "teamName": "PUNJAB KINGS",
  //                 "teamSName": "PBKS",
  //                 "imageId": 225648
  //               },
  //               "venueInfo": {
  //                 "ground": "M.Chinnaswamy Stadium",
  //                 "city": "Bengaluru",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 59,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 178,
  //                   "wickets": 6,
  //                   "overs": 19.2
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 176,
  //                   "wickets": 6,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "adDetail": {
  //         "name": "native_news_index_random_2",
  //         "layout": "native_large",
  //         "position": 4
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Tue, 26 Mar 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 89689,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "7th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1711461600000",
  //               "endDate": "1711461600000",
  //               "state": "complete",
  //               "status": "Chennai Super Kings won by 63 runs",
  //               "team1": {
  //                 "teamId": 58,
  //                 "teamName": "CHENNAI SUPER KINGS",
  //                 "teamSName": "CSK",
  //                 "imageId": 225641
  //               },
  //               "team2": {
  //                 "teamId": 971,
  //                 "teamName": "GUJARAT TITANS",
  //                 "teamSName": "GT",
  //                 "imageId": 235085
  //               },
  //               "venueInfo": {
  //                 "ground": "MA Chidambaram Stadium",
  //                 "city": "Chennai",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 58,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 206,
  //                   "wickets": 6,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 143,
  //                   "wickets": 8,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Wed, 27 Mar 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 89693,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "8th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1711548000000",
  //               "endDate": "1711548000000",
  //               "state": "complete",
  //               "status": "Sunrisers Hyderabad won by 31 runs",
  //               "team1": {
  //                 "teamId": 255,
  //                 "teamName": "SUNRISERS HYDERABAD",
  //                 "teamSName": "SRH",
  //                 "imageId": 225649
  //               },
  //               "team2": {
  //                 "teamId": 62,
  //                 "teamName": "MUMBAI INDIANS",
  //                 "teamSName": "MI",
  //                 "imageId": 225645
  //               },
  //               "venueInfo": {
  //                 "ground": "Rajiv Gandhi International Stadium",
  //                 "city": "Hyderabad",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 255,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 277,
  //                   "wickets": 3,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 246,
  //                   "wickets": 5,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Thu, 28 Mar 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 89700,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "9th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1711634400000",
  //               "endDate": "1711634400000",
  //               "state": "complete",
  //               "status": "Rajasthan Royals won by 12 runs",
  //               "team1": {
  //                 "teamId": 64,
  //                 "teamName": "RAJASTHAN ROYALS",
  //                 "teamSName": "RR",
  //                 "imageId": 225647
  //               },
  //               "team2": {
  //                 "teamId": 61,
  //                 "teamName": "DELHI CAPITALS",
  //                 "teamSName": "DC",
  //                 "imageId": 225644
  //               },
  //               "venueInfo": {
  //                 "ground": "Sawai Mansingh Stadium",
  //                 "city": "Jaipur",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 64,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 185,
  //                   "wickets": 5,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 173,
  //                   "wickets": 5,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Fri, 29 Mar 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 89703,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "10th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1711720800000",
  //               "endDate": "1711720800000",
  //               "state": "complete",
  //               "status": "Kolkata Knight Riders won by 7 wkts",
  //               "team1": {
  //                 "teamId": 59,
  //                 "teamName": "ROYAL CHALLENGERS BENGALURU",
  //                 "teamSName": "RCB",
  //                 "imageId": 225643
  //               },
  //               "team2": {
  //                 "teamId": 63,
  //                 "teamName": "KOLKATA KNIGHT RIDERS",
  //                 "teamSName": "KKR",
  //                 "imageId": 225646
  //               },
  //               "venueInfo": {
  //                 "ground": "M.Chinnaswamy Stadium",
  //                 "city": "Bengaluru",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 63,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 182,
  //                   "wickets": 6,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 186,
  //                   "wickets": 3,
  //                   "overs": 16.5
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Sat, 30 Mar 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 89710,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "11th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1711807200000",
  //               "endDate": "1711807200000",
  //               "state": "complete",
  //               "status": "Lucknow Super Giants won by 21 runs",
  //               "team1": {
  //                 "teamId": 966,
  //                 "teamName": "LUCKNOW SUPER GIANTS",
  //                 "teamSName": "LSG",
  //                 "imageId": 389444
  //               },
  //               "team2": {
  //                 "teamId": 65,
  //                 "teamName": "PUNJAB KINGS",
  //                 "teamSName": "PBKS",
  //                 "imageId": 225648
  //               },
  //               "venueInfo": {
  //                 "ground": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
  //                 "city": "Lucknow",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 966,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 199,
  //                   "wickets": 8,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 178,
  //                   "wickets": 5,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Sun, 31 Mar 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 89717,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "12th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1711879200000",
  //               "endDate": "1711879200000",
  //               "state": "complete",
  //               "status": "Gujarat Titans won by 7 wkts",
  //               "team1": {
  //                 "teamId": 971,
  //                 "teamName": "GUJARAT TITANS",
  //                 "teamSName": "GT",
  //                 "imageId": 235085
  //               },
  //               "team2": {
  //                 "teamId": 255,
  //                 "teamName": "SUNRISERS HYDERABAD",
  //                 "teamSName": "SRH",
  //                 "imageId": 225649
  //               },
  //               "venueInfo": {
  //                 "ground": "Narendra Modi Stadium",
  //                 "city": "Ahmedabad",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 971,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 168,
  //                   "wickets": 3,
  //                   "overs": 19.1
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 162,
  //                   "wickets": 8,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           },
  //           {
  //             "matchInfo": {
  //               "matchId": 89724,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "13th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1711893600000",
  //               "endDate": "1711893600000",
  //               "state": "complete",
  //               "status": "Delhi Capitals won by 20 runs",
  //               "team1": {
  //                 "teamId": 61,
  //                 "teamName": "DELHI CAPITALS",
  //                 "teamSName": "DC",
  //                 "imageId": 225644
  //               },
  //               "team2": {
  //                 "teamId": 58,
  //                 "teamName": "CHENNAI SUPER KINGS",
  //                 "teamSName": "CSK",
  //                 "imageId": 225641
  //               },
  //               "venueInfo": {
  //                 "ground": "Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium",
  //                 "city": "Visakhapatnam",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 61,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 191,
  //                   "wickets": 5,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 171,
  //                   "wickets": 6,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Mon, 01 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 89731,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "14th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1711980000000",
  //               "endDate": "1711980000000",
  //               "state": "complete",
  //               "status": "Rajasthan Royals won by 6 wkts",
  //               "team1": {
  //                 "teamId": 62,
  //                 "teamName": "MUMBAI INDIANS",
  //                 "teamSName": "MI",
  //                 "imageId": 225645
  //               },
  //               "team2": {
  //                 "teamId": 64,
  //                 "teamName": "RAJASTHAN ROYALS",
  //                 "teamSName": "RR",
  //                 "imageId": 225647
  //               },
  //               "venueInfo": {
  //                 "ground": "Wankhede Stadium",
  //                 "city": "Mumbai",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 64,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 125,
  //                   "wickets": 9,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 127,
  //                   "wickets": 4,
  //                   "overs": 15.3
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Tue, 02 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 89738,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "15th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1712066400000",
  //               "endDate": "1712066400000",
  //               "state": "complete",
  //               "status": "Lucknow Super Giants won by 28 runs",
  //               "team1": {
  //                 "teamId": 59,
  //                 "teamName": "ROYAL CHALLENGERS BENGALURU",
  //                 "teamSName": "RCB",
  //                 "imageId": 225643
  //               },
  //               "team2": {
  //                 "teamId": 966,
  //                 "teamName": "LUCKNOW SUPER GIANTS",
  //                 "teamSName": "LSG",
  //                 "imageId": 389444
  //               },
  //               "venueInfo": {
  //                 "ground": "M.Chinnaswamy Stadium",
  //                 "city": "Bengaluru",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 966,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 153,
  //                   "wickets": 10,
  //                   "overs": 19.4
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 181,
  //                   "wickets": 5,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Wed, 03 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 89745,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "16th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1712152800000",
  //               "endDate": "1712152800000",
  //               "state": "complete",
  //               "status": "Kolkata Knight Riders won by 106 runs",
  //               "team1": {
  //                 "teamId": 61,
  //                 "teamName": "DELHI CAPITALS",
  //                 "teamSName": "DC",
  //                 "imageId": 225644
  //               },
  //               "team2": {
  //                 "teamId": 63,
  //                 "teamName": "KOLKATA KNIGHT RIDERS",
  //                 "teamSName": "KKR",
  //                 "imageId": 225646
  //               },
  //               "venueInfo": {
  //                 "ground": "Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium",
  //                 "city": "Visakhapatnam",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 63,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 166,
  //                   "wickets": 10,
  //                   "overs": 17.2
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 272,
  //                   "wickets": 7,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Thu, 04 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 89749,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "17th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1712239200000",
  //               "endDate": "1712239200000",
  //               "state": "complete",
  //               "status": "Punjab Kings won by 3 wkts",
  //               "team1": {
  //                 "teamId": 971,
  //                 "teamName": "GUJARAT TITANS",
  //                 "teamSName": "GT",
  //                 "imageId": 235085
  //               },
  //               "team2": {
  //                 "teamId": 65,
  //                 "teamName": "PUNJAB KINGS",
  //                 "teamSName": "PBKS",
  //                 "imageId": 225648
  //               },
  //               "venueInfo": {
  //                 "ground": "Narendra Modi Stadium",
  //                 "city": "Ahmedabad",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 65,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 199,
  //                   "wickets": 4,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 200,
  //                   "wickets": 7,
  //                   "overs": 19.5
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Fri, 05 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 89752,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "18th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1712325600000",
  //               "endDate": "1712325600000",
  //               "state": "complete",
  //               "status": "Sunrisers Hyderabad won by 6 wkts",
  //               "team1": {
  //                 "teamId": 255,
  //                 "teamName": "SUNRISERS HYDERABAD",
  //                 "teamSName": "SRH",
  //                 "imageId": 225649
  //               },
  //               "team2": {
  //                 "teamId": 58,
  //                 "teamName": "CHENNAI SUPER KINGS",
  //                 "teamSName": "CSK",
  //                 "imageId": 225641
  //               },
  //               "venueInfo": {
  //                 "ground": "Rajiv Gandhi International Stadium",
  //                 "city": "Hyderabad",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 255,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 166,
  //                   "wickets": 4,
  //                   "overs": 18.1
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 165,
  //                   "wickets": 5,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Sat, 06 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 89756,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "19th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1712412000000",
  //               "endDate": "1712412000000",
  //               "state": "complete",
  //               "status": "Rajasthan Royals won by 6 wkts",
  //               "team1": {
  //                 "teamId": 64,
  //                 "teamName": "RAJASTHAN ROYALS",
  //                 "teamSName": "RR",
  //                 "imageId": 225647
  //               },
  //               "team2": {
  //                 "teamId": 59,
  //                 "teamName": "ROYAL CHALLENGERS BENGALURU",
  //                 "teamSName": "RCB",
  //                 "imageId": 225643
  //               },
  //               "venueInfo": {
  //                 "ground": "Sawai Mansingh Stadium",
  //                 "city": "Jaipur",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 64,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 189,
  //                   "wickets": 4,
  //                   "overs": 19.1
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 183,
  //                   "wickets": 3,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Sun, 07 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 89763,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "20th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1712484000000",
  //               "endDate": "1712484000000",
  //               "state": "complete",
  //               "status": "Mumbai Indians won by 29 runs",
  //               "team1": {
  //                 "teamId": 62,
  //                 "teamName": "MUMBAI INDIANS",
  //                 "teamSName": "MI",
  //                 "imageId": 225645
  //               },
  //               "team2": {
  //                 "teamId": 61,
  //                 "teamName": "DELHI CAPITALS",
  //                 "teamSName": "DC",
  //                 "imageId": 225644
  //               },
  //               "venueInfo": {
  //                 "ground": "Wankhede Stadium",
  //                 "city": "Mumbai",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 62,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 234,
  //                   "wickets": 5,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 205,
  //                   "wickets": 8,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           },
  //           {
  //             "matchInfo": {
  //               "matchId": 89770,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "21st Match",
  //               "matchFormat": "T20",
  //               "startDate": "1712498400000",
  //               "endDate": "1712498400000",
  //               "state": "complete",
  //               "status": "Lucknow Super Giants won by 33 runs",
  //               "team1": {
  //                 "teamId": 966,
  //                 "teamName": "LUCKNOW SUPER GIANTS",
  //                 "teamSName": "LSG",
  //                 "imageId": 389444
  //               },
  //               "team2": {
  //                 "teamId": 971,
  //                 "teamName": "GUJARAT TITANS",
  //                 "teamSName": "GT",
  //                 "imageId": 235085
  //               },
  //               "venueInfo": {
  //                 "ground": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
  //                 "city": "Lucknow",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 966,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 163,
  //                   "wickets": 5,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 130,
  //                   "wickets": 10,
  //                   "overs": 18.5
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Mon, 08 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91380,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "22nd Match",
  //               "matchFormat": "T20",
  //               "startDate": "1712584800000",
  //               "endDate": "1712584800000",
  //               "state": "complete",
  //               "status": "Chennai Super Kings won by 7 wkts",
  //               "team1": {
  //                 "teamId": 58,
  //                 "teamName": "CHENNAI SUPER KINGS",
  //                 "teamSName": "CSK",
  //                 "imageId": 225641
  //               },
  //               "team2": {
  //                 "teamId": 63,
  //                 "teamName": "KOLKATA KNIGHT RIDERS",
  //                 "teamSName": "KKR",
  //                 "imageId": 225646
  //               },
  //               "venueInfo": {
  //                 "ground": "MA Chidambaram Stadium",
  //                 "city": "Chennai",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 58,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 141,
  //                   "wickets": 3,
  //                   "overs": 17.4
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 137,
  //                   "wickets": 9,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Tue, 09 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91389,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "23rd Match",
  //               "matchFormat": "T20",
  //               "startDate": "1712671200000",
  //               "endDate": "1712671200000",
  //               "state": "complete",
  //               "status": "Sunrisers Hyderabad won by 2 runs",
  //               "team1": {
  //                 "teamId": 65,
  //                 "teamName": "PUNJAB KINGS",
  //                 "teamSName": "PBKS",
  //                 "imageId": 225648
  //               },
  //               "team2": {
  //                 "teamId": 255,
  //                 "teamName": "SUNRISERS HYDERABAD",
  //                 "teamSName": "SRH",
  //                 "imageId": 225649
  //               },
  //               "venueInfo": {
  //                 "ground": "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
  //                 "city": "Chandigarh",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 255,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 180,
  //                   "wickets": 6,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 182,
  //                   "wickets": 9,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Wed, 10 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91393,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "24th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1712757600000",
  //               "endDate": "1712757600000",
  //               "state": "complete",
  //               "status": "Gujarat Titans won by 3 wkts",
  //               "team1": {
  //                 "teamId": 64,
  //                 "teamName": "RAJASTHAN ROYALS",
  //                 "teamSName": "RR",
  //                 "imageId": 225647
  //               },
  //               "team2": {
  //                 "teamId": 971,
  //                 "teamName": "GUJARAT TITANS",
  //                 "teamSName": "GT",
  //                 "imageId": 235085
  //               },
  //               "venueInfo": {
  //                 "ground": "Sawai Mansingh Stadium",
  //                 "city": "Jaipur",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 971,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 196,
  //                   "wickets": 3,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 199,
  //                   "wickets": 7,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Thu, 11 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91398,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "25th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1712844000000",
  //               "endDate": "1712844000000",
  //               "state": "complete",
  //               "status": "Mumbai Indians won by 7 wkts",
  //               "team1": {
  //                 "teamId": 62,
  //                 "teamName": "MUMBAI INDIANS",
  //                 "teamSName": "MI",
  //                 "imageId": 225645
  //               },
  //               "team2": {
  //                 "teamId": 59,
  //                 "teamName": "ROYAL CHALLENGERS BENGALURU",
  //                 "teamSName": "RCB",
  //                 "imageId": 225643
  //               },
  //               "venueInfo": {
  //                 "ground": "Wankhede Stadium",
  //                 "city": "Mumbai",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 62,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 199,
  //                   "wickets": 3,
  //                   "overs": 15.3
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 196,
  //                   "wickets": 8,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Fri, 12 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91407,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "26th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1712930400000",
  //               "endDate": "1712930400000",
  //               "state": "complete",
  //               "status": "Delhi Capitals won by 6 wkts",
  //               "team1": {
  //                 "teamId": 966,
  //                 "teamName": "LUCKNOW SUPER GIANTS",
  //                 "teamSName": "LSG",
  //                 "imageId": 389444
  //               },
  //               "team2": {
  //                 "teamId": 61,
  //                 "teamName": "DELHI CAPITALS",
  //                 "teamSName": "DC",
  //                 "imageId": 225644
  //               },
  //               "venueInfo": {
  //                 "ground": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
  //                 "city": "Lucknow",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 61,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 167,
  //                   "wickets": 7,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 170,
  //                   "wickets": 4,
  //                   "overs": 18.1
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Sat, 13 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91416,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "27th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1713016800000",
  //               "endDate": "1713016800000",
  //               "state": "complete",
  //               "status": "Rajasthan Royals won by 3 wkts",
  //               "team1": {
  //                 "teamId": 65,
  //                 "teamName": "PUNJAB KINGS",
  //                 "teamSName": "PBKS",
  //                 "imageId": 225648
  //               },
  //               "team2": {
  //                 "teamId": 64,
  //                 "teamName": "RAJASTHAN ROYALS",
  //                 "teamSName": "RR",
  //                 "imageId": 225647
  //               },
  //               "venueInfo": {
  //                 "ground": "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
  //                 "city": "Chandigarh",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 64,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 147,
  //                   "wickets": 8,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 152,
  //                   "wickets": 7,
  //                   "overs": 19.5
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Sun, 14 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91420,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "28th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1713088800000",
  //               "endDate": "1713088800000",
  //               "state": "complete",
  //               "status": "Kolkata Knight Riders won by 8 wkts",
  //               "team1": {
  //                 "teamId": 63,
  //                 "teamName": "KOLKATA KNIGHT RIDERS",
  //                 "teamSName": "KKR",
  //                 "imageId": 225646
  //               },
  //               "team2": {
  //                 "teamId": 966,
  //                 "teamName": "LUCKNOW SUPER GIANTS",
  //                 "teamSName": "LSG",
  //                 "imageId": 389444
  //               },
  //               "venueInfo": {
  //                 "ground": "Eden Gardens",
  //                 "city": "Kolkata",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 63,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 162,
  //                   "wickets": 2,
  //                   "overs": 15.4
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 161,
  //                   "wickets": 7,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           },
  //           {
  //             "matchInfo": {
  //               "matchId": 91425,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "29th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1713103200000",
  //               "endDate": "1713103200000",
  //               "state": "complete",
  //               "status": "Chennai Super Kings won by 20 runs",
  //               "team1": {
  //                 "teamId": 62,
  //                 "teamName": "MUMBAI INDIANS",
  //                 "teamSName": "MI",
  //                 "imageId": 225645
  //               },
  //               "team2": {
  //                 "teamId": 58,
  //                 "teamName": "CHENNAI SUPER KINGS",
  //                 "teamSName": "CSK",
  //                 "imageId": 225641
  //               },
  //               "venueInfo": {
  //                 "ground": "Wankhede Stadium",
  //                 "city": "Mumbai",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 58,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 186,
  //                   "wickets": 6,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 206,
  //                   "wickets": 4,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Mon, 15 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91434,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "30th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1713189600000",
  //               "endDate": "1713189600000",
  //               "state": "complete",
  //               "status": "Sunrisers Hyderabad won by 25 runs",
  //               "team1": {
  //                 "teamId": 59,
  //                 "teamName": "ROYAL CHALLENGERS BENGALURU",
  //                 "teamSName": "RCB",
  //                 "imageId": 225643
  //               },
  //               "team2": {
  //                 "teamId": 255,
  //                 "teamName": "SUNRISERS HYDERABAD",
  //                 "teamSName": "SRH",
  //                 "imageId": 225649
  //               },
  //               "venueInfo": {
  //                 "ground": "M.Chinnaswamy Stadium",
  //                 "city": "Bengaluru",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 255,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 262,
  //                   "wickets": 7,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 287,
  //                   "wickets": 3,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Tue, 16 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91443,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "31st Match",
  //               "matchFormat": "T20",
  //               "startDate": "1713276000000",
  //               "endDate": "1713276000000",
  //               "state": "complete",
  //               "status": "Rajasthan Royals won by 2 wkts",
  //               "team1": {
  //                 "teamId": 63,
  //                 "teamName": "KOLKATA KNIGHT RIDERS",
  //                 "teamSName": "KKR",
  //                 "imageId": 225646
  //               },
  //               "team2": {
  //                 "teamId": 64,
  //                 "teamName": "RAJASTHAN ROYALS",
  //                 "teamSName": "RR",
  //                 "imageId": 225647
  //               },
  //               "venueInfo": {
  //                 "ground": "Eden Gardens",
  //                 "city": "Kolkata",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 64,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 223,
  //                   "wickets": 6,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 224,
  //                   "wickets": 8,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Wed, 17 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91452,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "32nd Match",
  //               "matchFormat": "T20",
  //               "startDate": "1713362400000",
  //               "endDate": "1713362400000",
  //               "state": "complete",
  //               "status": "Delhi Capitals won by 6 wkts",
  //               "team1": {
  //                 "teamId": 971,
  //                 "teamName": "GUJARAT TITANS",
  //                 "teamSName": "GT",
  //                 "imageId": 235085
  //               },
  //               "team2": {
  //                 "teamId": 61,
  //                 "teamName": "DELHI CAPITALS",
  //                 "teamSName": "DC",
  //                 "imageId": 225644
  //               },
  //               "venueInfo": {
  //                 "ground": "Narendra Modi Stadium",
  //                 "city": "Ahmedabad",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 61,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 89,
  //                   "wickets": 10,
  //                   "overs": 17.3
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 92,
  //                   "wickets": 4,
  //                   "overs": 8.5
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Thu, 18 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91461,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "33rd Match",
  //               "matchFormat": "T20",
  //               "startDate": "1713448800000",
  //               "endDate": "1713448800000",
  //               "state": "complete",
  //               "status": "Mumbai Indians won by 9 runs",
  //               "team1": {
  //                 "teamId": 65,
  //                 "teamName": "PUNJAB KINGS",
  //                 "teamSName": "PBKS",
  //                 "imageId": 225648
  //               },
  //               "team2": {
  //                 "teamId": 62,
  //                 "teamName": "MUMBAI INDIANS",
  //                 "teamSName": "MI",
  //                 "imageId": 225645
  //               },
  //               "venueInfo": {
  //                 "ground": "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
  //                 "city": "Chandigarh",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 62,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 183,
  //                   "wickets": 10,
  //                   "overs": 19.1
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 192,
  //                   "wickets": 7,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Fri, 19 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91470,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "34th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1713535200000",
  //               "endDate": "1713535200000",
  //               "state": "complete",
  //               "status": "Lucknow Super Giants won by 8 wkts",
  //               "team1": {
  //                 "teamId": 966,
  //                 "teamName": "LUCKNOW SUPER GIANTS",
  //                 "teamSName": "LSG",
  //                 "imageId": 389444
  //               },
  //               "team2": {
  //                 "teamId": 58,
  //                 "teamName": "CHENNAI SUPER KINGS",
  //                 "teamSName": "CSK",
  //                 "imageId": 225641
  //               },
  //               "venueInfo": {
  //                 "ground": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
  //                 "city": "Lucknow",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 966,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 180,
  //                   "wickets": 2,
  //                   "overs": 19
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 176,
  //                   "wickets": 6,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Sat, 20 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91474,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "35th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1713621600000",
  //               "endDate": "1713621600000",
  //               "state": "complete",
  //               "status": "Sunrisers Hyderabad won by 67 runs",
  //               "team1": {
  //                 "teamId": 61,
  //                 "teamName": "DELHI CAPITALS",
  //                 "teamSName": "DC",
  //                 "imageId": 225644
  //               },
  //               "team2": {
  //                 "teamId": 255,
  //                 "teamName": "SUNRISERS HYDERABAD",
  //                 "teamSName": "SRH",
  //                 "imageId": 225649
  //               },
  //               "venueInfo": {
  //                 "ground": "Arun Jaitley Stadium",
  //                 "city": "Delhi",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 255,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 199,
  //                   "wickets": 10,
  //                   "overs": 19.1
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 266,
  //                   "wickets": 7,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Sun, 21 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91479,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "36th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1713693600000",
  //               "endDate": "1713693600000",
  //               "state": "complete",
  //               "status": "Kolkata Knight Riders won by 1 run",
  //               "team1": {
  //                 "teamId": 63,
  //                 "teamName": "KOLKATA KNIGHT RIDERS",
  //                 "teamSName": "KKR",
  //                 "imageId": 225646
  //               },
  //               "team2": {
  //                 "teamId": 59,
  //                 "teamName": "ROYAL CHALLENGERS BENGALURU",
  //                 "teamSName": "RCB",
  //                 "imageId": 225643
  //               },
  //               "venueInfo": {
  //                 "ground": "Eden Gardens",
  //                 "city": "Kolkata",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 63,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 222,
  //                   "wickets": 6,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 221,
  //                   "wickets": 10,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           },
  //           {
  //             "matchInfo": {
  //               "matchId": 91488,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "37th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1713708000000",
  //               "endDate": "1713708000000",
  //               "state": "complete",
  //               "status": "Gujarat Titans won by 3 wkts",
  //               "team1": {
  //                 "teamId": 65,
  //                 "teamName": "PUNJAB KINGS",
  //                 "teamSName": "PBKS",
  //                 "imageId": 225648
  //               },
  //               "team2": {
  //                 "teamId": 971,
  //                 "teamName": "GUJARAT TITANS",
  //                 "teamSName": "GT",
  //                 "imageId": 235085
  //               },
  //               "venueInfo": {
  //                 "ground": "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
  //                 "city": "Chandigarh",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 971,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 142,
  //                   "wickets": 10,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 146,
  //                   "wickets": 7,
  //                   "overs": 19.1
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Mon, 22 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91497,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "38th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1713794400000",
  //               "endDate": "1713794400000",
  //               "state": "complete",
  //               "status": "Rajasthan Royals won by 9 wkts",
  //               "team1": {
  //                 "teamId": 64,
  //                 "teamName": "RAJASTHAN ROYALS",
  //                 "teamSName": "RR",
  //                 "imageId": 225647
  //               },
  //               "team2": {
  //                 "teamId": 62,
  //                 "teamName": "MUMBAI INDIANS",
  //                 "teamSName": "MI",
  //                 "imageId": 225645
  //               },
  //               "venueInfo": {
  //                 "ground": "Sawai Mansingh Stadium",
  //                 "city": "Jaipur",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 64,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 183,
  //                   "wickets": 1,
  //                   "overs": 18.4
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 179,
  //                   "wickets": 9,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Tue, 23 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91506,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "39th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1713880800000",
  //               "endDate": "1713880800000",
  //               "state": "complete",
  //               "status": "Lucknow Super Giants won by 6 wkts",
  //               "team1": {
  //                 "teamId": 58,
  //                 "teamName": "CHENNAI SUPER KINGS",
  //                 "teamSName": "CSK",
  //                 "imageId": 225641
  //               },
  //               "team2": {
  //                 "teamId": 966,
  //                 "teamName": "LUCKNOW SUPER GIANTS",
  //                 "teamSName": "LSG",
  //                 "imageId": 389444
  //               },
  //               "venueInfo": {
  //                 "ground": "MA Chidambaram Stadium",
  //                 "city": "Chennai",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 966,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 210,
  //                   "wickets": 4,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 213,
  //                   "wickets": 4,
  //                   "overs": 19.3
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Wed, 24 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91515,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "40th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1713967200000",
  //               "endDate": "1713967200000",
  //               "state": "complete",
  //               "status": "Delhi Capitals won by 4 runs",
  //               "team1": {
  //                 "teamId": 61,
  //                 "teamName": "DELHI CAPITALS",
  //                 "teamSName": "DC",
  //                 "imageId": 225644
  //               },
  //               "team2": {
  //                 "teamId": 971,
  //                 "teamName": "GUJARAT TITANS",
  //                 "teamSName": "GT",
  //                 "imageId": 235085
  //               },
  //               "venueInfo": {
  //                 "ground": "Arun Jaitley Stadium",
  //                 "city": "Delhi",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 61,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 224,
  //                   "wickets": 4,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 220,
  //                   "wickets": 8,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Thu, 25 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91524,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "41st Match",
  //               "matchFormat": "T20",
  //               "startDate": "1714053600000",
  //               "endDate": "1714053600000",
  //               "state": "complete",
  //               "status": "Royal Challengers Bengaluru won by 35 runs",
  //               "team1": {
  //                 "teamId": 255,
  //                 "teamName": "SUNRISERS HYDERABAD",
  //                 "teamSName": "SRH",
  //                 "imageId": 225649
  //               },
  //               "team2": {
  //                 "teamId": 59,
  //                 "teamName": "ROYAL CHALLENGERS BENGALURU",
  //                 "teamSName": "RCB",
  //                 "imageId": 225643
  //               },
  //               "venueInfo": {
  //                 "ground": "Rajiv Gandhi International Stadium",
  //                 "city": "Hyderabad",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 59,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 171,
  //                   "wickets": 8,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 206,
  //                   "wickets": 7,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Fri, 26 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91528,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "42nd Match",
  //               "matchFormat": "T20",
  //               "startDate": "1714140000000",
  //               "endDate": "1714140000000",
  //               "state": "complete",
  //               "status": "Punjab Kings won by 8 wkts",
  //               "team1": {
  //                 "teamId": 63,
  //                 "teamName": "KOLKATA KNIGHT RIDERS",
  //                 "teamSName": "KKR",
  //                 "imageId": 225646
  //               },
  //               "team2": {
  //                 "teamId": 65,
  //                 "teamName": "PUNJAB KINGS",
  //                 "teamSName": "PBKS",
  //                 "imageId": 225648
  //               },
  //               "venueInfo": {
  //                 "ground": "Eden Gardens",
  //                 "city": "Kolkata",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 65,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 261,
  //                   "wickets": 6,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 262,
  //                   "wickets": 2,
  //                   "overs": 18.4
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Sat, 27 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91533,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "43rd Match",
  //               "matchFormat": "T20",
  //               "startDate": "1714212000000",
  //               "endDate": "1714212000000",
  //               "state": "complete",
  //               "status": "Delhi Capitals won by 10 runs",
  //               "team1": {
  //                 "teamId": 61,
  //                 "teamName": "DELHI CAPITALS",
  //                 "teamSName": "DC",
  //                 "imageId": 225644
  //               },
  //               "team2": {
  //                 "teamId": 62,
  //                 "teamName": "MUMBAI INDIANS",
  //                 "teamSName": "MI",
  //                 "imageId": 225645
  //               },
  //               "venueInfo": {
  //                 "ground": "Arun Jaitley Stadium",
  //                 "city": "Delhi",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 61,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 257,
  //                   "wickets": 4,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 247,
  //                   "wickets": 9,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           },
  //           {
  //             "matchInfo": {
  //               "matchId": 91542,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "44th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1714226400000",
  //               "endDate": "1714226400000",
  //               "state": "complete",
  //               "status": "Rajasthan Royals won by 7 wkts",
  //               "team1": {
  //                 "teamId": 966,
  //                 "teamName": "LUCKNOW SUPER GIANTS",
  //                 "teamSName": "LSG",
  //                 "imageId": 389444
  //               },
  //               "team2": {
  //                 "teamId": 64,
  //                 "teamName": "RAJASTHAN ROYALS",
  //                 "teamSName": "RR",
  //                 "imageId": 225647
  //               },
  //               "venueInfo": {
  //                 "ground": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
  //                 "city": "Lucknow",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 64,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 196,
  //                   "wickets": 5,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 199,
  //                   "wickets": 3,
  //                   "overs": 19
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Sun, 28 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91551,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "45th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1714298400000",
  //               "endDate": "1714298400000",
  //               "state": "complete",
  //               "status": "Royal Challengers Bengaluru won by 9 wkts",
  //               "team1": {
  //                 "teamId": 971,
  //                 "teamName": "GUJARAT TITANS",
  //                 "teamSName": "GT",
  //                 "imageId": 235085
  //               },
  //               "team2": {
  //                 "teamId": 59,
  //                 "teamName": "ROYAL CHALLENGERS BENGALURU",
  //                 "teamSName": "RCB",
  //                 "imageId": 225643
  //               },
  //               "venueInfo": {
  //                 "ground": "Narendra Modi Stadium",
  //                 "city": "Ahmedabad",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 59,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 200,
  //                   "wickets": 3,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 206,
  //                   "wickets": 1,
  //                   "overs": 16
  //                 }
  //               }
  //             }
  //           },
  //           {
  //             "matchInfo": {
  //               "matchId": 91555,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "46th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1714312800000",
  //               "endDate": "1714312800000",
  //               "state": "complete",
  //               "status": "Chennai Super Kings won by 78 runs",
  //               "team1": {
  //                 "teamId": 58,
  //                 "teamName": "CHENNAI SUPER KINGS",
  //                 "teamSName": "CSK",
  //                 "imageId": 225641
  //               },
  //               "team2": {
  //                 "teamId": 255,
  //                 "teamName": "SUNRISERS HYDERABAD",
  //                 "teamSName": "SRH",
  //                 "imageId": 225649
  //               },
  //               "venueInfo": {
  //                 "ground": "MA Chidambaram Stadium",
  //                 "city": "Chennai",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 58,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 212,
  //                   "wickets": 3,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 134,
  //                   "wickets": 10,
  //                   "overs": 18.5
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Mon, 29 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91564,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "47th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1714399200000",
  //               "endDate": "1714399200000",
  //               "state": "complete",
  //               "status": "Kolkata Knight Riders won by 7 wkts",
  //               "team1": {
  //                 "teamId": 63,
  //                 "teamName": "KOLKATA KNIGHT RIDERS",
  //                 "teamSName": "KKR",
  //                 "imageId": 225646
  //               },
  //               "team2": {
  //                 "teamId": 61,
  //                 "teamName": "DELHI CAPITALS",
  //                 "teamSName": "DC",
  //                 "imageId": 225644
  //               },
  //               "venueInfo": {
  //                 "ground": "Eden Gardens",
  //                 "city": "Kolkata",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 63,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 157,
  //                   "wickets": 3,
  //                   "overs": 16.3
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 153,
  //                   "wickets": 9,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Tue, 30 Apr 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91569,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "48th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1714485600000",
  //               "endDate": "1714485600000",
  //               "state": "complete",
  //               "status": "Lucknow Super Giants won by 4 wkts",
  //               "team1": {
  //                 "teamId": 966,
  //                 "teamName": "LUCKNOW SUPER GIANTS",
  //                 "teamSName": "LSG",
  //                 "imageId": 389444
  //               },
  //               "team2": {
  //                 "teamId": 62,
  //                 "teamName": "MUMBAI INDIANS",
  //                 "teamSName": "MI",
  //                 "imageId": 225645
  //               },
  //               "venueInfo": {
  //                 "ground": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
  //                 "city": "Lucknow",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 966,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 145,
  //                   "wickets": 6,
  //                   "overs": 19.2
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 144,
  //                   "wickets": 7,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Wed, 01 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91578,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "49th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1714572000000",
  //               "endDate": "1714572000000",
  //               "state": "complete",
  //               "status": "Punjab Kings won by 7 wkts",
  //               "team1": {
  //                 "teamId": 58,
  //                 "teamName": "CHENNAI SUPER KINGS",
  //                 "teamSName": "CSK",
  //                 "imageId": 225641
  //               },
  //               "team2": {
  //                 "teamId": 65,
  //                 "teamName": "PUNJAB KINGS",
  //                 "teamSName": "PBKS",
  //                 "imageId": 225648
  //               },
  //               "venueInfo": {
  //                 "ground": "MA Chidambaram Stadium",
  //                 "city": "Chennai",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 65,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 162,
  //                   "wickets": 7,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 163,
  //                   "wickets": 3,
  //                   "overs": 17.5
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Thu, 02 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91587,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "50th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1714658400000",
  //               "endDate": "1714658400000",
  //               "state": "complete",
  //               "status": "Sunrisers Hyderabad won by 1 run",
  //               "team1": {
  //                 "teamId": 255,
  //                 "teamName": "SUNRISERS HYDERABAD",
  //                 "teamSName": "SRH",
  //                 "imageId": 225649
  //               },
  //               "team2": {
  //                 "teamId": 64,
  //                 "teamName": "RAJASTHAN ROYALS",
  //                 "teamSName": "RR",
  //                 "imageId": 225647
  //               },
  //               "venueInfo": {
  //                 "ground": "Rajiv Gandhi International Stadium",
  //                 "city": "Hyderabad",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 255,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 201,
  //                   "wickets": 3,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 200,
  //                   "wickets": 7,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Fri, 03 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91596,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "51st Match",
  //               "matchFormat": "T20",
  //               "startDate": "1714744800000",
  //               "endDate": "1714744800000",
  //               "state": "complete",
  //               "status": "Kolkata Knight Riders won by 24 runs",
  //               "team1": {
  //                 "teamId": 62,
  //                 "teamName": "MUMBAI INDIANS",
  //                 "teamSName": "MI",
  //                 "imageId": 225645
  //               },
  //               "team2": {
  //                 "teamId": 63,
  //                 "teamName": "KOLKATA KNIGHT RIDERS",
  //                 "teamSName": "KKR",
  //                 "imageId": 225646
  //               },
  //               "venueInfo": {
  //                 "ground": "Wankhede Stadium",
  //                 "city": "Mumbai",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 63,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 145,
  //                   "wickets": 10,
  //                   "overs": 18.5
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 169,
  //                   "wickets": 10,
  //                   "overs": 19.5
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Sat, 04 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91600,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "52nd Match",
  //               "matchFormat": "T20",
  //               "startDate": "1714831200000",
  //               "endDate": "1714831200000",
  //               "state": "complete",
  //               "status": "Royal Challengers Bengaluru won by 4 wkts",
  //               "team1": {
  //                 "teamId": 59,
  //                 "teamName": "ROYAL CHALLENGERS BENGALURU",
  //                 "teamSName": "RCB",
  //                 "imageId": 225643
  //               },
  //               "team2": {
  //                 "teamId": 971,
  //                 "teamName": "GUJARAT TITANS",
  //                 "teamSName": "GT",
  //                 "imageId": 235085
  //               },
  //               "venueInfo": {
  //                 "ground": "M.Chinnaswamy Stadium",
  //                 "city": "Bengaluru",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 59,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 152,
  //                   "wickets": 6,
  //                   "overs": 13.4
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 147,
  //                   "wickets": 10,
  //                   "overs": 19.3
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Sun, 05 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91609,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "53rd Match",
  //               "matchFormat": "T20",
  //               "startDate": "1714903200000",
  //               "endDate": "1714903200000",
  //               "state": "complete",
  //               "status": "Chennai Super Kings won by 28 runs",
  //               "team1": {
  //                 "teamId": 65,
  //                 "teamName": "PUNJAB KINGS",
  //                 "teamSName": "PBKS",
  //                 "imageId": 225648
  //               },
  //               "team2": {
  //                 "teamId": 58,
  //                 "teamName": "CHENNAI SUPER KINGS",
  //                 "teamSName": "CSK",
  //                 "imageId": 225641
  //               },
  //               "venueInfo": {
  //                 "ground": "Himachal Pradesh Cricket Association Stadium",
  //                 "city": "Dharamsala",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 58,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 139,
  //                   "wickets": 9,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 167,
  //                   "wickets": 9,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           },
  //           {
  //             "matchInfo": {
  //               "matchId": 91618,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "54th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1714917600000",
  //               "endDate": "1714917600000",
  //               "state": "complete",
  //               "status": "Kolkata Knight Riders won by 98 runs",
  //               "team1": {
  //                 "teamId": 966,
  //                 "teamName": "LUCKNOW SUPER GIANTS",
  //                 "teamSName": "LSG",
  //                 "imageId": 389444
  //               },
  //               "team2": {
  //                 "teamId": 63,
  //                 "teamName": "KOLKATA KNIGHT RIDERS",
  //                 "teamSName": "KKR",
  //                 "imageId": 225646
  //               },
  //               "venueInfo": {
  //                 "ground": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
  //                 "city": "Lucknow",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 63,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 137,
  //                   "wickets": 10,
  //                   "overs": 16.1
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 235,
  //                   "wickets": 6,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Mon, 06 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91623,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "55th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1715004000000",
  //               "endDate": "1715004000000",
  //               "state": "complete",
  //               "status": "Mumbai Indians won by 7 wkts",
  //               "team1": {
  //                 "teamId": 62,
  //                 "teamName": "MUMBAI INDIANS",
  //                 "teamSName": "MI",
  //                 "imageId": 225645
  //               },
  //               "team2": {
  //                 "teamId": 255,
  //                 "teamName": "SUNRISERS HYDERABAD",
  //                 "teamSName": "SRH",
  //                 "imageId": 225649
  //               },
  //               "venueInfo": {
  //                 "ground": "Wankhede Stadium",
  //                 "city": "Mumbai",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 62,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 174,
  //                   "wickets": 3,
  //                   "overs": 17.2
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 173,
  //                   "wickets": 8,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Tue, 07 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91632,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "56th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1715090400000",
  //               "endDate": "1715090400000",
  //               "state": "complete",
  //               "status": "Delhi Capitals won by 20 runs",
  //               "team1": {
  //                 "teamId": 61,
  //                 "teamName": "DELHI CAPITALS",
  //                 "teamSName": "DC",
  //                 "imageId": 225644
  //               },
  //               "team2": {
  //                 "teamId": 64,
  //                 "teamName": "RAJASTHAN ROYALS",
  //                 "teamSName": "RR",
  //                 "imageId": 225647
  //               },
  //               "venueInfo": {
  //                 "ground": "Arun Jaitley Stadium",
  //                 "city": "Delhi",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 61,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 221,
  //                   "wickets": 8,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 201,
  //                   "wickets": 8,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Wed, 08 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91641,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "57th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1715176800000",
  //               "endDate": "1715176800000",
  //               "state": "complete",
  //               "status": "Sunrisers Hyderabad won by 10 wkts",
  //               "team1": {
  //                 "teamId": 255,
  //                 "teamName": "SUNRISERS HYDERABAD",
  //                 "teamSName": "SRH",
  //                 "imageId": 225649
  //               },
  //               "team2": {
  //                 "teamId": 966,
  //                 "teamName": "LUCKNOW SUPER GIANTS",
  //                 "teamSName": "LSG",
  //                 "imageId": 389444
  //               },
  //               "venueInfo": {
  //                 "ground": "Rajiv Gandhi International Stadium",
  //                 "city": "Hyderabad",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 255,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 167,
  //                   "overs": 9.4
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 165,
  //                   "wickets": 4,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Thu, 09 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91645,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "58th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1715263200000",
  //               "endDate": "1715263200000",
  //               "state": "complete",
  //               "status": "Royal Challengers Bengaluru won by 60 runs",
  //               "team1": {
  //                 "teamId": 65,
  //                 "teamName": "PUNJAB KINGS",
  //                 "teamSName": "PBKS",
  //                 "imageId": 225648
  //               },
  //               "team2": {
  //                 "teamId": 59,
  //                 "teamName": "ROYAL CHALLENGERS BENGALURU",
  //                 "teamSName": "RCB",
  //                 "imageId": 225643
  //               },
  //               "venueInfo": {
  //                 "ground": "Himachal Pradesh Cricket Association Stadium",
  //                 "city": "Dharamsala",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 59,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 181,
  //                   "wickets": 10,
  //                   "overs": 17
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 241,
  //                   "wickets": 7,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Fri, 10 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91650,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "59th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1715349600000",
  //               "endDate": "1715349600000",
  //               "state": "complete",
  //               "status": "Gujarat Titans won by 35 runs",
  //               "team1": {
  //                 "teamId": 971,
  //                 "teamName": "GUJARAT TITANS",
  //                 "teamSName": "GT",
  //                 "imageId": 235085
  //               },
  //               "team2": {
  //                 "teamId": 58,
  //                 "teamName": "CHENNAI SUPER KINGS",
  //                 "teamSName": "CSK",
  //                 "imageId": 225641
  //               },
  //               "venueInfo": {
  //                 "ground": "Narendra Modi Stadium",
  //                 "city": "Ahmedabad",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 971,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 231,
  //                   "wickets": 3,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 196,
  //                   "wickets": 8,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Sat, 11 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91654,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "60th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1715436000000",
  //               "endDate": "1715436000000",
  //               "state": "complete",
  //               "status": "Kolkata Knight Riders won by 18 runs - 16 overs game - due to rain",
  //               "team1": {
  //                 "teamId": 63,
  //                 "teamName": "KOLKATA KNIGHT RIDERS",
  //                 "teamSName": "KKR",
  //                 "imageId": 225646
  //               },
  //               "team2": {
  //                 "teamId": 62,
  //                 "teamName": "MUMBAI INDIANS",
  //                 "teamSName": "MI",
  //                 "imageId": 225645
  //               },
  //               "venueInfo": {
  //                 "ground": "Eden Gardens",
  //                 "city": "Kolkata",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 63,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 157,
  //                   "wickets": 7,
  //                   "overs": 16
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 139,
  //                   "wickets": 8,
  //                   "overs": 16
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Sun, 12 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91663,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "61st Match",
  //               "matchFormat": "T20",
  //               "startDate": "1715508000000",
  //               "endDate": "1715508000000",
  //               "state": "complete",
  //               "status": "Chennai Super Kings won by 5 wkts",
  //               "team1": {
  //                 "teamId": 58,
  //                 "teamName": "CHENNAI SUPER KINGS",
  //                 "teamSName": "CSK",
  //                 "imageId": 225641
  //               },
  //               "team2": {
  //                 "teamId": 64,
  //                 "teamName": "RAJASTHAN ROYALS",
  //                 "teamSName": "RR",
  //                 "imageId": 225647
  //               },
  //               "venueInfo": {
  //                 "ground": "MA Chidambaram Stadium",
  //                 "city": "Chennai",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 58,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 145,
  //                   "wickets": 5,
  //                   "overs": 18.2
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 141,
  //                   "wickets": 5,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           },
  //           {
  //             "matchInfo": {
  //               "matchId": 91668,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "62nd Match",
  //               "matchFormat": "T20",
  //               "startDate": "1715522400000",
  //               "endDate": "1715522400000",
  //               "state": "complete",
  //               "status": "Royal Challengers Bengaluru won by 47 runs",
  //               "team1": {
  //                 "teamId": 59,
  //                 "teamName": "ROYAL CHALLENGERS BENGALURU",
  //                 "teamSName": "RCB",
  //                 "imageId": 225643
  //               },
  //               "team2": {
  //                 "teamId": 61,
  //                 "teamName": "DELHI CAPITALS",
  //                 "teamSName": "DC",
  //                 "imageId": 225644
  //               },
  //               "venueInfo": {
  //                 "ground": "M.Chinnaswamy Stadium",
  //                 "city": "Bengaluru",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 59,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 187,
  //                   "wickets": 9,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 140,
  //                   "wickets": 10,
  //                   "overs": 19.1
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Mon, 13 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91677,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "63rd Match",
  //               "matchFormat": "T20",
  //               "startDate": "1715608800000",
  //               "endDate": "1715608800000",
  //               "state": "complete",
  //               "status": "Match abandoned without toss",
  //               "team1": {
  //                 "teamId": 971,
  //                 "teamName": "GUJARAT TITANS",
  //                 "teamSName": "GT",
  //                 "imageId": 235085
  //               },
  //               "team2": {
  //                 "teamId": 63,
  //                 "teamName": "KOLKATA KNIGHT RIDERS",
  //                 "teamSName": "KKR",
  //                 "imageId": 225646
  //               },
  //               "venueInfo": {
  //                 "ground": "Narendra Modi Stadium",
  //                 "city": "Ahmedabad",
  //                 "timezone": "+05:30"
  //               },
  //               "isTimeAnnounced": true
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Tue, 14 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91681,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "64th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1715695200000",
  //               "endDate": "1715695200000",
  //               "state": "complete",
  //               "status": "Delhi Capitals won by 19 runs",
  //               "team1": {
  //                 "teamId": 61,
  //                 "teamName": "DELHI CAPITALS",
  //                 "teamSName": "DC",
  //                 "imageId": 225644
  //               },
  //               "team2": {
  //                 "teamId": 966,
  //                 "teamName": "LUCKNOW SUPER GIANTS",
  //                 "teamSName": "LSG",
  //                 "imageId": 389444
  //               },
  //               "venueInfo": {
  //                 "ground": "Arun Jaitley Stadium",
  //                 "city": "Delhi",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 61,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 208,
  //                   "wickets": 4,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 189,
  //                   "wickets": 9,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Wed, 15 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91686,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "65th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1715781600000",
  //               "endDate": "1715781600000",
  //               "state": "complete",
  //               "status": "Punjab Kings won by 5 wkts",
  //               "team1": {
  //                 "teamId": 64,
  //                 "teamName": "RAJASTHAN ROYALS",
  //                 "teamSName": "RR",
  //                 "imageId": 225647
  //               },
  //               "team2": {
  //                 "teamId": 65,
  //                 "teamName": "PUNJAB KINGS",
  //                 "teamSName": "PBKS",
  //                 "imageId": 225648
  //               },
  //               "venueInfo": {
  //                 "ground": "Barsapara Cricket Stadium",
  //                 "city": "Guwahati",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 65,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 144,
  //                   "wickets": 9,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 145,
  //                   "wickets": 5,
  //                   "overs": 18.5
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Thu, 16 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91690,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "66th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1715868000000",
  //               "endDate": "1715868000000",
  //               "state": "complete",
  //               "status": "Match abandoned without toss",
  //               "team1": {
  //                 "teamId": 255,
  //                 "teamName": "SUNRISERS HYDERABAD",
  //                 "teamSName": "SRH",
  //                 "imageId": 225649
  //               },
  //               "team2": {
  //                 "teamId": 971,
  //                 "teamName": "GUJARAT TITANS",
  //                 "teamSName": "GT",
  //                 "imageId": 235085
  //               },
  //               "venueInfo": {
  //                 "ground": "Rajiv Gandhi International Stadium",
  //                 "city": "Hyderabad",
  //                 "timezone": "+05:30"
  //               },
  //               "isTimeAnnounced": true
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Fri, 17 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91699,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "67th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1715954400000",
  //               "endDate": "1715954400000",
  //               "state": "complete",
  //               "status": "Lucknow Super Giants won by 18 runs",
  //               "team1": {
  //                 "teamId": 62,
  //                 "teamName": "MUMBAI INDIANS",
  //                 "teamSName": "MI",
  //                 "imageId": 225645
  //               },
  //               "team2": {
  //                 "teamId": 966,
  //                 "teamName": "LUCKNOW SUPER GIANTS",
  //                 "teamSName": "LSG",
  //                 "imageId": 389444
  //               },
  //               "venueInfo": {
  //                 "ground": "Wankhede Stadium",
  //                 "city": "Mumbai",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 966,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 196,
  //                   "wickets": 6,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 214,
  //                   "wickets": 6,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Sat, 18 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91704,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "68th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1716040800000",
  //               "endDate": "1716040800000",
  //               "state": "complete",
  //               "status": "Royal Challengers Bengaluru won by 27 runs",
  //               "team1": {
  //                 "teamId": 59,
  //                 "teamName": "ROYAL CHALLENGERS BENGALURU",
  //                 "teamSName": "RCB",
  //                 "imageId": 225643
  //               },
  //               "team2": {
  //                 "teamId": 58,
  //                 "teamName": "CHENNAI SUPER KINGS",
  //                 "teamSName": "CSK",
  //                 "imageId": 225641
  //               },
  //               "venueInfo": {
  //                 "ground": "M.Chinnaswamy Stadium",
  //                 "city": "Bengaluru",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 59,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 218,
  //                   "wickets": 5,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 191,
  //                   "wickets": 7,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Sun, 19 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91713,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "69th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1716112800000",
  //               "endDate": "1716112800000",
  //               "state": "complete",
  //               "status": "Sunrisers Hyderabad won by 4 wkts",
  //               "team1": {
  //                 "teamId": 255,
  //                 "teamName": "SUNRISERS HYDERABAD",
  //                 "teamSName": "SRH",
  //                 "imageId": 225649
  //               },
  //               "team2": {
  //                 "teamId": 65,
  //                 "teamName": "PUNJAB KINGS",
  //                 "teamSName": "PBKS",
  //                 "imageId": 225648
  //               },
  //               "venueInfo": {
  //                 "ground": "Rajiv Gandhi International Stadium",
  //                 "city": "Hyderabad",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 255,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 215,
  //                   "wickets": 6,
  //                   "overs": 19.1
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 214,
  //                   "wickets": 5,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           },
  //           {
  //             "matchInfo": {
  //               "matchId": 91717,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "70th Match",
  //               "matchFormat": "T20",
  //               "startDate": "1716127200000",
  //               "endDate": "1716127200000",
  //               "state": "complete",
  //               "status": "Match abandoned due to rain (with toss)",
  //               "team1": {
  //                 "teamId": 64,
  //                 "teamName": "RAJASTHAN ROYALS",
  //                 "teamSName": "RR",
  //                 "imageId": 225647
  //               },
  //               "team2": {
  //                 "teamId": 63,
  //                 "teamName": "KOLKATA KNIGHT RIDERS",
  //                 "teamSName": "KKR",
  //                 "imageId": 225646
  //               },
  //               "venueInfo": {
  //                 "ground": "Barsapara Cricket Stadium",
  //                 "city": "Guwahati",
  //                 "timezone": "+05:30"
  //               },
  //               "isTimeAnnounced": true
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Tue, 21 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91722,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "Qualifier 1",
  //               "matchFormat": "T20",
  //               "startDate": "1716300000000",
  //               "endDate": "1716300000000",
  //               "state": "complete",
  //               "status": "Kolkata Knight Riders won by 8 wkts",
  //               "team1": {
  //                 "teamId": 63,
  //                 "teamName": "KOLKATA KNIGHT RIDERS",
  //                 "teamSName": "KKR",
  //                 "imageId": 225646
  //               },
  //               "team2": {
  //                 "teamId": 255,
  //                 "teamName": "SUNRISERS HYDERABAD",
  //                 "teamSName": "SRH",
  //                 "imageId": 225649
  //               },
  //               "venueInfo": {
  //                 "ground": "Narendra Modi Stadium",
  //                 "city": "Ahmedabad",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 63,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 164,
  //                   "wickets": 2,
  //                   "overs": 13.4
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 159,
  //                   "wickets": 10,
  //                   "overs": 19.3
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Wed, 22 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91731,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "Eliminator",
  //               "matchFormat": "T20",
  //               "startDate": "1716386400000",
  //               "endDate": "1716386400000",
  //               "state": "complete",
  //               "status": "Rajasthan Royals won by 4 wkts",
  //               "team1": {
  //                 "teamId": 64,
  //                 "teamName": "RAJASTHAN ROYALS",
  //                 "teamSName": "RR",
  //                 "imageId": 225647
  //               },
  //               "team2": {
  //                 "teamId": 59,
  //                 "teamName": "ROYAL CHALLENGERS BENGALURU",
  //                 "teamSName": "RCB",
  //                 "imageId": 225643
  //               },
  //               "venueInfo": {
  //                 "ground": "Narendra Modi Stadium",
  //                 "city": "Ahmedabad",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 64,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 174,
  //                   "wickets": 6,
  //                   "overs": 19
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 172,
  //                   "wickets": 8,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Fri, 24 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91735,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "Qualifier 2",
  //               "matchFormat": "T20",
  //               "startDate": "1716559200000",
  //               "endDate": "1716559200000",
  //               "state": "complete",
  //               "status": "Sunrisers Hyderabad won by 36 runs",
  //               "team1": {
  //                 "teamId": 255,
  //                 "teamName": "SUNRISERS HYDERABAD",
  //                 "teamSName": "SRH",
  //                 "imageId": 225649
  //               },
  //               "team2": {
  //                 "teamId": 64,
  //                 "teamName": "RAJASTHAN ROYALS",
  //                 "teamSName": "RR",
  //                 "imageId": 225647
  //               },
  //               "venueInfo": {
  //                 "ground": "MA Chidambaram Stadium",
  //                 "city": "Chennai",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 255,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 175,
  //                   "wickets": 9,
  //                   "overs": 20
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 139,
  //                   "wickets": 7,
  //                   "overs": 20
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     },
  //     {
  //       "matchDetailsMap": {
  //         "key": "Sun, 26 May 2024",
  //         "match": [
  //           {
  //             "matchInfo": {
  //               "matchId": 91740,
  //               "seriesId": 7607,
  //               "seriesName": "Indian Premier League 2024",
  //               "matchDesc": "Final",
  //               "matchFormat": "T20",
  //               "startDate": "1716732000000",
  //               "endDate": "1716732000000",
  //               "state": "complete",
  //               "status": "Kolkata Knight Riders won by 8 wkts",
  //               "team1": {
  //                 "teamId": 63,
  //                 "teamName": "KOLKATA KNIGHT RIDERS",
  //                 "teamSName": "KKR",
  //                 "imageId": 225646
  //               },
  //               "team2": {
  //                 "teamId": 255,
  //                 "teamName": "SUNRISERS HYDERABAD",
  //                 "teamSName": "SRH",
  //                 "imageId": 225649
  //               },
  //               "venueInfo": {
  //                 "ground": "MA Chidambaram Stadium",
  //                 "city": "Chennai",
  //                 "timezone": "+05:30"
  //               },
  //               "currBatTeamId": 63,
  //               "isTimeAnnounced": true
  //             },
  //             "matchScore": {
  //               "team1Score": {
  //                 "inngs1": {
  //                   "inningsId": 2,
  //                   "runs": 114,
  //                   "wickets": 2,
  //                   "overs": 10.3
  //                 }
  //               },
  //               "team2Score": {
  //                 "inngs1": {
  //                   "inningsId": 1,
  //                   "runs": 113,
  //                   "wickets": 10,
  //                   "overs": 18.3
  //                 }
  //               }
  //             }
  //           }
  //         ],
  //         "seriesId": 7607
  //       }
  //     }
  //   ],
  //   "appIndex": {
  //     "seoTitle": "Indian Premier League 2024 live scores, schedule and results - Cricbuzz | Cricbuzz.com",
  //     "webURL": "www.cricbuzz.com/cricket-series/"
  //   }
  // }
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
