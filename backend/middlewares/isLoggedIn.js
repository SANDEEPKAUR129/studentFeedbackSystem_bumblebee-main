const db = require('../dataBase/dataBase');
require('dotenv').config();
const jsonwt = require('jsonwebtoken');
 
 
 
// USER ATHENICATION
 
 
exports.isLoggedIn = async (req, res, next) => {
    if (req.cookies.jsonwt) {
        try {    
            const decoded = await jsonwt.verify(req.cookies.jsonwt, process.env.JSONWT_SECRET);
            const userId = decoded.id;
            if (!userId) {
                console.error('Error: User ID not found in JWT payload');
                return res.status(401).json({ status: 'Error', error: 'User ID not found' });
            }
            db.query("SELECT * FROM user WHERE id = ? ", [decoded.id], async (error, authData) => {
                if (error) {
                    console.error('Database Error:', error);
                    return res.json({ status: "Error", error: 'Database error' });
                }
                if (!authData.length) {
                    console.error('Fetch Error: No user found');
                    return res.json({ status: "Error", error: 'No user found' });
                }
                req.user = authData[0];
                next();
            });
        } catch (error) {
            console.error('Token Verification Error:', error);
            return res.json({ status: "Error", error: 'Failed to verify token' });
        }
    } else {
        console.error('Error: Session failed');
        return res.json({ status: "Error", error: 'Session failed' });
    }
};
 