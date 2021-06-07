


export function setLogin()
{
    localStorage.setItem('login',true)
}

export function isLogedin(){
    
    return localStorage.getItem('login')
}
export function logout(){
  localStorage.clear()
  window.location.reload();
}

