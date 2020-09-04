import express from 'express';
const router = express.Router();

// Include functionality for User Login
router.post('/init', (req, res) => {
    res.json({ status: 'OK', code: 200 });
    console.log("We're init..")
});

module.exports = router;