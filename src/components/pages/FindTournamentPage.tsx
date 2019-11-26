import React, { FunctionComponent, useEffect, useState } from 'react';
import calendarService from '../../services/ifpa/calendar';

const FindTournamentPage: FunctionComponent = () => {
    const [calendarEvents, setCalendarEvents] = useState<Array<any>>(new Array<any>());
    const [searchAddress, setSearchAddress] = useState('');
    const [searchRadius, setSearchRadius] = useState(20);

    //This is only temporary until a map is added to the page
    useEffect(() => {
        setSearchAddress('united states');
        setSearchRadius(200);
    }, []);

    useEffect(() => {
        let isSubscribed = true;

        if(searchAddress.length > 0){
            calendarService.search(searchAddress, searchRadius)
                .then(results => {
                    if(isSubscribed){
                        setCalendarEvents(results);
                    }
                });
        }

        return () => {
            isSubscribed = false;
        };
    }, [searchAddress, searchRadius]);

    return(
        <section>
            <h3>Find a Tournament</h3>
            {
                calendarEvents.map((event: any, i: number) => {
                    return(
                        <div key={i}>{event.tournament_name}</div>
                    );
                })
            }
        </section>
    );
};

export default FindTournamentPage;