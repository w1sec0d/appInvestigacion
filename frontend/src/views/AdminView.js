const redirect = () => {
  window.location.href = 'http://localhost:8000/admin';
  // maybe can add spinner while loading
  return null;
}

export const AdminView = () => {
  redirect()
  return (
    <p>Redireccionando a admin</p>
  )
}
