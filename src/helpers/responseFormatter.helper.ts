export const formateResponse = (data: object | null, statusCode: number = 200) => ({
    code: statusCode,
    payload: data
})