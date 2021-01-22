import React, { useState } from 'react'
import { Button, Container, CssBaseline, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../AuthContext'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '150px',
    },
    signup: {
        textAlign: 'center',
        marginBottom: '10px'
    }, 
    signbutton: {
        margin: '10px 0px'
    }
  }));

const Login = () => {

    const classes = useStyles();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const { login } = useAuth()

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        try {
            setError("")
            setLoading(true)
            await login(email, password)
            history.push("/home")
          } catch {
            setError("Failed to log in")
          }
      
          setLoading(false)
    }

    return (
        <div className={classes.root}>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div >
                <Typography component="h1" variant="h5" className={classes.signup}>
                Login
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
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    className={classes.signbutton}
                >
                    Login
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                    <Link to='/register' variant="body2">
                        Don't have an account? Sign up
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            </Container>
        </div>
    )
}

export default Login