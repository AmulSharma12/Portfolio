import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8e895c89-5073-4f77-9f86-63edb83e5311");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <h1 className="font-Ovo text-center text-lg mb-2">Let’s Connect</h1>
      <h3 className="font-Ovo text-center text-5xl">
        Reach Out and Say Hello!
      </h3>

      <p className="font-Ovo mx-auto max-w-2xl mt-5 mb-10 text-center">
        Got a question or just wanna say hi?&nbsp; Drop us a message—we’d love
        to hear from you!
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-14 mx-auto">
          <input
            type="text"
            placeholder="Rohit Sharma"
            name="name"
            required
            className="font-Ovo flex-1 py-2 px-4 border border-gray-400 rounded-md bg-white text-gray-700 dark:bg-darkHover dark:text-white dark:border-white/90"
          ></input>
          <input
            type="email"
            placeholder="rohit.sharma@gmail.com"
            name="email"
            required
            className="font-Ovo flex-1 py-2 px-4 border border-gray-400 rounded-md bg-white text-gray-700 dark:bg-darkHover dark:text-white dark:border-white/90"
          ></input>
        </div>
        <textarea
          rows="5"
          placeholder="Enter message.."
          name="message"
          required
          className="font-Ovo w-full py-2 px-4 border border-gray-400 rounded-md bg-white text-gray-700 dark:bg-darkHover dark:text-white dark:border-white/90"
        ></textarea>

        <button
          type="submit"
          className="w-2xl border border-gray-400 bg-black text-white rounded-full  py-2 px-4 mx-auto my-4 
          flex items-center justify-between duration-500 gap-2 dark:bg-transparent dark:hover:bg-darkHover"
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>

        <p className="font-Ovo text-xl flex">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
