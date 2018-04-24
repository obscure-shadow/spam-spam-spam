let emaildb = []

customerdb.forEach( (cust) => {
    cust.contacts.email.forEach((custy) => {
        emaildb.push(custy)
    }

    )
}
)
console.log(emaildb)