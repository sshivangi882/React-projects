import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";

import AddAndUpdateContact from "./components/AddAndUpdateContact";



function App() {
  const [contacts, setContacts] = useState([]);

  const [isOpen, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);


  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="relative flex flex-grow items-center">
          <FiSearch className="absolute mx-1 flex-grow text-xl text-white" />
          <input
            type="text"
            className="h-[40px] flex-grow rounded-md border border-white bg-transparent px-7"
            placeholder="search contact details"
          />
        </div>
        <div>
          <AiFillPlusCircle className="cursor-pointer gap-4 text-4xl text-white" onClick={onOpen} />
        </div>
      </div>

      <div className=" mt-4 gap-2 flex flex-col">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
           
        ))}
      </div>
    </div>
       <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
    </>
  );
}


export default App;
