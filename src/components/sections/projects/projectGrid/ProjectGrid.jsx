import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-gap: 1em;
`;

const GridTile = styled.div`
    background-color: #ffffff;
    height: 50px;
`;

const ProjectGrid = () => {
    return (
        <Grid>
            <GridTile>Poo</GridTile>
            <GridTile>Pee</GridTile>
            <GridTile>Pie</GridTile>
            <GridTile>Pop</GridTile>
        </Grid>
    )
}

export default ProjectGrid
