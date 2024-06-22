function App() {
  const sendEmail = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1></h1>
      <form onSubmit={sendEmail}>
        <button type="submit">send</button>
      </form>
    </div>
  );
}

export default App;
