import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ status: "OK", code: 200 });
    console.log("ET Node Home.")
});

module.exports = router;
