
import React from "react";

// Dummy Data
const dummyFAQs = [
  {
    question: "How do I submit a complaint?",
    answer: "To submit a complaint, go to the 'Submit Complaint' section and fill out the form."
  },
  {
    question: "How can I track my complaint?",
    answer: "You can track your complaint by navigating to the 'Track Complaint' section and entering your complaint ID."
  },
  {
    question: "What do the different complaint statuses mean?",
    answer: "Statuses include: 'Pending' (complaint received), 'Under Review' (being processed), and 'Resolved' (issue addressed)."
  }
];

const dummyContactInfo = {
  email: "support@dha.com",
  phone: "+92345678909",
  hours: "Mon-Fri, 9am-5pm"
};

const HelpAndSupport = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Help & Support</h1>

      {/* Introduction */}
      <section>
        <h2>Introduction</h2>
        <p>
          Welcome to the Help and Support page. Here you can find information on how to submit and track complaints, along with answers to common questions.
        </p>
      </section>

      {/* FAQs */}
      <section>
        <h2>Frequently Asked Questions</h2>
        <ul>
          {dummyFAQs.map((faq, index) => (
            <li key={index} style={{ marginBottom: "15px" }}>
              <strong>Q: {faq.question}</strong>
              <p>A: {faq.answer}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Support */}
      <section>
        <h2>Contact Support</h2>
        <p>If you need further assistance, please contact us:</p>
        <ul>
          <li><strong>Email:</strong> {dummyContactInfo.email}</li>
          <li><strong>Phone:</strong> {dummyContactInfo.phone}</li>
          <li><strong>Support Hours:</strong> {dummyContactInfo.hours}</li>
        </ul>
      </section>
    </div>
  );
};

export default HelpAndSupport;
