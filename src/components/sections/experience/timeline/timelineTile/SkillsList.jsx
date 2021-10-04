import React from 'react'
import styled from 'styled-components'

const List = styled.div`
    position: relative;
    gap: 15px;
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
`;

const Skill = styled.div`
    text-align: center;
    white-space:nowrap;
    line-height: 100%;
`;

const SkillsList = ({ skills }) => {
    return (
        <List>
            {skills.map((item, index) => {
                return (
                    <Skill className='Heading Highlighted' key={index}>
                        {item}
                    </Skill>
                )
            })}
        </List>
    )
}

export default SkillsList
