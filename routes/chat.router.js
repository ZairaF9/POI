const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    try {
      res.json({
        'success':true,
        'message':'chat found successfully',
        'Data': 'chat'
    });
    } catch (error) {
      next(error);
    }
});

module.exports = router;