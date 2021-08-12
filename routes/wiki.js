const router = require('express').Router();
const {Page} = require("../models")
const { addPage, editPage, main, userList, userPages, wikiPage } = require('../views/index');
// const client = require('../db');


router.get('/', async (req, res, next) => {
  try {
    const pages = await Page.findAll();
    console.log("PAGES:", pages)
    res.send(main(pages))
  } catch (error) {
    next(error)
  }
});

router.get('/add', async (req, res, next) => {
  try {
    // const pages = await Page.findAll();
    // console.log("PAGES:", pages)
    res.send(addPage());
  } catch (error) {
    next(error)
  }
});

router.post("/", (req, res)=>{
  console.log("REQ.BODY:", req.body);
  res.json(req.body);
});

router.get("/add", (req, res)=>{
  res.send("got to GET /wiki/add")
})

module.exports = router;
