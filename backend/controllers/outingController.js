const Outing = require("../models/outingModel")

const { mongoose } = require("mongoose")

const getOutings = async (req, res) => {
    const outings = await Outing.find({}).sort({createdAt: -1})

    res.status(200).json(outings)
}

const getOuting = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error : 'No such outing'})
    }

    const outing = await Outing.findById(id)

    if (!outing) {
        return res.status(404).json({error : 'No such outing'})
    }

    res.status(200).json(outing)
}

const createOuting = async (req, res) => {
    const { leaveType, visitingPlace, reason, fromDate, fromTime, toDate, toTime, approvalStatus } = req.body

    try {
        const outing = await Outing.create({
            leaveType, 
            visitingPlace, 
            reason, 
            fromDate, 
            fromTime, 
            toDate, 
            toTime,
            approvalStatus
        })
        res.status(200).json(outing)
    } catch (error) {
        res.status(400).json({ error: error.message })
    } 

    //res.json({msg : 'POST an Outing Detail'})
}

const deleteOuting = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error : 'No such outing'})
    }

    const outing = await Outing.findOneAndDelete({_id : id})

    if (!outing) {
        return res.status(400).json({error : 'No such outing'})
    }

    res.status(200).json(outing)
}

const updateOuting = async (req, res) => {
    try {
        const outing = await Outing.findByIdAndUpdate(
          req.params.id,
          { approvalStatus: 'Approved' }, // Update the leaveStatus to 'Approved'
          { new: true } // Return the updated document
        );
    
        if (!outing) {
          return res.status(404).json({ message: 'Outing not found' });
        }
    
        res.json(outing); // Return the updated outing
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
}

module.exports = {
    getOuting,
    getOutings,
    createOuting,
    deleteOuting,
    updateOuting
}