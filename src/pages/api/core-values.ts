import data from '@json/homepage.json';

const handler = (req, res) => {
    res.status(200).json(data);
};

export default handler;
