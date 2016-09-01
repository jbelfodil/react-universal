import mapper from'mapper.js';
import React from'react';
import ReactDOMServer from 'react-dom/server';

//component
import Home from "./home";
import Wrapper from "./../wrapper";

//data from finder
import data from "./../../data.json";


module.exports = (req, res, next) => {

  const schema = {
    title: true,
    subtitle: true,
    image: true,
    articles: [{
      title: true,
      id: true,
      author: {
        name: true,
        lastname: true
      }
    }]
  };

  const pureData = mapper(data, schema);

  const html = ReactDOMServer.renderToString(
    <Wrapper className="Home" pureData={pureData}>
      <Home {...pureData} />
    </Wrapper>
  );

  res.send('<!doctype html>' + html);
};
