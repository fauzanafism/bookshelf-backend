const addBookHandler = (request, h) => {
    const { name, year, author, summary, publisher, readPage, reading } = request.payload;
};

module.exports = {addBookHandler};