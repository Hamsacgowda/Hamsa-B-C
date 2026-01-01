import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const { error: submitError } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      ]);

      if (submitError) throw submitError;

      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 relative inline-block">
          Contact Me
          <div className="absolute -bottom-4 left-0 w-20 h-1 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-blue-100 rounded-lg mt-1">
                <Mail className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Email</h3>
                <a href="mailto:hammugowda148@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium">
                  hammugowda148@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-blue-100 rounded-lg mt-1">
                <Phone className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/hamsa-b-c-032b43222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Connect with me
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-blue-100 rounded-lg mt-1">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">GitHub</h3>
                <a
                  href="https://github.com/Hamsacgowda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View my repositories
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-xl p-8 border border-blue-100">
              <p className="text-gray-700 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any of the channels above, and I'll get back to you as soon as possible.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
                  placeholder="Project collaboration"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {success && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
