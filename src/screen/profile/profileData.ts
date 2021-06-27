export function typeWords(name) {
    return [
        `<h5>Welcome <span style="color:#c85a5f;;">${name}</span> </h5>`,
        '<h5>Thanks for using <span style="color:#c85a5f;">Logistix</span></h5>',
    ];
}

export const ProfileTab = {
    defaultTab: 'userTab',
    id: 'profile',
    content: [
        { title: 'Profile', eventKey: 'userTab' },
        { title: 'Active Shipment', eventKey: 'activeShipment' },
        { title: 'History', eventKey: 'history' },
    ],
};

export const ActiveShipmentTab = [
    {
        status: 'In Progress',
        title: '* 100 cartons of Spagetti',
        pickupAddress: 'Daraju Factories, Agbara Ogun State',
        deliveryAddress: 'Inter Distribution Warehouse, Oko-Oba',
        rider: 'Amos',
        time: '12:45pm 16/06/2021',
    },
    {
        status: 'Delayed',
        title: '* 100 cartons of Spagetti',
        pickupAddress: 'Daraju Factories, Agbara Ogun State',
        deliveryAddress: 'Inter Distribution Warehouse, Oko-Oba',
        rider: 'Amos',
        time: '12:45pm 16/06/2021',
    },
    {
        status: 'Pending',
        title: '* 100 cartons of Spagetti',
        pickupAddress: 'Daraju Factories, Agbara Ogun State',
        deliveryAddress: 'Inter Distribution Warehouse, Oko-Oba',
        rider: 'Amos',
        time: '12:45pm 16/06/2021',
    },
    {
        status: 'Pending',
        title: '* 100 cartons of Spagetti',
        pickupAddress: 'Daraju Factories, Agbara Ogun State',
        deliveryAddress: 'Inter Distribution Warehouse, Oko-Oba',
        rider: 'Amos',
        time: '12:45pm 16/06/2021',
    },
    {
        status: 'Success',
        title: '* 50 cartons of Sugar',
        pickupAddress: 'Daraju Factories, Agbara Ogun State',
        deliveryAddress: 'Inter Distribution Warehouse, Oko-Oba',
        rider: 'Amos',
        time: '12:45pm 16/06/2021',
    },
    {
        status: 'Success',
        title: '* 50 cartons of Sugar',
        pickupAddress: 'Daraju Factories, Agbara Ogun State',
        deliveryAddress: 'Inter Distribution Warehouse, Oko-Oba',
        rider: 'Amos',
        time: '12:45pm 16/06/2021',
    },
];

export const HistoryTab = [
    {
        status: 'Success',
        title: '* 50 creates of Beer',
        pickupAddress: 'Daraju Factories, Agbara Ogun State',
        deliveryAddress: 'Inter Distribution Warehouse, Oko-Oba',
        rider: 'Amos',
        time: '12:45pm 16/06/2021',
    },
    {
        status: 'Success',
        title: '* 100 cartons of Spagetti',
        pickupAddress: 'Daraju Factories, Agbara Ogun State',
        deliveryAddress: 'Inter Distribution Warehouse, Oko-Oba',
        rider: 'Amos',
        time: '12:45pm 16/06/2021',
    },
    {
        status: 'Success',
        title: '* 100 cartons of Spagetti',
        pickupAddress: 'Daraju Factories, Agbara Ogun State',
        deliveryAddress: 'Inter Distribution Warehouse, Oko-Oba',
        rider: 'Amos',
        time: '12:45pm 16/06/2021',
    },
    {
        status: 'Success',
        title: '* 100 cartons of Spagetti',
        pickupAddress: 'Daraju Factories, Agbara Ogun State',
        deliveryAddress: 'Inter Distribution Warehouse, Oko-Oba',
        rider: 'Amos',
        time: '12:45pm 16/06/2021',
    },
    {
        status: 'Success',
        title: '* 50 cartons of Sugar',
        pickupAddress: 'Daraju Factories, Agbara Ogun State',
        deliveryAddress: 'Inter Distribution Warehouse, Oko-Oba',
        rider: 'Amos',
        time: '12:45pm 16/06/2021',
    },
    {
        status: 'Success',
        title: '* 50 cartons of Sugar',
        pickupAddress: 'Daraju Factories, Agbara Ogun State',
        deliveryAddress: 'Inter Distribution Warehouse, Oko-Oba',
        rider: 'Amos',
        time: '12:45pm 16/06/2021',
    },
];

export const userData = {
    name: 'Smith Daniels',
    phoneNumber: '08074521632',
    location: 'Inter Distribution Warehouse, Oko-Oba',
    email: 'smithdaniels@gmail.com',
    sex: 'male',
};

export function nameInitials(name) {
    const nameArray = name.split(' ');
    const firstName = nameArray[0];
    const lastName = nameArray[1];
    const firstLetterFirstName = firstName.split('')[0];
    const firstLetterLastName = lastName.split('')[0];
    const initials = `${firstLetterFirstName} ${firstLetterLastName}`;
    return initials;
}
