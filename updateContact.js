//  Write a pseudo of “UpdateContact” function
// what arguments it will get?
// What will it return?
// Describe in high level the steps this function will do.


function updateContacts(connectionString, query, validator)
    check if connection is good
    check if query is valid
    for db accesed via connectionString
        execude the query
    then if validator is provide, check if validation  passes
    if ok => return the number of raws affected
    else print error and handle error
