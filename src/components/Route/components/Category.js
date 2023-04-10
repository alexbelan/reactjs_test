import React, { useMemo } from 'react';
import { useLocation, Link} from 'react-router-dom';
import charactersJSON from '../data/characters.json';
import episodeJSON from '../data/episode.json';
import locationJSON from '../data/location.json'

const Category = () => {
    let location = useLocation();

    const data = useMemo(() => {
        switch (location.pathname) {
            case '/characters':
                return charactersJSON;
            case '/episode':
                return episodeJSON;
            case '/location':
                return locationJSON;
            default:
                return []
        }
    }, [location.pathname])

    return (
        <>
            {data.map(item => {
                return (
                <div key={item.id}>
                    <h2><Link to={`${location.pathname}/${item.id}`}>{item.name}</Link></h2>
                </div>)
            })}
        </>
    )
}

export default Category