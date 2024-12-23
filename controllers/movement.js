import movementModel from '../models/movement.js'

class movementController {
    constructor() {

    }

    async create(req,res) {
        try {
            const data = await movementModel.create(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }

    }


    async update (req,res) {
        try {
            const { id } = req.params; 
            const data = await movementModel.update(id , req.body);
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send(e);
        }

    }

    async delete(req,res) {
        try {
            const { id } = req.params; 
            const data = await movementModel.delete(id);
            res.status(206).json(data)
        } catch (e) {
            res.status(500).send(e);
        }

    }

    async getAll(req,res) {
        try {
            const data = await movementModel.getAll();
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }


    async getOne(req,res) {
        try {
            const { id } = req.params; 
            const data = await movementModel.getOne(id);
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e);
        }

    }

}


export default new movementController();
