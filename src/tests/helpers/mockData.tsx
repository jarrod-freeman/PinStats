const calendarEventsData: any = [{
    'calendar_id': '6981',
    'tournament_id': '6616',
    'tournament_name': 'Stockholm Pinball',
    'address1': '123 Main St',
    'address2': '',
    'city': 'Stockholm',
    'state': '',
    'zipcode': '12632',
    'country': 'Sweden',
    'website': 'http://stockholmpinball.com/',
    'start_date': '2020-10-17',
    'end_date': '2020-10-17',
    'director_name': 'Some person',
    'latitude': '59.3022',
    'longitude': '18.0149',
    'details': 'System varies, but typically set-the-highscore qualifications and then top-8',
    'private_flag': 'N',
    'distance': 155,
    'average_players': '16',
    'average_points': '5'
},
{
    'calendar_id': '37039',
    'tournament_id': '37039',
    'tournament_name': 'Tuesday Night Weekly Strikes',
    'event_name': 'Main Tournament',
    'address1': '1211 North Council Road',
    'address2': '',
    'city': 'Oklahoma City',
    'state': 'OK',
    'zipcode': null,
    'country_name': 'United States',
    'country_code': 'US',
    'website': 'https://www.facebook.com/events/513248089252107/',
    'start_date': '2019-12-10',
    'end_date': '2019-12-10',
    'director_name': 'Travis Murie',
    'latitude': '35.4810',
    'longitude': '-97.6547',
    'details': 'This will be a 3 strike group knockout tourney using the Matchplay software. At the start of the first round, players will be randomly paired into 4 players and 3 player groups and a randomly chosen game will be assigned to each group. The top 2 finishers in a 4 player group will move on without getting a strike and the bottom 2 finishers will get a strike. In a 3 player group, the bottom 2 finishers will get a strike. At the start of round 2, players will be paired using the Swiss format where players with 1 strike will be paired against other players with 1 strike and so on. Play will continue until 1 player remains without 3 strikes.',
    'distance': 155,
    'average_players': '16',
    'average_points': '5'
},
{
    'calendar_id': '35612',
    'tournament_id': '35612',
    'tournament_name': 'Belles & Chimes OKc ',
    'event_name': 'Womens Division',
    'address1': '1211 North Council Road',
    'address2': '',
    'city': 'Oklahoma City',
    'state': 'OK',
    'zipcode': null,
    'country_name': 'United States',
    'country_code': 'US',
    'website': 'https://www.facebook.com/events/861126500925539/',
    'start_date': '2019-12-12',
    'end_date': '2019-12-12',
    'director_name': 'Carolyn Dawson',
    'latitude': '35.4810',
    'longitude': '-97.6547',
    'details': 'play 8 games with scoring 100, 99, 98 etc top 4 scores will advance to finals for places 1st - 4th ',
    'private_flag': 'N',
    'distance': 155,
    'average_players': '5',
    'average_points': '0'
}];

const playersData: any = [{
    'player_id': '1',
    'first_name': 'TestFirst1',
    'last_name': 'TestLast1',
    'country_code': 'AU',
    'country_name': 'Australia',
    'city': '',
    'state': '',
    'wppr_rank': '2'
},
{
    'player_id': '3',
    'first_name': 'TestFirst2',
    'last_name': 'TestLast2',
    'country_code': 'US',
    'country_name': 'United States',
    'city': 'Columbus',
    'state': 'OH',
    'wppr_rank': '4'
},
{
    'player_id': '4',
    'first_name': 'TestFirst3',
    'last_name': 'TestLast3',
    'country_code': 'US',
    'country_name': 'United Stats',
    'city': 'New York',
    'state': 'NY',
    'wppr_rank': '5'
}];

const playerHistoryData: any = [{
    player: {
        'player_id': '1',
        'first_name': 'TestFirst1',
        'last_name': 'TestLast1'
    },
    rank_history: [{
        'rank_date': '2019-12-01',
        'rank_position': '14468',
        'wppr_points': '1.2500'
    }],
    rating_history: [{
        'rating_date': '2018-09-18',
        'rating': '1156.1530'
    }]
}];

const tournamentsData: any = [{
    tournament: [{
        'tournament_id': '1',
        'tournament_name': 'Test Tournament',
        'event_name': 'Main Tournament',
        'event_date': '2019-12-06',
        'winner_name': 'Test Winner',
        'winner_player_id': '2',
        'country_code': 'US',
        'country_name': 'United States',
        'player_count': '3'
    }],
    total_results: 100
}];

export {
    calendarEventsData,
    playersData,
    playerHistoryData,
    tournamentsData
};