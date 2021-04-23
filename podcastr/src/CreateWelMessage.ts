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

const WelcomeMessage = CreateWelcomeMessage({
    Name: 'Eduardo Donzeli',
    Address: {
        City: 'Araçatuba',
        state: 'São Paulo'
    }
})