import { nanoid } from 'nanoid';

export async function saveOrder(
    db,
    { deliveryAddress, parcel, pickupAddress, deliveryMethod, state },
) {
    return db
        .collection('orders')
        .inseretOne({
            _id: nanoid(12),
            deliveryAddress,
            parcel,
            pickupAddress,
            deliveryMethod,
            state,
        })
        .then(({ ops }) => {
            ops[0];
            console.log('ops', ops);
        });
}
