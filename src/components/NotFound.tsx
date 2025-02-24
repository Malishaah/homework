const NotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-lg mt-2">Oops! Sidan kunde inte hittas.</p>
        <a href="/" className="text-blue-500 mt-4">Tillbaka till startsidan</a>
      </div>
    );
  };
  
  export default NotFound;
  