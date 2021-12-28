const express = require('express');
const libros = require('../models/libros');
const router = express.Router();
const model = require('../models/libros')();

const Valor = require('../models/libros');

router.get('/', async (req, res) => {
    const libros = await Valor.find();
    console.log(libros);
    res.render('index.ejs', { libros });
});

router.post('/add', async (req, res) => {
    const valor = new Valor(req.body);
    await valor.save();
    res.redirect('/');
    /*res.json(libros);*/
});

router.get('/del/:id', async (req, res) => {
    const { id } = req.params;
    await Valor.findByIdAndRemove(id);
    res.redirect('/');
    //res.status(200).json(reg);
});

router.get('/edit/:id', async (req, res) => {
    try {
        const valor = await Valor.findById(req.params.id).lean()
        res.render('edit.ejs', { valor });
    } catch (error) {
        console.log(error.message);
    }
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Valor.findByIdAndUpdate(id, req.body);
    res.redirect('/');

});

module.exports = router;@