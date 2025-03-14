import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            Interested in working together? Let's discuss your project.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const message = formData.get('message');
                  window.location.href = `mailto:tomas.rodriguez.moyano@gmail.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              <div className="space-y-6">
                <a
                  href="https://github.com/Toto20087?tab=repositories"
                  target="_blank"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/tomas-rodriguez-moyano-a1a852303/"
                  target="_blank"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:tomas.rodriguez.moyano@gmail.com"
                  target="_blank"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
                <a
                  href="https://drive.google.com/file/d/1k2KPCqmVtAgfwddQ0YXzvq4owaCcCcal/view?usp=sharing"
                  target="_blank"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                >
                  <FileText className="w-5 h-5" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};