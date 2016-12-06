//  Write a pseudo of “UpdateContact” function
// what arguments it will get?
// What will it return?
// Describe in high level the steps this function will do.


function updateContacts(connectionString, query / data, validator)

check
if db exists
if connection is good
if user requesting is authorized

create Xhrhttp request / ajax request

then check
if query is valid and request type is Update
make sure there is a valid url

for db accesed via connectionString
if validation is needed
for the data then validate

execute the query or send the data.

if aplicable check validation passes
if ok, then
return the proper response code number and
return the result to the request as per the protocol

if needed perfom additional actions like console.log / logger log / send notifs / report number of rows affected
if error print error and handle error