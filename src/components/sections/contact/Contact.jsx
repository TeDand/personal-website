import React from 'react'
import '../Section.css'
import styled from 'styled-components';

// Define the styled components
const ContactMethodsContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
`;

const ContactMethod = styled.a`
    margin-right: 20px;
    padding: 10px;
`;

const Contact = () => {
    return (
        <div className='Section' id='contact' >
            < div className='OverlayText' >
                <h1 className='Heading'>
                    Feel free to reach out to me via...
                </h1>
            </div >
            <ContactMethodsContainer>
                <ContactMethod className='Link' href="mailto:tejas-d@hotmail.com">
                    Email
                </ContactMethod>
                <ContactMethod className='Link' href="tel:+18582411807">
                    Phone
                </ContactMethod>
                <ContactMethod className='Link' href="https://www.linkedin.com/in/tejas-dandawate/">
                    LinkedIn
                </ContactMethod>
                {/* Add more contact methods as needed */}
            </ContactMethodsContainer>
        </div >
    )
}

export default Contact
