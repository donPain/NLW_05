type User  = {
    Name: String;
    Address:  {
        City: String;
        State: String;
    }
}

function CreateWelcomeMessage(user:User)
{
    return 'Bom dia, ${user.Name}!'
}

