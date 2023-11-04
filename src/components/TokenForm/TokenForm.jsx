import { useEffect, useState } from "react"
import { Button, Card, Alert } from "react-bootstrap"

const TokenForm = () => {
    const [token, setToken] = useState('')
    const [serverResponse, setServerResponse] = useState('none')
    const [alertVariant, setAlertVariant] = useState('info')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setServerResponse('Loading...')
        const response = await fetch('http://localhost:5000/protected', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const { data } = await response.json()
        const alertVariant = mapResponseStatus(response.status)
        setAlertVariant(alertVariant)
        setServerResponse(data)
    }

    const mapResponseStatus = (responseStatus) => {
        if (responseStatus !== 200) {
            return 'danger'
        } else {
            return 'success'
        }
    }

    const handleChange = (e) => {
        setToken(e.target.value)
    }

    return (
        <div id="TokenForm">
            <h1>Form</h1>

            <form>
                <label htmlFor="token">
                    Token:
                    <input onChange={handleChange} type="text" />
                </label>

                <Button onClick={handleSubmit} variant="primary">Submit</Button>
            </form>

            <Alert variant={alertVariant}>
                Server Response (eg: CoP): {serverResponse.toUpperCase()}
            </Alert>

        </div>
    )
}

export default TokenForm