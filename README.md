# Expressbiz Australian based website

[Live Link]().

## Available Dependencies

1. Tailwind
2. npm i daisyui
3. npm install react-router-dom@6
4. Font Awesome
5. npm install react-hook-form
6. npm install sweetalert2
7. npm i bcrypt
8. npm i swiper
9. npm install @emailjs/browser --save
10. npm install --save @stripe/react-stripe-js @stripe/stripe-js
11. npm install geo-distance-helper
12. npm install @mui/material @emotion/react @emotion/styled
13.

### Done page

1. contact
2. services
3. not found page
4. book shipping component
5. contact page is done with EmailJS
6. jwt authenticated all services routes
7. jwt authenticated all review routes
8. npm install tw-elements

### special works

1. Multi step form with react hook form, and React Context
2. authentication using node, express and mongodb
3. password Bcrypt is done with Bcrypt.js
4. User can't provide quotation before login / register
5. An Admin can't make shipment
6. Destination routing with google maps api for shipment
7. Edit profile with multer
8. anyone can change their old password from dashboard/edit-profile

### PROBLEMS

3. user k remove dile swal fire hoi na, and automatic logout hoi jasse, tai jakei remove kori na keno?

4. shipment history route e loader dekhate hbe

5. require user, user jdi na thake taile login e niye jabe, and login korar pore automatic agar route e niye ashbe, but seta hosse na. requireUser e problem maybe

6. payment korte giye problem hosse, server error disse..

7. EditProfile.jsx ee localhost er link ta pore replace kora lagbe..
8. profile.jsx ee responsive problem...mobile korle, nicher div dekhai jai na..
9. payment price not sent to backend...
10. payment complete hoile tader email e janai dite hbe koto dollar katsi, and date, time and product etc er jonne

// Forgot Password Process

1. user clicks on forgot password
2. create a reset token (string) and save in our db
3. send reset token to user email in the form of a link
4. when user clicks the link, compare the reset token in the link with that saved in db
5. if they match, change reset the user's password

// forgot password steps

1. create forgot password route
2. create token model
3. create email sender
4. create controller function

// change password steps

1. user clicks on change password
2. Form has to be 3 inputs tag. a) Old Password b) New Password c) Confirm Password
