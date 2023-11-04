import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Accordion } from "react-bootstrap"

const TokenForm = () => {
    const [token, setToken] = useState('')
    const [serverResponse, setServerResponse] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setServerResponse('Loading...')
        const { data } = await (await fetch('http://localhost:5000/protected', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })).json()
        setServerResponse(data)
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

            <h1>Server Response (CoP):</h1>
            <h2>{serverResponse} </h2>
        </div>
    )
}

export default TokenForm