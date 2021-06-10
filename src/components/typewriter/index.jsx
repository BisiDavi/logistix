import { Fragment } from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterEffect = ({ words }) => {
    return (
        <Typewriter
            options={{
                strings: words,
                autoStart: true,
                loop: true,
            }}
        />
    );
};

export default TypewriterEffect;
