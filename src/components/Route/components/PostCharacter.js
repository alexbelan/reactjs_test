import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import charactersJSON from '../data/characters.json';
import ErrorPage from './ErrorPage';


const PostCharacter = () => {
    let {id} = useParams()

    const data = useMemo(() => {
        return charactersJSON.find(item => item.id === +id)
    }, [id])

    return (
        <>
            {!!data ? (<>
                <h2>{data.name}</h2>
                <img src={data.image} />
                <ul>
                    <li>Status: {data.status || '-'}</li>
                    <li>Species: {data.species || '-'}</li>
                    <li>type: {data.type || '-'}</li>
                    <li>Gender: {data.gender || '-'}</li>
                </ul>
            </>) : (<ErrorPage />)}
            
        </>
    )
}

export default PostCharacter