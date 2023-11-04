import { Accordion } from "react-bootstrap";
import './TokenStore.css'
import { Button } from "react-bootstrap"
import { BsFillClipboardFill } from 'react-icons/bs'
import { useRef } from "react";

const TokenStore = () => {
    const expTokenRef = useRef(null)

    const copyToClipboard = (elementRef) => (e) => {
        const copyToken = elementRef.current.innerText
        navigator.clipboard.writeText(copyToken);
    }

    return (
        <div id="TokenStore">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Expired Token</Accordion.Header>
                    <Accordion.Body className="TokenStore_text-wrap" style={{ whiteSpace: 'normal' }}>
                        <Button onClick={copyToClipboard(expTokenRef)} variant="outline-secondary">
                            <BsFillClipboardFill />
                        </Button>
                        <span ref={expTokenRef}>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RuYW1lIjoiemFjaCIsImxhc3RuYW1lIjoibGVlIiwiZW1haWwiOiJsZWV6aGVuZ3lhbmcyMkBnbWFpbC5jb20iLCJjb21wYW55IjoiMTIzNDUiLCJhcHByb3ZlZCI6ZmFsc2UsImlhdCI6MTY5ODIzNzY4MCwiZXhwIjoxNjk4NDE3NjgwfQ.hNb9lV-CQ4dDx-Up7OfDFy8RZq9yHdQjZp7VByOfdso</span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body className="TokenStore_text-wrap">

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default TokenStore