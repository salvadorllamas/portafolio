import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useRef, useState, useEffect } from "react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = form;

  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailValidationMessage, setEmailValidationMessage] = useState("");
  const [nameValidationMessage, setNameValidationMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "email") {
      if (value === "") {
        setEmailValidationMessage("");
      } else if (!validateEmail(value)) {
        setEmailValidationMessage("Correo electrónico incorrecto");
      } else {
        setEmailValidationMessage("Correo electrónico correcto");
      }
    }

    if (name === "name") {
      if (value === "") {
        setNameValidationMessage("El nombre es requerido");
      } else {
        setNameValidationMessage("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_j5rushj",
        "template_l5d4kfm",
        {
          from_name: form.name,
          to_name: "Salvador",
          from_email: form.email,
          to_email: "llamaswebs@gmail.com",
          message: form.message,
        },
        "ADGjZMMjMbOOsKdG2"
      );

      setLoading(false);
      setMensajeEnviado(true);
      setForm({
        name: "",
        email: "",
        message: "",
      });
      setEmailValidationMessage("");
      setNameValidationMessage("");

      setTimeout(() => {
        setMensajeEnviado(false);
      }, 2000);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setMensajeEnviado(false);
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Ponerse en contacto</p>
        <p className={styles.sectionHeadText}>Contacto</p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu Nombre:</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Ingresa tu nombre"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {nameValidationMessage && (
              <span className="text-sm mt-2 text-red-500">
                {nameValidationMessage}
              </span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Tu Correo electrónico:
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Ingresa tu correo electrónico"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {email && (
              <span
                className={`text-sm mt-2 ${
                  emailValidationMessage === "Correo electrónico correcto"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {emailValidationMessage}
              </span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu Mensaje:</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Escribe aquí tu mensaje"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <div className="flex items-center">
            <button
              type="submit"
              className={`py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl ${
                !name || !validateEmail(email) || !message
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-500"
              }`}
              disabled={!name || !validateEmail(email) || !message}
            >
              {!loading ? "Enviar" : "Cargando..."}
            </button>
            {mensajeEnviado && (
              <div className="ml-2 text-green-500 font-semibold">
                Mensaje Enviado Correctamente
              </div>
            )}
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
