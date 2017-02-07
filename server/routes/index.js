const express = require('express');
const router = express.Router();
const dictionaryController = require('../controllers/dictionaryController');
const mongoose = require('mongoose');
const Word = mongoose.model('Word');

const { catchErrors } = require('../handlers/errorHandlers')

router.get('/', dictionaryController.renderHomePage);
router.get('/add', dictionaryController.renderAddWord);
router.post('/add', catchErrors(dictionaryController.createWord));
 
router.get('/search', catchErrors(dictionaryController.renderSearchWordResults));


/*
 API
 */

router.get('/api/search', catchErrors(dictionaryController.searchWord));

module.exports = router;
