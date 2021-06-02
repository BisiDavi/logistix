import { TextAnimate } from '@components/.';
import { Pagelayout } from '@layout/.';

const Home = () => {
    return (
        <Pagelayout title='Get your products delivered just in time.'>
            <section>
                <TextAnimate />
            </section>
            <style jsx>
                {`
                    section {
                        background-color: #fff2d9;
                    }
                `}
            </style>
        </Pagelayout>
    );
};

export default Home;
