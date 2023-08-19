//import//
import { VscSymbolNamespace } from "react-icons/vsc";
import { BsGlobeAmericas, BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export const Contact: React.FC = () => {
  return (
    <section className="p-12 flex flex-col md:flex-row w-full">
      <div className="md:w-[50%] w-full">
        <h1 className="font-Kalam text-3xl">Get a Quote</h1>
        <form action="submit" className="flex flex-col items-start">
          <div className="flex flex-col md:flex-row justify-between w-full">
            <input type="text" placeholder="Name" className="md:w-[45%] border mb-4 md:mb-0" />
            <input type="text" placeholder="Email" className="md:w-[45%] border" />
          </div>
          <textarea name="Message" placeholder="Message" cols={30} rows={10} className="w-full h-44 border my-4" ></textarea>
          <button className="bg-primary-blue px-6 py-3 rounded-lg">Send Message</button>
        </form>
      </div>
      <div className="md:w-[50%] w-full flex flex-col items-center pl-4 pt-12 md:pt-0">
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
                <a href="mailto:contact@alexclayton.co" className="text-xl font-bold">
                  contact@alexclayton.co
                </a>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
