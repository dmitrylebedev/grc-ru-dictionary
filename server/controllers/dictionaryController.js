const mongoose = require('mongoose');
const Word = mongoose.model('Word');

exports.renderHomePage = (req, res) => {
  res.render('index');
};

exports.renderAddWord = (req, res) => {
  res.render('addWord', {title: 'Add word'})
};

exports.createWord = async (req, res) => {
  const newWord = new Word(req.body);
  await newWord.save();
  res.redirect('/')
};

exports.renderSearchWordResults = async (req, res) => {
  let words = await searchWord(req, res)
  res.render('index', {word: words[0]})
};

exports.searchWord = async (req, res) => {
  res.json(await searchWord(req, res));
};

async function searchWord(req) {
  return Word
  // first find stores that match
    .find({
      $text: {
        $search: req.query.q
      }
    }, {
      score: { $meta: 'textScore' }
    })
    // the sort them
    .sort({
      score: { $meta: 'textScore' }
    })
    // limit to only 5 results
    .limit(5);
}
