import React from 'react';
import SectionLoader from 'src/loading/SectionLoader';
import { TextCard } from '@styles/.';

export default function Section({ data }) {
    return (
        <div className='section'>
            {data !== null
                ? data.map(function (item, index) {
                      return (
                          <TextCard className='section-content' key={index}>
                              <img src={item.img} />
                              <div className='text'>
                                  <h3 className='my-1'>{item.title} </h3>
                                  <p className='my-1'>{item.description}</p>
                              </div>
                          </TextCard>
                      );
                  })
                : Array(3)
                      .fill(3)
                      .map(function (val, index) {
                          return (
                              <div key={index} className='loader mx-3'>
                                  <SectionLoader />
                              </div>
                          );
                      })}
            <style jsx>
                {`
                    .section {
                        background-color: white;
                    }
                `}
            </style>
        </div>
    );
}
