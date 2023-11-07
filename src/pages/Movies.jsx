import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { movies } from '../movieDummy';

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

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Movie = () => {
    const navigate = useNavigate();

    const handleMovieClick = (title, posterPath, voteAverage, overview) => {
        navigate(`/movie/${title}`, {
            state: {
                posterPath,
                voteAverage,
                overview,
            }
        });
    };

    return (
        <Container>
            {movies.results.map((movie, index) => (
                <MovieContainer
                    key={index}
                    onClick={() => handleMovieClick(movie.title, `${IMG_BASE_URL}${movie.poster_path}`, movie.vote_average, movie.overview)}
                >
                    <MovieImage src={`${IMG_BASE_URL}${movie.poster_path}`} alt={movie.title} />
                </MovieContainer>
            ))}
        </Container>
    );
};

export default Movie;