import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import locationJSON from '../data/location.json';
import ErrorPage from './ErrorPage';


const PostLocation = () => {
    let {id} = useParams()

    const data = useMemo(() => {
        return locationJSON.find(item => item.id === +id)
    }, [id])

    return (
        <>
            {!!data ? (<>
                <h2>{data.name}</h2>
                <ul>
                    <li>Type: {data.type || '-'}</li>
                    <li>Dimension: {data.dimension || '-'}</li>
                </ul>
            </>) : (<ErrorPage />)}
            
        </>
    )
}

export default PostLocation