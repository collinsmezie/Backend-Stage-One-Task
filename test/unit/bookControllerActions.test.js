const bookActions = require('../../controllers/testbookController');
const Book = require('../../models/book');

jest.setTimeout(15000);

const books = [
    {
        "_id": "65bb8416e6ca74a2c56c4c9b",
        "title": "Grokking Algorithms",
        "__v": 0
    },
    {
        "_id": "65bb97af366dcc67dc231399",
        "title": "Data Science",
        "__v": 0
    },
    {
        "_id": "65bb97be366dcc67dc23139c",
        "title": "Computer Science",
        "__v": 0
    }
]

jest.mock('../../models/book');

// Book.find.mockResolvedValue(books);


describe("testBooks controller actions", () => {

    it("should return all the books", async () => {

        const req = {};
        const res = {
            json: jest.fn().mockReturnThis(),
            status: jest.fn().mockReturnThis()
        };


        // const result = await bookActions.getAllBooks(req, res);
        
        const result = await expect(bookActions.getAllBooks(req, res)).resolves.toMatchObject(books);
        console.log("RESULT HERE", result); 

        expect(Book.find).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledWith(books);
        expect(res.status).not.toHaveBeenCalled();

    });
})