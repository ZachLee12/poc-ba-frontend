import { useEffect, useState } from "react"
import { Button, Card, Alert } from "react-bootstrap"
import './TokenForm.css'

const TokenForm = () => {
    const [token, setToken] = useState('')
    const [serverResponse, setServerResponse] = useState('none')
    const [alertVariant, setAlertVariant] = useState('warning')

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
        const alertVariant = mapResponseStatus(response.status, data)
        setAlertVariant(alertVariant)
        setServerResponse(data)
    }

    const mapResponseStatus = (responseStatus, data) => {
        //just a quick way for now, to return a "warning" variant
        if (data.includes('expired')) {
            return "warning"
        }

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
        <Card id="TokenForm">
            <h3>Token</h3>
            <form className="TokenForm_form">
                <label htmlFor="token" className="TokenForm_label">
                    {/* <div className="TokenForm_label-text">Token:</div> */}
                    <input onChange={handleChange} type="text" />
                </label>

                <Button className="TokenForm_submit-btn" onClick={handleSubmit} variant="outline-primary">Submit</Button>
            </form>

            <Alert variant={alertVariant} className="TokenForm_server-alert">
                <div className="TokenForm_server-res-title">Server Response</div>
                <div className="TokenForm_server-res">{serverResponse.toUpperCase()}</div>
            </Alert>
        </Card>
    )
}

export default TokenForm