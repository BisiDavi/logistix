import data from '@json/homepage.json';

export default function handler(req, res) {
    return res.status(200).json(data);
}
