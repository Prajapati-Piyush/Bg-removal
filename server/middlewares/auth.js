import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers;

        if (!token) {
            return res.json({ success: false, message: "Not authorized" });
        }

        const token_decode = jwt.decode(token);

        // ✅ FIX: Ensure req.body exists
        if (!req.body) req.body = {};

        req.body.clerkId = token_decode.clerkId;

        next();
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};

export default authUser;