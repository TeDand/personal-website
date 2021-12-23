import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components'

const GridTile = styled.div`
    background-color: var(--backgroundColour);
    border-style: solid;
    border-width: 2px;
    border-radius: 3pt;
    border-color: var(--highlightColour);
    width: 20vw;
`;

const ProjectGrid = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <GridTile>
                        One of three columns
                    </GridTile>
                </Col>
                <Col>
                    One of three columns
                </Col>
                <Col>
                    One of three columns
                </Col>
            </Row>
            <Row>
                <Col>
                    One of three columns
                </Col>
                <Col>
                    One of three columns
                </Col>
                <Col>
                    One of three columns
                </Col>
            </Row>
        </Container >
    )
}

export default ProjectGrid
