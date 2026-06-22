import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'

import { Scheduling } from './models/Scheduling.js'

const app = express()
app.use(express.json())
app.use(cors({
  origin: ["https://barbershop-dun-beta.vercel.app", "https://barbershop-davidbenassuli-projects.vercel.app"]
}))

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3001

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('MongoDB conectado')

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })

app.get('/schedulings/:id', async(req, res) => {
    const id = req.params.id
    const scheduling = await Scheduling.findById(id)
    res.status(200).json(scheduling)
})

app.get('/schedulings', async (req, res) => {
    const { barber, day, month } = req.query

    const filter = {}

    if (barber) filter.barber = barber
    if (month) filter.month = month
    if (day) filter.day = day

    const schedulings = await Scheduling.find(filter)

    res.status(200).json(schedulings)
})

app.post('/schedulings', async (req, res) => {
    const scheduling = await Scheduling.create(req.body)
    res.status(201).json(scheduling)
})

app.patch('/schedulings/:id', async (req, res) => {
    const id = req.params.id
    const scheduling = await Scheduling.findByIdAndUpdate(id, req.body, {new: true})
    res.status(200).json(scheduling)
})

app.delete('/schedulings/:id', async (req, res) => {
    const id = req.params.id
    const scheduling = await Scheduling.findByIdAndDelete(id)
    res.status(200).json(scheduling)
})