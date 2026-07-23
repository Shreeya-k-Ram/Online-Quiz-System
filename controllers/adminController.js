const loginAdmin = (req, res) => {
    const { username, password } = req.body;

    // Temporary credentials
    if (username === "admin" && password === "admin123") {
        return res.status(200).json({
            success: true,
            message: "Admin Login Successful"
        });
    }

    res.status(401).json({
        success: false,
        message: "Invalid Username or Password"
    });
};

module.exports = {
    loginAdmin
};