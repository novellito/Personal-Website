import React from 'react';
import tw, { styled } from 'twin.macro';

const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);

  padding: 30px 50px;
  .card {
    background-color: #282a36;
    box-shadow: 0 3px 0 #6272a4;
    margin: 20px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const Projects = () => {
  return (
    <ProjectsContainer>
      <div className="card" tw="mx-auto rounded overflow-hidden ">
        <div tw="px-6 py-4">
          <div tw="font-bold text-xl mb-2 text-white	">Mountain</div>
          <p tw="text-gray-300 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div tw="px-6  pb-2">
          <span tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>

      <div className="card" tw="rounded overflow-hidden ">
        <div tw="px-6 py-4">
          <div tw="font-bold text-xl mb-2 text-white	">Mountain</div>
          <p tw="text-gray-300 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div tw="px-6  pb-2">
          <span tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>

      <div className="card" tw="rounded overflow-hidden ">
        <div tw="px-6 py-4">
          <div tw="font-bold text-xl mb-2 text-white	">Mountain</div>
          <p tw="text-gray-300 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div tw="px-6  pb-2">
          <span tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
