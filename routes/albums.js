var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/album-demo');
var albumCollection = db.get('albums');

router.get('/albums/new', function(req, res, next) {
  console.log(req.body);
  res.render('albums/new');
});

router.get('/albums', function(req, res, next) {
  albumCollection.find({}, function (err, records) {
    res.render('albums/index', {allAlbums: records});
  });
});

router.get('/albums/:id', function(req, res, next) {
  albumCollection.findOne({_id: req.params.id}, function (err, record) {
    res.render('albums/show', {theAlbum: record});
  });
});

router.get('/albums/:id/edit', function(req, res, next) {
  albumCollection.findOne({_id: req.params.id}, function (err, record) {
    res.render('albums/edit', {theAlbum: record});
  });
});

router.post('/albums/:id/update', function(req, res, next) {
  albumCollection.update(
    {_id: req.params.id},
    {name: req.body.album,
    artist: req.body.artist,
    genre: req.body.genre,
    rating: req.body.rating,
    explicit: req.body.explicit
    })
  res.redirect('/albums/')
});

router.post('/albums' , function(req,res,next){
  albumCollection.insert({
    name: req.body.album,
    artist: req.body.artist,
    genre: req.body.genre,
    rating: req.body.rating,
    explicit: req.body.explicit
    })
  res.redirect('/albums/')
});

router.post('/albums/:id/delete' , function(req,res,next){
  albumCollection.remove({_id: req.params.id})
  res.redirect('/albums/')
});


module.exports = router;
