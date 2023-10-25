import { useEffect, useState } from "react"


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
            <form onSubmit={handleSubmit}>
                <label htmlFor="token">
                    Token:
                    <input onChange={handleChange} type="text" />
                </label>

                <button className="submit-btn">Submit</button>
            </form>

            <h1>Server Response (CoP):</h1>
            <h2>{serverResponse} </h2>
        </div>
    )
}

export default TokenForm