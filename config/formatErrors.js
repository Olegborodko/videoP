module.exports = (data) =>
{
    const errorsResult = {};
    let index = 0;
    data.errors.forEach(function (item) {
        if (!errorsResult[item.path]) {
            errorsResult[item.path] = {};
            index = 0;
        }
        if (!errorsResult[item.path][index]) {
            errorsResult[item.path][index] = {};
        }
        errorsResult[item.path][index] = item.message;
        index += 1;
    });
    return errorsResult;
}