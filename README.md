# Lab1_PROG8185-22F-Sec1-Web
Client side:

Create a registration form with 2 buttons – Register and Cancel. The form takes following mandatory inputs before user hits registration.
User name – Alphanumeric
Email – Valid email format
Password – min 8 and max 16 chars and must include a special char
Phone number as an input– Numeric only with 9 char min
Allow user to click register button only if Java script validation passes for all above
If user clicks cancel button, then redirect user to www.conestogac.on.ca
At the time of registration, create a JSON to be passed to server side
Ensure to encode the password
sample {"User":"johndoe","email":"john@doe.com","password":"xAkHjKKss.", "Ph":"123456789",}
Save these params in a browser cookie that expires in 15 mins for reuse next time user hits registration page.
Create a footer on webpage with copyright symbol and your student info – name and ID.
Server side:

Receive the JSON object generated on client side and print/echo it (Decode the password while printing)
Connect to the Mongo DB and store the user JSON (remember to use connection string setup as mentioned below.
Use password_hash to store password hash in DB
Database:        

On Mongo db, create a new DB called LabDec
Create new table called user_registration with columns Username, email, passwordhash, phone number
Setup your DB connection ID “labwork” with empty password with appropriate privileges that you will use to connect/write to this DB table.     
