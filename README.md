# chat-app-backend


This is a chat app created with express server

Currently only the authentication part is completed for this app


Two routes are exposed: 

1) "/api/users/register" to register the user on the application. This returns a jwt along with user info. Password is hashed using bcrypt salt
<img width="1826" alt="image" src="https://github.com/NasirKhalidQ/chat-app-backend/assets/75773436/17bb5974-eee3-4dea-a647-d82037a79ad3">



2) "/api/users/login" to verify the login of a user if the password is correct. This also returns a new jwt.
<img width="1826" alt="image" src="https://github.com/NasirKhalidQ/chat-app-backend/assets/75773436/0e88a3d7-67d2-42df-9c1d-ab585a4ca65a">

    
Tested working through postman locally as well on the deployed version

Rest of the functionality for the app to come later

This app is deployed on heroku: https://chat-app-nasir-66bb41407f23.herokuapp.com
