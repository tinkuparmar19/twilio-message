import React, { useState } from 'react'
import { Button, Container, CssBaseline, Grid, TextField, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../AuthContext'

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const { signup } = useAuth()

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        if(password !== confirmPassword) {
            return setError('password do not match')
        }

        try {
            setError("")
            setLoading(true)    
            await signup(email, password)
            history.push('/login')
        } catch(e) {
            setError('failed to create account')
            console.log(e)
        }
        setLoading(false)
    }
    return (
        <div>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div >
                <Typography component="h1" variant="h5">
                Sign up
                </Typography>
                { error && <Alert severity="error">{error}</Alert>}
                <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        variant="outlined"
                        required
                        fullWidth
                        name="confirm password"
                        label="confirm Password"
                        type="password"
                        id="confirm password"
                    />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={loading}
                >
                    Sign Up
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                    <Link to='/login' variant="body2">
                        Already have an account? Login
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            </Container>
        </div>
    )
}

export default Signup
