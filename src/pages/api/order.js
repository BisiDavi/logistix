import nc from 'next-connect';
import { all } from '@middlewares/.';

const handler = nc();

handler.use(all);

handler.post(async (req, res) => {
    const {
        deliveryAddress,
        parcel,
        pickupAddress,
        deliveryMethod,
        state,
    } = req.body;

    const order = await saveOrder(req.db, {
        deliveryAddress,
        parcel,
        pickupAddress,
        deliveryMethod,
        state,
    });

    res.status(200).json(order);
});

export default handler;
