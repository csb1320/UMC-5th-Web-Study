import React from 'react';
import styled from 'styled-components';
import { movies } from '../movieDummy';

// 스타일을 정의합니다.
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

    &:hover .overView {
        display: block;
    }
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

const OverView = styled.div`
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7); 
    opacity: 0.8; 
    color: white;
    padding:5px;
    font-size:15px;
`;

const OverTitle = styled.p`
    padding-left: 0.5vw;
    padding-right: 0.5vw;
    font-size: 1vw;
`;

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Movie = (props) => {
    const handleMouseOver = (e) => {
        e.currentTarget.querySelector('.overView').style.display = 'block';
    };

    const handleMouseOut = (e) => {
        e.currentTarget.querySelector('.overView').style.display = 'none';
    };

    return (
        <Container>
            {movies.results.map((movie, index) => (
                <MovieContainer
                    key={index}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    <MovieImage
                        src={`${IMG_BASE_URL}${movie.poster_path}`}
                        alt={movie.title}
                    />

                    <MovieInfo>
                        <p id="movieTitle" style={{ paddingLeft: "0.5vw" }}>{movie.title}</p>
                        <p id="movieVote" style={{ paddingRight: "0.5vw" }}>{movie.vote_average}</p>
                    </MovieInfo>

                    <OverView className="overView">
                        <OverTitle>{movie.title}</OverTitle>
                        <p>{movie.overview}</p>
                    </OverView>
                </MovieContainer>
            ))}
        </Container>
    );
};

export default Movie;
