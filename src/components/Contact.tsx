//import//
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { VscSymbolNamespace } from "react-icons/vsc";
import { BsGlobeAmericas, BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      setLoading(true);
      emailjs
        .sendForm(
          "service_3wtug8j",
          "template_nqqygyn",
          form.current,
          "kJthuFNYVpXF8bJnA"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSent(true);
            setLoading(false);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.error("form.current is null");
    }
  };

  return (
    <section
      id="contact"
      className="p-12 flex flex-col md:flex-row w-full pt-24"
    >
      <div className="md:w-[50%] w-full">
        <h1 className="font-Kalam text-3xl text-text">Send Me a Message</h1>
        {sent ? (
          <div>Message sent. I'll get back to you ASAP!</div>
        ) : loading ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <form
            action="submit"
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col items-start"
          >
            <div className="flex flex-col md:flex-row justify-between w-full">
              <input
                type="text"
                placeholder="Name"
                name="user_name"
                className="md:w-[45%] border mb-4 md:mb-0 p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="text"
                placeholder="Email"
                name="user_email"
                className="md:w-[45%] border p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              cols={30}
              rows={10}
              className="w-full h-44 border p-2 my-4 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="text-text bg-primary text-light-text px-6 py-3 rounded-lg hover:bg-accent hover:cursor-pointer"
            />
          </form>
        )}
      </div>
      <div className="md:w-[50%] w-full flex flex-col items-center pl-4 pt-12 md:pt-0 text-text">
        <h1 className="font-Kalam text-3xl">Contact Me</h1>
        <div className="w-full flex">
          <div className="w-[30%] flex flex-col justify-around items-end">
            <VscSymbolNamespace size={30} />
            <BsGlobeAmericas size={30} />
            <BsPhone size={30} />
            <AiOutlineMail size={30} />
          </div>
          <div className="font-Quicksand">
            <div className="pl-4 py-2">
              <h2 className="text-lg">Name</h2>
              <p className="text-xl font-bold">Alex Clayton</p>
            </div>
            <div className="pl-4 py-2">
              <h2 className="text-lg">Location</h2>
              <p className="text-xl font-bold">Kansas, USA</p>
            </div>
            <div className="pl-4 py-2">
              <h2 className="text-lg">Phone</h2>
              <p className="text-xl font-bold">+1.785.330.3722</p>
            </div>
            <div className="pl-4 py-2">
              <h2 className="text-lg">Email</h2>
              <a
                href="mailto:contact@alexclayton.co"
                className="text-xl font-bold"
              >
                contact@alexclayton.co
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
