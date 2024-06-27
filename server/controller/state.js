import State from "../model/State.js"

export const getStates = async (req, res) => {
    const out = {}
    try {
        const data = await State.findAll({})

        out.message = "Success"
        out.error = false
        out.data = data

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}


