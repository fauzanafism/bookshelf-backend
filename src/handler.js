const addBookHandler = (request, h) => {
    const { name, year, author, summary, publisher, readPage, reading } = request.payload;

    const id = nanoid(16);
};

module.exports = {addBookHandler};