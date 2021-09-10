import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { styled } from 'twin.macro';

const NotFoundContainer = styled.main`
  color: #232129;
  padding: 96px;
  font-family: -apple-system, Roboto, sans-serif, serif;
  text-align: center;
  h1 {
    margin: 0;
  }
`;

// markup
const NotFoundPage = () => {
  return (
    <>
      <title>Not found</title>
      <NotFoundContainer>
        <h1>Page not found</h1>
        <StaticImage
          src="../images/404.png"
          alt="picture of me"
          placeholder="blurred"
        />
        <p>
          Sorry 😔 we couldn’t find what you were looking for.
          <br /> <Link to="/">Go back home</Link>.
        </p>
      </NotFoundContainer>
    </>
  );
};

export default NotFoundPage;
