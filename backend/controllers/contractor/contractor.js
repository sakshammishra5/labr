const Contractor = require('../../models/contractorSchema');
module.exports.addContractor = async (req, res) => {
    try {
        const { username, email, phoneno, password, typeofContractor, laboursWorkingUnder,location,city,image } = req.body;
        let isContractorExist = await Contractor.findOne({ phoneno })
        if (isContractorExist) {
            return res.status(400).json({ message: 'Contractor already exists' });
        }
        const contractor = new Contractor({ username, email, phoneno, password, typeofContractor, laboursWorkingUnder,location,city,image});
        await contractor.save();
        res.status(201).json({ message: 'Contractor added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}