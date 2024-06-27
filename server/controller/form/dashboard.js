import Form from "../../model/form/Form.js"

export const kaziDashboard = async (req, res) => {
    const out = {}
    try {

        const getReject = await Form.findAll({
            where: {
                rejected: 1
            }
        })
        const getPending = await Form.findAll({
            where: {
                non_verified: 0
            }
        })
        const getQuery = await Form.findAll({
            where: {
                query_status: 1
            }
        })
        const getDelivered = await Form.findAll({
            where: {
                delivered: 1
            }
        })

        const temp = {
            "rejected": getReject,
            "pending": getPending,
            "query": getQuery,
            "delivered": getDelivered,
        }

        out.message = "Success"
        out.error = false
        out.data = temp

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}