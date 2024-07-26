import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { tvs } from '../tvDummy';

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.8%;
`;

const MovieContainer = styled.div`
    position: relative;
    width: 250px;
    margin: 16px;
    background-color: #373b69;
    color: white;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
`;

const MovieImage = styled.img`
    width: 100%;
    min-height: 15vw;
    margin-top: 0.5vw;
`;

const MovieInfo = styled.div`
    width: 100%;
    min-height: 5%;
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 0.8vw;
    cursor: pointer;
`;

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const TV = () => {
    const navigate = useNavigate();

    const handleMovieClick = (name, poster_Path, voteAverage, overview) => {
        navigate(`/tv/${name}`, {
            state: {
                poster_Path,
                voteAverage,
                overview,
            }
        });
    };

    return (
        <Container>
            {tvs.results.map((tv, index) => (
                <MovieContainer
                key={index}
                onClick={() => handleMovieClick(tv.name, `${IMG_BASE_URL}${tv.poster_path}`, tv.vote_average, tv.overview)}
                >
                <MovieImage src={`${IMG_BASE_URL}${tv.poster_path}`} alt={tv.name} />
                    
                <MovieInfo>
                    <p id="tvTitle" style={{ paddingLeft: "0.5vw" }}>{tv.name}</p>
                    <p id="tvVote" style={{ paddingRight: "0.5vw" }}>{tv.vote_average}</p>
                </MovieInfo>
                
                </MovieContainer>
            ))}
        </Container>
    );
};

export default TV;