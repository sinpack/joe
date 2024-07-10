import React from 'react';
import Icon from '../components/Icon';

// Define a type for the contact details
interface ContactDetail {
  icon: React.ReactNode;
  title: string;
  description?: string; // Make description optional
}

// Contact details array with icon paths
const contactDetails: ContactDetail[] = [
  {
    icon: <Icon src="./icons/address.png" alt="Address Icon" />,
    title: 'Address',
    description: 'Λευκωσίας 41, Πάτρα, Ελλάδα',
  },
  {
    icon: <Icon src="./icons/email.png" alt="Email Icon" />,
    title: 'Email',
    description: 'random@example.com',
  },
  {
    icon: <Icon src="./icons/phone.png" alt="Phone Icon" />,
    title: 'Phone',
    description: '+30 6976629913',
  },
  {
    icon: <Icon src="./icons/thumb.png" alt="Facebook Thumbs up Icon" />,
    title: 'Social Media',
  },
];

export default contactDetails;
