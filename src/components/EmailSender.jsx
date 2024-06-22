import emailjs from "@emailjs/browser";
export default function EmailSender() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_r8v8vhv", //service_id
      "template_72vhxtq", // template_id
      e.target,
      "tRl_tRUBfRLeko-rI" // public_key
    );
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
