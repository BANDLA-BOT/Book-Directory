const Book = require("../model/book.js");


const searchBook = async(req,res)=>{
  try {
    const query = req.query.search;
    const books = await Book.find({
        $or: [
            { title: { $regex: query, $options: 'i' } },
            { author: { $regex: query, $options: 'i' } },
            { genre: { $regex: query, $options: 'i' } }
        ]
    });
    res.json(books);
} catch (error) {
    res.status(500).json({ message: 'Error searching books', error });
}

  
}
const getAll = async (req, res, next) => {
  try {
    const book = await Book.find();
    if (!book) {
      res.status(404).json({ message: "Books not found" });
    }
    res.status(200).json({ message: "Books found are", Books: book });
  } catch (error) {
    res.json({ message: "Error while fetching ", error });
  }
};
const getBookById = async(req,res,next)=>{
    const {id} = req.params;
    try {
        const book = await Book.findById(id);
        if(book){
            res.status(200).json({message:"Book Found", book:book})
        }
        else{
            res.json({message:"Book not found"})
        }
    } catch (error) {
        res.status(400).json({message:"Error while fetching book by ID"})
    }

}
const postBook = async (req, res, next) => {
  const { title, author, year, genre } = req.body;
  try {
    const book = await Book.create({
      title,
      author,
      year,
      genre,
    });
    res.json({ message: "Book Uploaded successfully", Book: book });
  } catch (error) {
    res.json({ message: "Error while uploading Books", error: error.message });
  }
};
const deleteBook = async (req, res, next) => {
  const { id } = req.params;
  try {
    const book = await Book.findByIdAndDelete(id);
    if (book) {
      res.status(200).json({ message: "Book deleted Successfully" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while deleting Book", error: error.message });
  }
};
const updateBook = async (req, res, next) => {
  const { id } = req.params;
  const { title, author, year, genre } = req.body;
  try {
    const book = await Book.findByIdAndUpdate(
      id,
      { title: title, author: author, year: year, genre: genre },
      { new: true }
    );
    if(book){
        res.status(200).json({message:"Updated successfully",book});
    }
    else{
        res.status(404).json({message:"Book not found"});
    }
  } catch (err) {
    res.status(400).json({message:"Error while updating Book", error:err.message})
  }
};

module.exports = { getAll, postBook, deleteBook, updateBook,getBookById,searchBook};
