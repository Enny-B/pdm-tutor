
export const config = () => ({
    baseUrl: process.env.NODE_ENV === "development" ? "http://localhost:8000/v1/" : "",
    mode: process.env.NODE_ENV === "development" ? "test" : "live",
    callbackUrl: process.env.NODE_ENV === "development" ? "http://localhost:3000/success" : "https://ashopree.com/success",
    recaptcha: {
        site_key: "6Lfn-KonAAAAANCme6VH-IN-ey-uJxgctdQ_5rq1",
        secret_key: "6LfL6-opAAAAAE9Z6Q6n1J75qlNuZQI5ZGjoHonX"
    },
});

// const checker = process.env.NODE_ENV;
// console.log(checker);


// export default () => ({
//     baseUrl: process.env.NODE_ENV === "development" ? process.env.REACT_APP_API_URL : process.env.ASHOPREE_TEST_URL,
//     google: {
//         apiKey: 'AIzaSyC4b_d3enQHEGQpGQ1WragPd0L89xG4vGA',
//         mapUrl: 'https://maps.googleapis.com/maps/api'
//     },
//     mode: process.env.NODE_ENV === "development" ? "test" : "live",
//     callbackUrl: process.env.NODE_ENV === "development" ? "http://localhost:3000/success" : "https://ashopree.com/success",
//     recaptcha: {
//         site_key: "6Lfn-KonAAAAANCme6VH-IN-ey-uJxgctdQ_5rq1",
//         //The site key below is for ashopree only but somehow the one above is from pos.exbc and it's working.
//         // site_key: "6LfL6-opAAAAAEWHiWnTGqthfzHmoNw60j2yRj9G",
//         secret_key: "6LfL6-opAAAAAE9Z6Q6n1J75qlNuZQI5ZGjoHonX"
//     },
// });

