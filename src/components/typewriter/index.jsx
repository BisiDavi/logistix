import React from 'react';
import Typewriter from 'typewriter-effect';

export default function TypewriterEffect({ words }) {
    return (
        <Typewriter
            options={{
                strings: words,
                autoStart: true,
                loop: true,
            }}
        />
    );
}
