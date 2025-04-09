const Labour = require('../../models/labourSchema');

module.exports.addLabour = async (req, res) => {
    try {
        const { username, phoneno, image, location, city, worktype, workingUnderContractor } = req.body;
        let isLabourExist = await Labour.findOne({ phoneno })
        if (isLabourExist) {
            return res.status(400).json({ message: 'Labour already exists' });
        }
        const labour = new Labour({ username, phoneno, image, location, city, worktype, workingUnderContractor });
        await labour.save();
        res.status(201).json({ message: 'Labour added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

