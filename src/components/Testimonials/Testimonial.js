import React from 'react';
import './testimonials.css';
import me from './me.jpg'
import styled from 'styled-components'

const TestimonialComponent = () => {

  const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

    return (
      <>
      <Title>Testimonials</Title>
        <div className="wrapper">
            <div className="cards">
                {/* Review cards */}
                <div className="card">
                    <img src={me} alt="description_of_your_image" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente o ex, quis aliquam eveniet aspernatur debitis esse maxime tempore deserunt velit vitae odio excepturi fugiat quos recusandae?</p>
                    <i className="fa fa-quote-left"></i>
                </div>

                {/* Repeat similar card structures for other reviews */}
                {/* ... */}
                <div className="card">
                    <img src={me} alt="description_of_your_image" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente o ex, quis aliquam eveniet aspernatur debitis esse maxime tempore deserunt velit vitae odio excepturi fugiat quos recusandae?</p>
                    <i className="fa fa-quote-left"></i>
                </div>
                <div className="card">
                    <img src={me} alt="description_of_your_image" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente o ex, quis aliquam eveniet aspernatur debitis esse maxime tempore deserunt velit vitae odio excepturi fugiat quos recusandae?</p>
                    <i className="fa fa-quote-left"></i>
                </div>
            </div>
        </div>
        </>
    );
}

export default TestimonialComponent;