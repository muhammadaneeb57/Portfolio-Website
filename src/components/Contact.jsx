import React from "react";

function Contact() {
  const email = "muhammadaneeb24@gmail.com";
  const githubUrl = "https://github.com/muhammadaneeb57"; // Replace with your GitHub URL
  const linkedinUrl = "https://linkedin.com/in/muhammadaneeb1"; // Replace with your LinkedIn URL

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="contact" className="py-20 bg-white text-center ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className=" text-slate-800 text-3xl font-bold mb-8">Contact Me</h2>
        <p className="text-gray-700 mb-6">
          If you would like to hire me or work on a project together, feel free
          to shoot me an email on
          <br />
          <span className="text-black">{email}</span> using the button below.
        </p>
        <button
          type="button"
          onClick={handleEmailClick}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 mb-4"
        >
          Send Email
        </button>
        <div className="mt-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold text-blue-500 mr-4"
          >
            GitHub
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold text-blue-500"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
