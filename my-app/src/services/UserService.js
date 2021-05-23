
export async function getAllUsers(data) {
    try{
        
        const response = await fetch('/api/users/'+data.searchKey+'');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createUser(data) {
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}