const generateRandomNumber = (number) => {
    const randomNumber = Math.floor(Math.random() * number);
    return randomNumber;
};

export const randomImagesArray = [
    '/dispatcher.jpg',
    '/deliveryCar.webp',
    '/deliveryBoy.jpg',
    '/deliveryTruck.webp',
];

export const generateRandomImages = () => {
    const selectedImage = randomImagesArray[generateRandomNumber(4)];
    return selectedImage;
};

export default generateRandomNumber;
