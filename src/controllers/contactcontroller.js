const ContactModel = require("../Models/contactmodel")

module.exports = {
    // cretate user
    Createcontact: async (req, res) => {
        try {

            const UniqueEmail = await ContactModel.findOne({ email: req.body.email })

            if (UniqueEmail)
                return res.status(400).send({ msg: "Email already exists" })

            const createuser = await ContactModel.create(req.body)
            return res.status(201).send({ msg: "created successfully", data: createuser })
        } catch (error) {
            res.status(500).send(error.message)
        }
    },
    // search the contact
    SearchContactlist: async (req, res) => {

        const getuser = await ContactModel.find({
            "$or": [{ name: { $regex: req.params.key } },
            { role: { $regex: req.params.key } },
            { email: { $regex: req.params.key } }]
        })
        if (getuser.length == 0)
            return res.status(404).send({ msg: "Result not found" })

        return res.status(201).send({ data: getuser })

    }

}