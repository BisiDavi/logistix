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
                    img {
                        height: 100%;
                        width: 100%;
                    }
                    .section-content {
                        display: flex;
                        flex-direction: column;
                        font-family: 'Roboto', sans-serif;
                        margin: 10px;
                        padding: 10px;
                        box-shadow: 1px 10px 20px 10px #fff2d9;
                    }
                    .section-content h3,
                    .section-content p {
                        text-align: center;
                    }
                `}
            </style>
        </div>
    );
};

export default Section;
