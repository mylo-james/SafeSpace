const keys = [
    'bio',
    'location',
    'job',
    'salary',
    'clean',
    'smoke',
    'drink',
    'social',
];
const valid = (survey) => {
    return survey ? keys.every((key) => survey[key]) : false;
};

export default valid;
