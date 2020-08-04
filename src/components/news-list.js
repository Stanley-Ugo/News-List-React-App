import React from 'react';

const NewsList = (props) => {
    return (
        <>
          { props.news.map((item, index) => (
              <div key={index}>
                  <h3>{ item.title }</h3>
                  <div>
                      { item.feed }
                  </div>
              </div>
          ))}
        </>
    )
}

export default NewsList;