
import Modal from "./Modal";
import {Formik, Field, Form } from "formik";

const AddAndUpdateContact = ({isOpen, onClose}) => {
  return (
    <div>
        <Modal isOpen={isOpen} onClose={onClose}>
        <Formik initialValues={{
            name: "",
            email: "",
        }}
        onSubmit={(values) => {
            console.log(values);
        }}
        >
            <Form className="flex flex-col gap-4 ">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name">Name</label>
                    <Field name="name" className="border h-10" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email">Email</label>
                    <Field name="email" className="border h-10" />
                </div>

                <button className="bg-orange self-end px-3 py-1.5 border ">Add Contact</button>
            </Form>
        </Formik>
         </Modal>
    </div>

  )
}

export default AddAndUpdateContact;