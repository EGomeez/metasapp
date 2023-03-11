function Principal({ children }) {
    return (
      <>
        <nav>
            <a href="/lista">Lista</a>
            <a href="/Crear">Crear</a>
        </nav>
        <main>
            {children}
        </main>
      </>
    );
  }
  
  export default Principal;