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

### Done page

1. contact
2. services
3. not found page
4. book shipping component
5. contact page is done with EmailJS
6. jwt authenticated all services routes
7. jwt authenticated all review routes

### special works

1. Multi step form with react hook form, and React Context
2. authentication using node, express and mongodb
3. password Bcrypt is done with Bcrypt.js
4. User can't provide quotation before login / register

### PROBLEMS

1. headerTop e page refresh dile user er name dekhasse na (solved)
2. registration is completely done (solved)
3. user k remove dile swal fire hoi na, and automatic logout hoi jasse, tai jakei remove kori na keno?
4. useToken automatic get hosse, and undefined value thakleu automatic peye jasse... jar jonne auto redirect and accessToken set kora jasse na..

5. login and register korle just id ta locally set hosse, and email data register collectiion e jasse, kintu user collection e jasse na.. bcz token call houyar agai page navigate hoi jasse.. pore jdi register/login compo te jai, tkhn abr token call hoi, and jwt ti locally set hoi

6. logout korar pore Dashboard link vanish holeu, keu jdi url e dashboard likhe, taile tw sha automatic redirect korbe, but oikhane loader dekhasse....oikhane loader na dekhiye, user jdi inactive thake, taile automatic redirect kora uchit
