function App() {
  const sendEmail = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={sendEmail}>
        <h1>Email Sender</h1>
        <button type="submit">send</button>
      </form>
    </div>
  );
}

export default App;
