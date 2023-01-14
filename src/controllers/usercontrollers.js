const UserModel = require("../Models/Usermodels")
const ContactModel = require("../Models/contactmodel")

module.exports = {

    // cretate user
    Createuser: async (req, res) => {
        try {

            const UniqueEmail = await UserModel.findOne({ email: req.body.email })
            console.log(UniqueEmail);
            if (UniqueEmail)
                return res.status(400).send({ msg: "Email already exists" })


            const createuser = await UserModel.create(req.body)
            return res.status(201).send({ msg: "created successfully", data: createuser })
        } catch (error) {
            res.status(500).send(error.message)
        }
    },

    // Filter user by department
    filterUser: async (req, res) => {

        const getuser = await UserModel.find({ _id: { $nin: [req.params.id] }, department: req.query.department })
        return res.status(201).send({ data: getuser })

    },

    //get contact list for perticular user
    getcontactlist: async (req, res) => {

        const getContact = await ContactModel.find({
            UserId: req.params.userid
        }).collation({ 'locale': 'en' })// to remove the case sensitivity  while sorting
            .sort({ 'name': 1 })
        
        if (getContact.length == 0)
            return res.status(404).send({ msg: "Contact not found" })

        return res.status(201).send({ data: getContact })

    }

}