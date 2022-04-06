import React from 'react'
import { ProjectGridItems } from './ProjectGridItems';
import styled from 'styled-components'

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
`;


const GridTile = styled.div`
    flex: 1;
    flex-basis: 33%;
    margin: 10pt;
    background-color: var(--backgroundColour2);
    border-radius: 3pt;
    width: 20vw;
    padding: 10pt;
`;

// TODO: Include skills in each project
// const Skills = styled.p`
//     font-size: clamp(2pt, 10pt, 10pt);
// `;

// TODO: Make links appear at the bottom of the gridtiles
// const LinkWrapper = styled.div`
//     alignSelf: 'flex-end'
// `;

const Link = styled.p`
    font-size: clamp(2pt, 10pt, 10pt);
`;

// TODO: Hyphernate broken words
const Title = styled.p`
    font-size: clamp(7pt, 18pt, 18pt);
    width: 50%;
    overflow-wrap: break-word;
    border-bottom: 2px solid var(--highlightColour);
`;

const ImageWrapper = styled.div`
    width: 100%;
    heigh: inherit;
    padding-top: 5pt;
    padding-bottom: 5pt;
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    justify-content: center;
`;

const Image = styled.img`
    width: inherit;
    heigh: inherit;
    padding-top: 5pt;
    padding-bottom: 5pt;
`;

const Description = styled.p`
    font-weight: 300;
    padding-bottom: 10pt;
`;

const ProjectGrid = () => {
    return (
        <Grid>
            {ProjectGridItems.map(item => (
                <GridTile>
                    <Title>
                        {item.name}
                    </Title>
                    <ImageWrapper>
                        <Image src={item.image} alt={item.name} />
                    </ImageWrapper>
                    <Description>
                        {item.description}
                    </Description>
                    {/* <LinkWrapper> */}
                    {item.links.map(link => (
                        // TODO: format nicely
                        <Link>
                            <a href={link.link}>{link.linkNamme}</a>
                        </Link>
                    ))}
                    {/* </LinkWrapper> */}
                </GridTile>
            ))}
        </Grid>
    )
}

export default ProjectGrid

