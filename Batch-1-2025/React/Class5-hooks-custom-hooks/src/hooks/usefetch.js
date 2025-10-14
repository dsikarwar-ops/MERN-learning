export const useFetch = async ({
    method = 'GET',
    body = {},
    headers = {},
    url = '/products/id',
}) => {
    const res = await fetch(`baseurl${url}`, {
        method,
        headers: {
            // common headers
            ...headers
        },
        body,
    });
    const data = await res.json()

    return data
};