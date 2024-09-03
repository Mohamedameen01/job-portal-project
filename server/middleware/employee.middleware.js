export const checkEmployeeRole = (req, res, next) => {
    try {
        const user =req.user;
        if (user.role !== "Employee") {
            return res.status(400).json({message: "There is something wrong with role selection"});
        }

        next();
    } catch (error) {
        res.status(500).json({message: "Server error" })
    }
}