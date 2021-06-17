import React from 'react';
import SectionLoader from 'src/loading/SectionLoader';
import { TextCard } from '@styles/.';

const Section = ({ data }) => {
    return (
        <div className='section'>
            {data !== null
                ? data.map((item, index) => (
                      <TextCard className='section-content' key={index}>
                          <img src={item.img} />
                          <div className='text'>
                              <h3 className='my-1'>{item.title} </h3>
                              <p className='my-1'>{item.description}</p>
                          </div>
                      </TextCard>
                  ))
                : Array(3)
                      .fill(3)
                      .map((val, index) => (
                          <div key={index} className='loader mx-3'>
                              <SectionLoader />
                          </div>
                      ))}
            <style jsx>
                {`
                    .section {
                        background-color: white;
                    }
                `}
            </style>
        </div>
    );
};

export default Section;
