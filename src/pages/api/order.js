import nc from 'next-connect';
import all from '../../middlewares/index';

const handler = nc();

handler.use(all);

export default handler.post(async function (req, res) {
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

    return res.status(200).json(order);
});
