// src/Page.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Page = ({ title }) => {
  const { pageId } = useParams();
  return (
    <div>
      <h1>{title || pageId}</h1>
      <p>Content for {title || pageId} page goes here.</p>
    </div>
  );
};

export default Page;
