import React, { useState } from "react"
import { Avatar, Button, Grid, Typography, Container, Paper } from "@material-ui/core"
import { GoogleLogin } from "@react-oauth/google"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles"
import Input from "./Input"
import { useDispatch } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { signin, signup } from '../../actions/auth'


const intialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

const Auth = () => {
  const classes = useStyles()
  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setIsSignup] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState(intialState)



  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (isSignup) {
      dispatch(signup(formData, navigate))
    } else {
      dispatch(signin(formData, navigate))

    }
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

  }
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup)
    handleShowPassword(false)
  }
  const createOrgetUser = async (response) => {
    const result = jwtDecode(response.credential)


    try {
      dispatch({ type: 'AUTH', data: { result } })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}

            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? "Sign Up" : "Sign In"}</Button>

          <GoogleLogin
            onSuccess={
              (response) => {
                createOrgetUser(response)
              }
            }
            onError={
              (error) => {
                console.log(error)
              }
            }
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}


export default Auth





