# This is from a take-home assessment I completed over a few hours of work. Built using React, TailwindCSS, Webpack, Express, and MongoDB
## To run the Express API.
  1. There needs to be an .env file with a MONGODB_URL variable.
  2. Make sure to run npm install
  3. npm run build
  4. npm run start
### Express Routes
  1. cola/getAll
    - Gets all the colas for the vending machine.
  2. cola/buyOne/:id
    - Buy a single cola from an id.
  3. cola/updateOne/:id
    - Updates a single cola's cost and num_available values.
  
## To run the React application.
  1. Make sure to run npm install
  2. npm run build
  3. npm run start
  
### How to use the React application
  - There are two roles admin and user. An admin can update a colas cost and num_available values. Currently, roles can only be changed by pressing the change roles button in the top left corner.
  - The amount spent by a user is at the top.
  - Press the button next to a colas description to to purchase one, the first cola purchased with appear in the dispenser at the bottom. Don't forget to take it!
  
### User view
![vending-machine-assessment-screenshot](https://user-images.githubusercontent.com/50780917/176020262-0f152fa8-b43e-42a0-a334-c53b83bebb14.png)

### Admin View
![vending-machine-assessment-admin](https://user-images.githubusercontent.com/50780917/176021838-a2b5fe89-a757-421a-878b-42b51bb84314.png)
