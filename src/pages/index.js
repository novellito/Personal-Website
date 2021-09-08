import React from 'react';
import tw, { styled } from 'twin.macro';
import Hero from '../components/Hero';
import '../components/reset.css';
// const Button = styled.button`
//   ${tw`bg-blue-500 hover:bg-blue-800 text-white p-2 rounded`}
// `;

// or use the shorthand version

const Button = tw.button`
   bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
`;

const IndexPage = () => (
  <div>
    <Hero></Hero>
  </div>
);

export default IndexPage;
