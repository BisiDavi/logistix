import React from 'react';
import SectionLoader from 'src/loading/SectionLoader';

const Section = ({ data }) => {
    return (
        <div className='section'>
            {data !== null
                ? data.map((item, index) => (
                      <section className='section-content' key={index}>
                          <img src={item.img} />
                          <h3 className='my-1'>{item.title} </h3>
                          <p className='my-1'>{item.description}</p>
                      </section>
                  ))
                : Array(3)
                      .fill(3)
                      .map((val, index) => (
                          <div key={index} className='loader'>
                              <SectionLoader />
                          </div>
                      ))}
            <style jsx>
                {`
                    .section {
                        display: flex;
                        flex-direction: column;
                    }
                    .section-content {
                        display: flex;
                        flex-direction: column;
                        font-family: 'Roboto', sans-serif;
                    }
                `}
            </style>
        </div>
    );
};

export default Section;
