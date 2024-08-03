import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InPageNavigation from './InPageNavigation'

const MatchDetails = () => {
    let { id } = useParams()
    // let fixedData = {
    //     "matchInfo": {
    //         "matchId": 89665,
    //         "matchDescription": "3rd Match",
    //         "matchFormat": "T20",
    //         "matchType": "league",
    //         "complete": true,
    //         "domestic": false,
    //         "matchStartTimestamp": 1711202400000,
    //         "matchCompleteTimestamp": 1711216417335,
    //         "dayNight": false,
    //         "year": 2024,
    //         "state": "complete",
    //         "team1": {
    //             "id": 63,
    //             "name": "Kolkata Knight Riders",
    //             "playerDetails": [
    //                 {
    //                     "id": 10479,
    //                     "name": "Salt",
    //                     "fullName": "Philip Salt",
    //                     "nickName": "Philip Salt",
    //                     "captain": false,
    //                     "role": "WK-Batsman",
    //                     "keeper": true,
    //                     "substitute": false,
    //                     "teamId": 63,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm off break",
    //                     "teamName": "KKR",
    //                     "faceImageId": 244804,
    //                     "isOverseas": true
    //                 },
    //                 {
    //                     "id": 10917,
    //                     "name": "Venkatesh Iyer",
    //                     "fullName": "Venkatesh Iyer",
    //                     "nickName": "Venkatesh Iyer",
    //                     "captain": false,
    //                     "role": "Batting Allrounder",
    //                     "keeper": false,
    //                     "substitute": false,
    //                     "teamId": 63,
    //                     "battingStyle": "LEFT",
    //                     "bowlingStyle": "Right Arm medium",
    //                     "teamName": "KKR",
    //                     "faceImageId": 226278
    //                 },
    //                 {
    //                     "id": 9428,
    //                     "name": "Shreyas Iyer",
    //                     "fullName": "Shreyas Iyer",
    //                     "nickName": "Shreyas Iyer",
    //                     "captain": true,
    //                     "role": "Batsman",
    //                     "keeper": false,
    //                     "substitute": false,
    //                     "teamId": 63,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm leg break",
    //                     "teamName": "KKR",
    //                     "faceImageId": 352480
    //                 },
    //                 {
    //                     "id": 9204,
    //                     "name": "Nitish Rana",
    //                     "fullName": "Nitish Rana",
    //                     "nickName": "Nitish Rana",
    //                     "captain": false,
    //                     "role": "Batsman",
    //                     "keeper": false,
    //                     "substitute": false,
    //                     "teamId": 63,
    //                     "battingStyle": "LEFT",
    //                     "bowlingStyle": "Right Arm off break",
    //                     "teamName": "KKR",
    //                     "faceImageId": 171047
    //                 },
    //                 {
    //                     "id": 10896,
    //                     "name": "Rinku Singh",
    //                     "fullName": "Rinku Singh",
    //                     "nickName": "Rinku Singh",
    //                     "captain": false,
    //                     "role": "Batsman",
    //                     "keeper": false,
    //                     "substitute": false,
    //                     "teamId": 63,
    //                     "battingStyle": "LEFT",
    //                     "bowlingStyle": "Right Arm off break",
    //                     "teamName": "KKR",
    //                     "faceImageId": 279125
    //                 },
    //                 {
    //                     "id": 12337,
    //                     "name": "Ramandeep Singh ",
    //                     "fullName": "Ramandeep Singh ",
    //                     "nickName": "Ramandeep Singh ",
    //                     "captain": false,
    //                     "role": "Batsman",
    //                     "keeper": false,
    //                     "substitute": false,
    //                     "teamId": 63,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm medium",
    //                     "teamName": "KKR",
    //                     "faceImageId": 182026,
    //                     "inMatchChange": "MOUT"
    //                 },
    //                 {
    //                     "id": 7736,
    //                     "name": "Russell",
    //                     "fullName": "Andre Russell",
    //                     "nickName": "Russell",
    //                     "captain": false,
    //                     "role": "Bowling Allrounder",
    //                     "keeper": false,
    //                     "substitute": false,
    //                     "teamId": 63,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm fast",
    //                     "teamName": "KKR",
    //                     "faceImageId": 170821,
    //                     "isOverseas": true
    //                 },
    //                 {
    //                     "id": 2276,
    //                     "name": "Narine",
    //                     "fullName": "Sunil Narine",
    //                     "nickName": "Narine",
    //                     "captain": false,
    //                     "role": "Bowling Allrounder",
    //                     "keeper": false,
    //                     "substitute": false,
    //                     "teamId": 63,
    //                     "battingStyle": "LEFT",
    //                     "bowlingStyle": "Right Arm off break",
    //                     "teamName": "KKR",
    //                     "faceImageId": 152654,
    //                     "isOverseas": true
    //                 },
    //                 {
    //                     "id": 7710,
    //                     "name": "Starc",
    //                     "fullName": "Mitchell Starc",
    //                     "nickName": "Starc",
    //                     "captain": false,
    //                     "role": "Bowler",
    //                     "keeper": false,
    //                     "substitute": false,
    //                     "teamId": 63,
    //                     "battingStyle": "LEFT",
    //                     "bowlingStyle": "",
    //                     "teamName": "KKR",
    //                     "faceImageId": 352462,
    //                     "isOverseas": true
    //                 },
    //                 {
    //                     "id": 24729,
    //                     "name": "Harshit Rana",
    //                     "fullName": "Harshit Rana",
    //                     "nickName": "Harshit Rana",
    //                     "captain": false,
    //                     "role": "Bowler",
    //                     "keeper": false,
    //                     "substitute": false,
    //                     "teamId": 63,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm fast medium",
    //                     "teamName": "KKR",
    //                     "faceImageId": 182026
    //                 },
    //                 {
    //                     "id": 12926,
    //                     "name": "Chakaravarthy",
    //                     "fullName": "Varun Chakaravarthy",
    //                     "nickName": "Chakaravarthy",
    //                     "captain": false,
    //                     "role": "Bowler",
    //                     "keeper": false,
    //                     "substitute": false,
    //                     "teamId": 63,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm leg break",
    //                     "teamName": "KKR",
    //                     "faceImageId": 226220
    //                 },
    //                 {
    //                     "id": 36487,
    //                     "name": "Suyash Sharma",
    //                     "fullName": "Suyash Sharma",
    //                     "nickName": "Suyash Sharma",
    //                     "captain": false,
    //                     "role": "Bowler",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 63,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm leg break",
    //                     "teamName": "KKR",
    //                     "faceImageId": 182026,
    //                     "inMatchChange": "MIN",
    //                     "splSubstitute": true
    //                 },
    //                 {
    //                     "id": 1836,
    //                     "name": "Manish Pandey",
    //                     "fullName": "Manish Pandey",
    //                     "nickName": "Manish Pandey",
    //                     "captain": false,
    //                     "role": "Batsman",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 63,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm medium",
    //                     "teamName": "KKR",
    //                     "faceImageId": 171022,
    //                     "splSubstitute": true
    //                 },
    //                 {
    //                     "id": 15861,
    //                     "name": "Vaibhav Arora",
    //                     "fullName": "Vaibhav Arora",
    //                     "nickName": "Vaibhav Arora",
    //                     "captain": false,
    //                     "role": "Bowler",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 63,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm fast medium",
    //                     "teamName": "KKR",
    //                     "faceImageId": 182026,
    //                     "splSubstitute": true
    //                 },
    //                 {
    //                     "id": 22566,
    //                     "name": "Angkrish Raghuvanshi",
    //                     "fullName": "Angkrish Raghuvanshi",
    //                     "nickName": "Angkrish Raghuvanshi",
    //                     "captain": false,
    //                     "role": "Batting Allrounder",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 63,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Left arm orthodox",
    //                     "teamName": "KKR",
    //                     "faceImageId": 182026,
    //                     "splSubstitute": true
    //                 },
    //                 {
    //                     "id": 13213,
    //                     "name": "Gurbaz",
    //                     "fullName": "Rahmanullah Gurbaz",
    //                     "nickName": "Gurbaz",
    //                     "captain": false,
    //                     "role": "WK-Batsman",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 63,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm medium",
    //                     "teamName": "KKR",
    //                     "faceImageId": 352440,
    //                     "splSubstitute": true,
    //                     "isOverseas": true
    //                 },
    //                 {
    //                     "id": 9025,
    //                     "name": "Srikar Bharat",
    //                     "fullName": "Srikar Bharat",
    //                     "nickName": "Srikar Bharat",
    //                     "captain": false,
    //                     "role": "WK-Batsman",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 63,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "",
    //                     "teamName": "KKR",
    //                     "faceImageId": 332894
    //                 },
    //                 {
    //                     "id": 12071,
    //                     "name": "Mujeeb",
    //                     "fullName": "Mujeeb Ur Rahman",
    //                     "nickName": "Mujeeb",
    //                     "captain": false,
    //                     "role": "Bowler",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 63,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm off break",
    //                     "teamName": "KKR",
    //                     "faceImageId": 352446
    //                 },
    //                 {
    //                     "id": 12344,
    //                     "name": "Anukul Roy",
    //                     "fullName": "Anukul Roy",
    //                     "nickName": "Anukul Roy",
    //                     "captain": false,
    //                     "role": "Batting Allrounder",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 63,
    //                     "battingStyle": "LEFT",
    //                     "bowlingStyle": "Left arm orthodox",
    //                     "teamName": "KKR",
    //                     "faceImageId": 153915
    //                 },
    //                 {
    //                     "id": 13494,
    //                     "name": "Chetan Sakariya",
    //                     "fullName": "Chetan Sakariya",
    //                     "nickName": "Sakariya",
    //                     "captain": false,
    //                     "role": "Bowler",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 63,
    //                     "battingStyle": "LEFT",
    //                     "bowlingStyle": "Left Arm fast medium",
    //                     "teamName": "KKR",
    //                     "faceImageId": 169708
    //                 },
    //                 {
    //                     "id": 13748,
    //                     "name": "Sherfane Rutherford",
    //                     "fullName": "Sherfane Rutherford",
    //                     "nickName": "Rutherford",
    //                     "captain": false,
    //                     "role": "Batting Allrounder",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 63,
    //                     "battingStyle": "LEFT",
    //                     "bowlingStyle": "Right Arm fast medium",
    //                     "teamName": "KKR",
    //                     "faceImageId": 226373
    //                 },
    //                 {
    //                     "id": 8393,
    //                     "name": "Chameera",
    //                     "fullName": "Dushmantha Chameera",
    //                     "nickName": "Chameera",
    //                     "captain": false,
    //                     "role": "Bowler",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 63,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm fast",
    //                     "teamName": "KKR",
    //                     "faceImageId": 244665
    //                 },
    //                 {
    //                     "id": 33129,
    //                     "name": "Sakib Hussain",
    //                     "fullName": "Sakib Hussain",
    //                     "nickName": "Sakib Hussain",
    //                     "captain": false,
    //                     "role": "Batsman",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 63,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm medium",
    //                     "teamName": "KKR",
    //                     "faceImageId": 182026
    //                 },
    //                 {
    //                     "id": 308,
    //                     "name": "Gautam Gambhir",
    //                     "fullName": "Gautam Gambhir",
    //                     "nickName": "Gambhir",
    //                     "role": "Mentor",
    //                     "teamId": 63,
    //                     "teamName": "KKR",
    //                     "faceImageId": 154519,
    //                     "isSupportStaff": true
    //                 },
    //                 {
    //                     "id": 3870,
    //                     "name": "Chandrakant Pandit",
    //                     "fullName": "Chandrakant Pandit",
    //                     "nickName": "Pandit",
    //                     "role": "Head coach",
    //                     "teamId": 63,
    //                     "teamName": "KKR",
    //                     "faceImageId": 182026,
    //                     "isSupportStaff": true
    //                 },
    //                 {
    //                     "id": 1463,
    //                     "name": "Abhishek Nayar",
    //                     "fullName": "Abhishek Nayar",
    //                     "nickName": "Nayar",
    //                     "role": "Assistant coach",
    //                     "teamId": 63,
    //                     "teamName": "KKR",
    //                     "faceImageId": 156298,
    //                     "isSupportStaff": true
    //                 },
    //                 {
    //                     "id": 3873,
    //                     "name": "Bharat Arun",
    //                     "fullName": "Bharat Arun",
    //                     "nickName": "Arun",
    //                     "role": "Bowling coach",
    //                     "teamId": 63,
    //                     "teamName": "KKR",
    //                     "faceImageId": 182026,
    //                     "isSupportStaff": true
    //                 },
    //                 {
    //                     "id": 640,
    //                     "name": "Ryan ten Doeschate",
    //                     "fullName": "Ryan ten Doeschate",
    //                     "nickName": "ten Doeschate",
    //                     "role": "Fielding Coach",
    //                     "teamId": 63,
    //                     "teamName": "KKR",
    //                     "faceImageId": 155932,
    //                     "isSupportStaff": true
    //                 }
    //             ],
    //             "shortName": "KKR"
    //         },
    //         "team2": {
    //             "id": 255,
    //             "name": "Sunrisers Hyderabad",
    //             "playerDetails": [
    //                 {
    //                     "id": 2195,
    //                     "name": "Mayank Agarwal",
    //                     "fullName": "Mayank Agarwal",
    //                     "nickName": "Mayank",
    //                     "captain": false,
    //                     "role": "Batsman",
    //                     "keeper": false,
    //                     "substitute": false,
    //                     "teamId": 255,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "",
    //                     "teamName": "SRH",
    //                     "faceImageId": 171091
    //                 },
    //                 {
    //                     "id": 9012,
    //                     "name": "Tripathi",
    //                     "fullName": "Rahul Tripathi",
    //                     "nickName": "Tripathi",
    //                     "captain": false,
    //                     "role": "Batsman",
    //                     "keeper": false,
    //                     "substitute": false,
    //                     "teamId": 255,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm medium",
    //                     "teamName": "SRH",
    //                     "faceImageId": 226470
    //                 },
    //                 {
    //                     "id": 9582,
    //                     "name": "Markram",
    //                     "fullName": "Aiden Markram",
    //                     "nickName": "Markram",
    //                     "captain": false,
    //                     "role": "Batsman",
    //                     "keeper": false,
    //                     "substitute": false,
    //                     "teamId": 255,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm off break",
    //                     "teamName": "SRH",
    //                     "faceImageId": 351829,
    //                     "isOverseas": true
    //                 },
    //                 {
    //                     "id": 10209,
    //                     "name": "Klaasen",
    //                     "fullName": "Heinrich Klaasen",
    //                     "nickName": "Klaasen",
    //                     "captain": false,
    //                     "role": "WK-Batsman",
    //                     "keeper": true,
    //                     "substitute": false,
    //                     "teamId": 255,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm off break",
    //                     "teamName": "SRH",
    //                     "faceImageId": 351833,
    //                     "isOverseas": true
    //                 },
    //                 {
    //                     "id": 14628,
    //                     "name": "Abdul Samad",
    //                     "fullName": "Abdul Samad",
    //                     "nickName": "Abdul Samad",
    //                     "captain": false,
    //                     "role": "Batsman",
    //                     "keeper": false,
    //                     "substitute": false,
    //                     "teamId": 255,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm leg break",
    //                     "teamName": "SRH",
    //                     "faceImageId": 226276
    //                 },
    //                 {
    //                     "id": 14606,
    //                     "name": "Shahbaz Ahmed",
    //                     "fullName": "Shahbaz Ahmed",
    //                     "nickName": "Shahbaz Ahmed",
    //                     "captain": false,
    //                     "role": "Bowling Allrounder",
    //                     "keeper": false,
    //                     "substitute": false,
    //                     "teamId": 255,
    //                     "battingStyle": "LEFT",
    //                     "bowlingStyle": "Left arm orthodox",
    //                     "teamName": "SRH",
    //                     "faceImageId": 226473
    //                 },
    //                 {
    //                     "id": 14565,
    //                     "name": "Marco Jansen",
    //                     "fullName": "Marco Jansen",
    //                     "nickName": "Marco Jansen",
    //                     "captain": false,
    //                     "role": "Bowling Allrounder",
    //                     "keeper": false,
    //                     "substitute": false,
    //                     "teamId": 255,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "",
    //                     "teamName": "SRH",
    //                     "faceImageId": 351832,
    //                     "isOverseas": true
    //                 },
    //                 {
    //                     "id": 8095,
    //                     "name": "Cummins",
    //                     "fullName": "Pat Cummins",
    //                     "nickName": "Cummins",
    //                     "captain": true,
    //                     "role": "Bowler",
    //                     "keeper": false,
    //                     "substitute": false,
    //                     "teamId": 255,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm fast",
    //                     "teamName": "SRH",
    //                     "faceImageId": 352460,
    //                     "isOverseas": true
    //                 },
    //                 {
    //                     "id": 1726,
    //                     "name": "Bhuvneshwar",
    //                     "fullName": "Bhuvneshwar Kumar",
    //                     "nickName": "Bhuvneshwar",
    //                     "captain": false,
    //                     "role": "Bowler",
    //                     "keeper": false,
    //                     "substitute": false,
    //                     "teamId": 255,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm fast medium",
    //                     "teamName": "SRH",
    //                     "faceImageId": 244967
    //                 },
    //                 {
    //                     "id": 12627,
    //                     "name": "Markande",
    //                     "fullName": "Mayank Markande",
    //                     "nickName": "Markande",
    //                     "captain": false,
    //                     "role": "Bowler",
    //                     "keeper": false,
    //                     "substitute": false,
    //                     "teamId": 255,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm leg break",
    //                     "teamName": "SRH",
    //                     "faceImageId": 226510
    //                 },
    //                 {
    //                     "id": 10225,
    //                     "name": "T Natarajan",
    //                     "fullName": "T Natarajan",
    //                     "nickName": "T Natarajan",
    //                     "captain": false,
    //                     "role": "Bowler",
    //                     "keeper": false,
    //                     "substitute": false,
    //                     "teamId": 255,
    //                     "battingStyle": "LEFT",
    //                     "bowlingStyle": "Left Arm fast medium",
    //                     "teamName": "SRH",
    //                     "faceImageId": 198676,
    //                     "inMatchChange": "MOUT"
    //                 },
    //                 {
    //                     "id": 14701,
    //                     "name": "Nitish Reddy",
    //                     "fullName": "Nitish Reddy",
    //                     "nickName": "Nitish Reddy",
    //                     "captain": false,
    //                     "role": "Bowler",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 255,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm fast medium",
    //                     "teamName": "SRH",
    //                     "faceImageId": 182026,
    //                     "splSubstitute": true
    //                 },
    //                 {
    //                     "id": 10945,
    //                     "name": "Washington Sundar",
    //                     "fullName": "Washington Sundar",
    //                     "nickName": "Washington Sundar",
    //                     "captain": false,
    //                     "role": "Batting Allrounder",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 255,
    //                     "battingStyle": "LEFT",
    //                     "bowlingStyle": "Right Arm off break",
    //                     "teamName": "SRH",
    //                     "faceImageId": 171035,
    //                     "splSubstitute": true
    //                 },
    //                 {
    //                     "id": 19027,
    //                     "name": "Umran Malik",
    //                     "fullName": "Umran Malik",
    //                     "nickName": "Umran Malik",
    //                     "captain": false,
    //                     "role": "Bowler",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 255,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm fast",
    //                     "teamName": "SRH",
    //                     "faceImageId": 333875,
    //                     "splSubstitute": true
    //                 },
    //                 {
    //                     "id": 10693,
    //                     "name": "Glenn Phillips",
    //                     "fullName": "Glenn Phillips",
    //                     "nickName": "Glenn Phillips",
    //                     "captain": false,
    //                     "role": "Batsman",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 255,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm off break",
    //                     "teamName": "SRH",
    //                     "faceImageId": 351798,
    //                     "splSubstitute": true,
    //                     "isOverseas": true
    //                 },
    //                 {
    //                     "id": 12086,
    //                     "name": "Abhishek Sharma",
    //                     "fullName": "Abhishek Sharma",
    //                     "nickName": "Abhishek Sharma",
    //                     "captain": false,
    //                     "role": "Bowling Allrounder",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 255,
    //                     "battingStyle": "LEFT",
    //                     "bowlingStyle": "Left arm orthodox",
    //                     "teamName": "SRH",
    //                     "faceImageId": 153963,
    //                     "inMatchChange": "MIN",
    //                     "splSubstitute": true
    //                 },
    //                 {
    //                     "id": 8497,
    //                     "name": "Head",
    //                     "fullName": "Travis Head",
    //                     "nickName": "Head",
    //                     "captain": false,
    //                     "role": "Batsman",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 255,
    //                     "battingStyle": "LEFT",
    //                     "bowlingStyle": "Right Arm off break",
    //                     "teamName": "SRH",
    //                     "faceImageId": 332908
    //                 },
    //                 {
    //                     "id": 6327,
    //                     "name": "Jaydev Unadkat",
    //                     "fullName": "Jaydev Unadkat",
    //                     "nickName": "Unadkat",
    //                     "captain": false,
    //                     "role": "Bowler",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 255,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Left Arm fast medium",
    //                     "teamName": "SRH",
    //                     "faceImageId": 332903
    //                 },
    //                 {
    //                     "id": 10947,
    //                     "name": "Anmolpreet Singh",
    //                     "fullName": "Anmolpreet Singh",
    //                     "nickName": "Anmolpreet Singh",
    //                     "captain": false,
    //                     "role": "Batsman",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 255,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm off break",
    //                     "teamName": "SRH",
    //                     "faceImageId": 179867
    //                 },
    //                 {
    //                     "id": 11965,
    //                     "name": "Upendra Yadav",
    //                     "fullName": "Upendra Yadav",
    //                     "nickName": "Upendra Yadav",
    //                     "captain": false,
    //                     "role": "WK-Batsman",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 255,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm off break",
    //                     "teamName": "SRH",
    //                     "faceImageId": 182026
    //                 },
    //                 {
    //                     "id": 12636,
    //                     "name": "J Subramanyan",
    //                     "fullName": "Jhatavedh Subramanyan",
    //                     "nickName": "J Subramanyan",
    //                     "captain": false,
    //                     "role": "Bowler",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 255,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm leg break",
    //                     "teamName": "SRH",
    //                     "faceImageId": 182026
    //                 },
    //                 {
    //                     "id": 13509,
    //                     "name": "Sanvir Singh",
    //                     "fullName": "Sanvir Singh",
    //                     "nickName": "Sanvir Singh",
    //                     "captain": false,
    //                     "role": "Batting Allrounder",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 255,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Right Arm medium",
    //                     "teamName": "SRH",
    //                     "faceImageId": 182026
    //                 },
    //                 {
    //                     "id": 14282,
    //                     "name": "Fazalhaq Farooqi",
    //                     "fullName": "Fazalhaq Farooqi",
    //                     "nickName": "Fazalhaq Farooqi",
    //                     "captain": false,
    //                     "role": "Bowler",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 255,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Left Arm fast medium",
    //                     "teamName": "SRH",
    //                     "faceImageId": 352444
    //                 },
    //                 {
    //                     "id": 14696,
    //                     "name": "Akash Maharaj Singh",
    //                     "fullName": "Akash Maharaj Singh",
    //                     "nickName": "Akash Maharaj Singh",
    //                     "captain": false,
    //                     "role": "Bowler",
    //                     "keeper": false,
    //                     "substitute": true,
    //                     "teamId": 255,
    //                     "battingStyle": "RIGHT",
    //                     "bowlingStyle": "Left Arm fast medium",
    //                     "teamName": "SRH",
    //                     "faceImageId": 182026
    //                 },
    //                 {
    //                     "id": 205,
    //                     "name": "Daniel Vettori",
    //                     "fullName": "Daniel Vettori",
    //                     "nickName": "Vettori",
    //                     "role": "Head Coach",
    //                     "teamId": 255,
    //                     "teamName": "SRH",
    //                     "faceImageId": 154504,
    //                     "isSupportStaff": true
    //                 },
    //                 {
    //                     "id": 3943,
    //                     "name": "Hemang Badani",
    //                     "fullName": "Hemang Badani",
    //                     "nickName": "Badani",
    //                     "role": "Batting Coach",
    //                     "teamId": 255,
    //                     "teamName": "SRH",
    //                     "faceImageId": 182026,
    //                     "isSupportStaff": true
    //                 },
    //                 {
    //                     "id": 42632,
    //                     "name": "Simon Helmot",
    //                     "fullName": "Simon Helmot",
    //                     "nickName": "Simon Helmot",
    //                     "role": "Assistant coach",
    //                     "teamId": 255,
    //                     "teamName": "SRH",
    //                     "faceImageId": 182026,
    //                     "isSupportStaff": true
    //                 },
    //                 {
    //                     "id": 508,
    //                     "name": "Dale Steyn",
    //                     "fullName": "Dale Steyn",
    //                     "nickName": "Steyn",
    //                     "role": "Fast Bowling coach",
    //                     "teamId": 255,
    //                     "teamName": "SRH",
    //                     "faceImageId": 170769,
    //                     "isSupportStaff": true
    //                 },
    //                 {
    //                     "id": 110,
    //                     "name": "Muttiah Muralitharan",
    //                     "fullName": "Muttiah Muralitharan",
    //                     "nickName": "Muralitharan",
    //                     "role": "Spin Bowling Coach",
    //                     "teamId": 255,
    //                     "teamName": "SRH",
    //                     "faceImageId": 154990,
    //                     "isSupportStaff": true
    //                 },
    //                 {
    //                     "id": 42646,
    //                     "name": "Ryan Cook",
    //                     "fullName": "Ryan Cook",
    //                     "nickName": "Ryan Cook",
    //                     "role": "Fielding Coach",
    //                     "teamId": 255,
    //                     "teamName": "SRH",
    //                     "faceImageId": 182026,
    //                     "isSupportStaff": true
    //                 }
    //             ],
    //             "shortName": "SRH"
    //         },
    //         "series": {
    //             "id": 7607,
    //             "name": "Indian Premier League 2024",
    //             "seriesType": "IPL",
    //             "startDate": 1710979200000,
    //             "endDate": 1716768000000,
    //             "seriesFolder": "",
    //             "odiSeriesResult": "",
    //             "t20SeriesResult": "",
    //             "testSeriesResult": "",
    //             "tournament": true
    //         },
    //         "umpire1": {
    //             "id": 8867,
    //             "name": "Rohan Pandit",
    //             "country": "IND"
    //         },
    //         "umpire2": {
    //             "id": 10279,
    //             "name": "Yeshwant Barde",
    //             "country": "IND"
    //         },
    //         "umpire3": {
    //             "id": 6841,
    //             "name": "Bruce Oxenford",
    //             "country": "AUS"
    //         },
    //         "referee": {
    //             "id": 7596,
    //             "name": "Manu Nayyar",
    //             "country": "IND"
    //         },
    //         "tossResults": {
    //             "tossWinnerId": 255,
    //             "tossWinnerName": "Sunrisers Hyderabad",
    //             "decision": "Bowling"
    //         },
    //         "result": {
    //             "resultType": "win",
    //             "winningTeam": "Kolkata Knight Riders",
    //             "winningteamId": 63,
    //             "winningMargin": 4,
    //             "winByRuns": true,
    //             "winByInnings": false
    //         },
    //         "venue": {
    //             "id": 31,
    //             "name": "Eden Gardens",
    //             "city": "Kolkata",
    //             "country": "India",
    //             "timezone": "+05:30",
    //             "latitude": "22.564527",
    //             "longitude": "88.343247"
    //         },
    //         "status": "Sunrisers Hyderabad opt to bowl",
    //         "playersOfTheMatch": [
    //             {
    //                 "id": 7736,
    //                 "name": "Russell",
    //                 "fullName": "Andre Russell",
    //                 "nickName": "Russell",
    //                 "captain": false,
    //                 "keeper": false,
    //                 "substitute": false,
    //                 "teamName": "West Indies",
    //                 "faceImageId": 170821
    //             }
    //         ],
    //         "playersOfTheSeries": [],
    //         "revisedTarget": {
    //             "reason": ""
    //         },
    //         "matchTeamInfo": [
    //             {
    //                 "battingTeamId": 63,
    //                 "battingTeamShortName": "KKR",
    //                 "bowlingTeamId": 255,
    //                 "bowlingTeamShortName": "SRH"
    //             },
    //             {
    //                 "battingTeamId": 255,
    //                 "battingTeamShortName": "SRH",
    //                 "bowlingTeamId": 63,
    //                 "bowlingTeamShortName": "KKR"
    //             }
    //         ],
    //         "isMatchNotCovered": false,
    //         "HYSEnabled": 0,
    //         "livestreamEnabled": false,
    //         "isFantasyEnabled": true,
    //         "livestreamEnabledGeo": [
    //             "MA",
    //             "KW",
    //             "EG",
    //             "TN",
    //             "JO",
    //             "MR",
    //             "US",
    //             "BH",
    //             "SD",
    //             "LY",
    //             "IQ",
    //             "SA",
    //             "MU",
    //             "AE",
    //             "LB",
    //             "DJ",
    //             "SO",
    //             "SS",
    //             "YT",
    //             "MG",
    //             "YE",
    //             "RE",
    //             "OM",
    //             "DZ",
    //             "QA",
    //             "CA",
    //             "TD",
    //             "PS"
    //         ],
    //         "alertType": "",
    //         "shortStatus": "KKR won",
    //         "matchImageId": 387017
    //     },
    //     "venueInfo": {
    //         "established": 1864,
    //         "capacity": "63000",
    //         "knownAs": null,
    //         "ends": "High Court End, Pavilion End",
    //         "city": "Kolkata",
    //         "country": "India",
    //         "timezone": "+05:30",
    //         "homeTeam": "Bengal, Kolkata Knight Riders",
    //         "floodlights": true,
    //         "curator": "Probir Mukherjee",
    //         "profile": "<b>Venue Description</b>:\n\nOne of the biggest sporting centres, Kolkata's Eden Garden holds a special place of interest in the history of Indian cricket. Capable of holding more than one lakh people at one stage, the capacity has now been reduced to a little more than 66,000 after the stadium underwent renovation before the 2011 World Cup.\n\nReferred as \"Cricket's answer to the Colosseum,\" the Eden Gardens, the largest cricket stadium in India, has hosted many prominent matches. The Eden Gardens crowd simply loves their sport. The first World Cup final outside Lord's was at this majestic venue. Anil Kumble's 6/12 against West Indies in the final of the 1993 Hero Cup was on this hallowed turf.  \n\nSachin Tendulkar's famous run-out during the Asian Test Championship match against Pakistan, resulted in Kolkata's mob fury in action once again - the match was eventually finished in front of empty stands. This wasn't the first time though - not to forget the previous instance, when India slumped to 120/8, chasing 252 against Sri Lanka in the semi-final of the 1996 World Cup. \n\nThere have been happier times as well. The 376-run stand between VVS Laxman and Rahul Dravid during the famous 2001 Test series against Australia, which inspired a famous Indian victory, came here. Rohit Sharma's belligerent ODI world record, a 173-ball 264, against Sri Lanka, in Nov 2014, also came on this famous ground.\n\nThe stadium hosted its first Test in 1934, with India hosting England. While the Test match came early, it had to wait until 1987 to host its first ODI, against Pakistan. While the stadium is synonymous with cricket, until 1984, it was also used as a football venue, with several of prominent derbies being held over the maidan. \n\n<b>How does the pitch play?</b>\n \nThe Eden Gardens track is considered as one of the better batting surfaces although spinners tend to come into action as the match wears on. Spinners have enjoyed bowling here in IPL games as well.\n\n<b>Stats and Trivia</b>\n\nThe highest ODI score by any batsman was made on this ground. Rohit Sharma smashed 264 against Sri Lanka in November, 2014\n\nEden Gardens has hosted as many as 39 Tests - the most by any venue in India.\n\nby <b>Pradeep Krishnamurthy</b>",
    //         "imageUrl": "http://i.cricketcb.com/i/stats/fth/540x303/venue/images/31.jpg",
    //         "ground": "Eden Gardens",
    //         "groundLength": 0,
    //         "groundWidth": 0,
    //         "otherSports": null
    //     },
    //     "broadcastInfo": []
    // }

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

