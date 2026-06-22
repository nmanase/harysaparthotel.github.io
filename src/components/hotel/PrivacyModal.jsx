import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const PRIVACY_TEXT = `Hary's Aparthotel
Notre site web est le : https://harysaparthotel.com.

Chez Hary's Aparthotel, nous accordons une grande importance à la confidentialité et à la sécurité des informations personnelles de nos clients. Cette politique de confidentialité explique comment nous collectons, utilisons, protégeons et divulguons les informations personnelles que vous nous fournissez lors de votre séjour dans notre appart-hôtel ou lorsque vous utilisez nos services.

Collecte d'informations personnelles :

– Nous pouvons collecter des informations telles que votre nom, votre adresse, votre adresse e-mail, votre numéro de téléphone, vos informations de paiement et d'autres détails pertinents lors de votre réservation ou de votre séjour chez nous.

– Les informations peuvent être collectées lorsque vous effectuez une réservation en ligne, lorsque vous nous contactez directement ou lorsque vous utilisez nos services et installations sur place.

Utilisation des informations personnelles :

– Nous utilisons les informations personnelles collectées dans le but de gérer votre réservation, de vous fournir les services demandés, de communiquer avec vous et de personnaliser votre expérience chez nous.

– Les informations peuvent également être utilisées à des fins de marketing, de recherche et d'amélioration de nos services, ainsi que pour répondre à des obligations légales ou réglementaires.

Protection des informations personnelles :

– Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, toute divulgation, altération ou destruction.

– Nous limitons l'accès aux informations personnelles aux employés et aux tiers qui ont besoin de connaître ces informations pour vous fournir des services ou pour remplir leurs obligations contractuelles.

Divulgation des informations personnelles :

– Nous ne divulguons vos informations personnelles à des tiers que dans le cadre des services que vous avez demandés, avec votre consentement préalable ou si nous y sommes légalement tenus.

– Les tiers auxquels nous divulguons vos informations peuvent inclure des fournisseurs de services externes tels que des sociétés de traitement des paiements ou des prestataires de services de réservation en ligne.

Conservation des informations personnelles :

– Nous conservons vos informations personnelles aussi longtemps que nécessaire pour remplir les finalités pour lesquelles elles ont été collectées, sauf si une période de conservation plus longue est requise ou autorisée par la loi.

Vos droits :

– Vous avez le droit de demander l'accès, la correction, la suppression ou la limitation du traitement de vos informations personnelles.

– Vous avez également le droit de vous opposer au traitement de vos informations personnelles à des fins de marketing direct.

En acceptant cette politique de confidentialité, vous consentez à la collecte, à l'utilisation et à la divulgation de vos informations personnelles conformément aux conditions énoncées ici. Nous nous engageons à respecter cette politique de confidentialité et à prendre les mesures nécessaires pour protéger vos informations personnelles. Veuillez nous contacter si vous avez des questions ou des préoccupations concernant notre politique de confidentialité ou nos pratiques en matière de confidentialité des données.

Dernière mise à jour : 15/06/2026`;

const PRIVACY_TEXT_EN = `Hary's Aparthotel
Our website is: https://harysaparthotel.com.

At Hary's Aparthotel, we place great importance on the privacy and security of our clients' personal information. This privacy policy explains how we collect, use, protect and disclose the personal information you provide to us during your stay at our aparthotel or when you use our services.

Collection of personal information:

– We may collect information such as your name, address, email address, phone number, payment information and other relevant details when you make a reservation or stay with us.

– Information may be collected when you make an online reservation, when you contact us directly, or when you use our on-site services and facilities.

Use of personal information:

– We use the personal information collected to manage your reservation, provide you with the requested services, communicate with you and personalize your experience with us.

– Information may also be used for marketing, research and improvement of our services, as well as to meet legal or regulatory obligations.

Protection of personal information:

– We implement appropriate security measures to protect your personal information against unauthorized access, disclosure, alteration or destruction.

– We limit access to personal information to employees and third parties who need to know this information to provide you with services or fulfill their contractual obligations.

Disclosure of personal information:

– We only disclose your personal information to third parties within the scope of the services you have requested, with your prior consent or if we are legally required to do so.

Your rights:

– You have the right to request access, correction, deletion or restriction of the processing of your personal information.

Last updated: 15/06/2026`;

export default function PrivacyModal({ onClose, lang }) {
  const isFr = lang === "fr";
  const text = isFr ? PRIVACY_TEXT : PRIVACY_TEXT_EN;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[250] bg-[#1C1510]/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#FAF8F4] max-w-2xl w-full max-h-[85vh] flex flex-col"
      >
        <div className="flex items-center justify-between p-6 border-b border-[#F0E6D3]">
          <h2 className="font-serif text-2xl text-[#1C1510]">
            {isFr ? "Politique de confidentialité" : "Privacy Policy"}
          </h2>
          <button onClick={onClose} className="w-9 h-9 border border-[#1C1510]/20 flex items-center justify-center hover:border-[#B8956A] hover:text-[#B8956A] transition-all">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-y-auto p-6 flex-1">
          {text.split('\n\n').map((para, i) => (
            <p key={i} className={`text-[#7A6E65] text-sm leading-relaxed mb-4 ${i === 0 ? "font-semibold text-[#1C1510]" : ""}`}>
              {para}
            </p>
          ))}
        </div>
        <div className="p-6 border-t border-[#F0E6D3]">
          <button onClick={onClose} className="bg-[#1C1510] text-white px-6 py-3 text-xs tracking-widest uppercase hover:bg-[#B8956A] transition-colors">
            {isFr ? "Fermer" : "Close"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}