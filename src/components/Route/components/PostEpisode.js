import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import episodeJSON from '../data/episode.json';
import ErrorPage from './ErrorPage';


const PostEpisode = () => {
    let {id} = useParams()

    const data = useMemo(() => {
        return episodeJSON.find(item => item.id === +id)
    }, [id])

    return (
        <>
            {!!data ? (<>
                <h2>{data.name}</h2>
                <ul>
                    <li>Air date: {data.air_date || '-'}</li>
                    <li>Episode: {data.episode || '-'}</li>
                </ul>
            </>) : (<ErrorPage />)}
            
        </>
    )
}

export default PostEpisode