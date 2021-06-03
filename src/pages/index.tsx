import { TextAnimate } from '@components/.';
import { Pagelayout } from '@layout/.';
//#c85a5f
const Home = () => {
    return (
        <Pagelayout title='Get your products delivered just in time.'>
            <>
                <section>
                    <div className='animateText'>
                        <TextAnimate />
                    </div>
                </section>
                <style jsx>
                    {`
                        section {
                            background-color: #fff2d9;
                            height: 60vh;
                            width: 100%;
                            margin-top: -20px;
                            padding-top: 40px;
                        }
                        .animateText {
                            background-color: rgba(255, 255, 255, 0.7);
                            backdrop-filter: blur(5px);
                            margin: auto;
                            width: 90%;
                            display: flex;
                        }
                    `}
                </style>
            </>
        </Pagelayout>
    );
};

export default Home;
