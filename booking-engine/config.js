// config.js
const config = {
    hotelName: "Jungle Hotel Tulum Airport",
    rooms: [
        {
            name: "Jungle Suite 1",
            maxOccupancy: 2,
            pricePerNight: 200
        },
        {
            name: "Jungle Suite 2",
            maxOccupancy: 2,
            pricePerNight: 220
        }
    ],
    bookingEngineAPI: "https://example-booking-engine.com/api",
    bookingEngineKey: "your-api-key-here"
};

export default config;