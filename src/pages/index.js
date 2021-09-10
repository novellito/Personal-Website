import React from 'react';
import Hero from '../components/Hero';
import '../components/reset.css';

/*
keeping this for future reference on how to use styled components or tailwind
shorthand
const Button = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-800 text-white p-2 rounded`}
`;

or use the shorthand version
const Button = tw.button`
   bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
`;
*/

const IndexPage = () => (
  <div>
    <Hero />
  </div>
);

export default IndexPage;
