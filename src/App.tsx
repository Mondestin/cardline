import React from 'react';
import { Phone, Mail, Globe, Linkedin } from 'lucide-react';
import { ContactItem } from './components/ContactItem';

function App() {
  const handleAddContact = () => {
    const contact = {
      name: 'Ange KANGA',
      tel: '+33669352128',
      email: 'akanga@locimoservices.com',
      url: 'https://locimoservices.com'
    };

    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
TEL:${contact.tel}
EMAIL:${contact.email}
URL:${contact.url}
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'ange-kanga.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-[2rem] shadow-lg overflow-hidden">
        {/* Header with blue background */}
        <div className="bg-[#1a237e] h-48 relative">
          {/* Profile image that overlaps the blue section */}
          <a href="tel:+33669352128" className="absolute left-1/2 -translate-x-1/2 -bottom-16 cursor-pointer hover:opacity-90 transition-opacity">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
              <img 
                src="/img/ange.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </a>
        </div>

        {/* Content section */}
        <div className="pt-20 pb-8 px-8">
          {/* Name and title */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900">Ange KANGA</h1>
            <p className="text-xl text-gray-600 mt-2">Gérante</p>
            <p className="text-xl text-gray-600">Locimo Services</p>
          </div>

          {/* Description */}
          <p className="text-center text-gray-600 mb-12 leading-relaxed px-4">
            Bonjour, je supervise les opérations et le développement de Locimo Services, assurant une gestion efficace des propriétés et des clés.
          </p>

          {/* Contact information */}
          <div className="space-y-8 pl-6">
            <ContactItem
              icon={Phone}
              text="+33 669 352 128"
              subtext="Professionnel"
              bgColor="bg-red-50"
              iconColor="text-red-500"
              href="tel:+33669352128"
            />

            <ContactItem
              icon={Mail}
              text="contact@locimoservices.com"
              subtext="Professionnel"
              bgColor="bg-blue-50"
              iconColor="text-blue-500"
              href="mailto:akanga@locimoservices.com"
            />

            <ContactItem
              icon={Globe}
              text="locimoservices.com"
              subtext="Entreprise"
              bgColor="bg-green-50"
              iconColor="text-green-500"
              href="https://locimoservices.com"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>

          {/* Social section */}
          <div className="mt-12">
            <p className="text-center text-gray-600 mb-4">Me retrouver sur</p>
            <div className="flex justify-center">
              <a 
                href="https://linkedin.com/in/ange-audrey-kanga"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full bg-[#1a237e] flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
              </a>
            </div>
          </div>

          {/* Add to contacts button */}
          <button 
            onClick={handleAddContact}
            className="w-full mt-12 bg-[#1a237e] text-white py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-[#272f7a] transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-lg">Ajouter aux contacts</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;