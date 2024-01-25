import { Form, Card, Button } from "react-bootstrap"
import axios from "axios"
import './LoginForm.css'
import { useState } from "react"


const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.post('http://localhost:3000/auth/login', formData)
            .then(res => console.log(res.data))
    }


    return (
        <Card id="LoginForm_card">
            <h3>Login</h3>
            <Form className="LoginForm_form" >
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control autoComplete="off" type="text" onChange={handleChange} name="username" value={formData.username} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={handleChange} name="password" value={formData.password} />
                </Form.Group>

                <Button onClick={handleLogin} variant="outline-primary">Login</Button>
            </Form>
        </Card >
    )

}

export default LoginForm