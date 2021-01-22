import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useAuth } from '../AuthContext'
import { useHistory } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert'

function Home() {
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [sent, setSent] = useState(false)
    const { logout } = useAuth()
    const history = useHistory()

    const handleSubmit = async(e) => {
        e.preventDefault()
        const result = await fetch('/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({message})
        })
        if(!result.ok) {
            setSent(false)
        } else {
            setSent(true)
        }
    }

    async function handleLogOut() {
        setError("")
    
        try {
          await logout()
          history.push("/")
        } catch {
          setError("Failed to log out")
        }
      }

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <Typography component="h1" variant="h5">
                    send message
                </Typography>
                { sent && 
                        <Alert severity="success">message sent successfully</Alert> 
                }
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <TextField
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            variant="outlined"
                            required
                            fullWidth
                            id="message"
                            label="send message"
                            name="message"
                            autoComplete="message"
                        />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Send
                    </Button>
                </form>
                { error && <Alert severity="error">{error}</Alert>}
                <Grid container spacing={2}>
                <Grid item xs={12}>
                <Button
                    onClick={handleLogOut}
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Log Out
                </Button>
                </Grid>
                </Grid>
            </Container>
            
        </div>
    )
}

export default Home
