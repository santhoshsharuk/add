exports.handler = async function () {
    return {
        statusCode: 200,
        body: JSON.stringify({
            API_URL: process.env.API_URL
        })
    };
};
