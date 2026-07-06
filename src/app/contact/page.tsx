import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

import contactDetails from './ContactDetails'
import BlueDivider from '../components/BlueDivider'
import ScrollToTopButton from '../components/Buttons/ScrollToTopButton'
import TestimonialsCarousel from '../components/TestimonialsCarousel'

export const metadata: Metadata = {
  title: 'Επικοινωνία Γιώργου Αντωνόπουλου'
}

export default function Contact() {
  const DynamicMap = dynamic(() => import('../components/Map'), {
    ssr: false
  })

  return (
    <section className="w-full bg-sky-50">
      <div className="container mx-auto flex flex-col items-center px-2.5 py-20">
        <main className="flex w-full max-w-3xl flex-col">
          <div className="flex flex-col items-center space-y-10 py-10">
            <h1 className="flex w-fit items-center justify-center whitespace-normal underline decoration-2 underline-offset-2 tracking-widest">
              ΕΠΙΚΟΙΝΩΝΙΑ
            </h1>

            <h4 className="text-balance text-center">
              Για να κλείσετε ραντεβού ή για περαιτέρω πληροφορίες, μπορείτε να
              επικοινωνήσετε μαζί μου μέσω τηλεφώνου στο 6976629913 ή μέσω
              e-mail στο georgios_antonopoulos@hotmail.com
            </h4>
          </div>
        </main>
      </div>

      <BlueDivider polygon={false} />

      <div className="container mx-auto w-full items-center px-2.5 py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-left text-wrap lg:items-center"
            >
              <div className="mb-4">{detail.icon}</div>

              <span className="mb-2 text-lg font-semibold">
                {detail.title}
              </span>

              {detail.description && (
                <p className="w-full break-words text-center text-gray-600 whitespace-normal">
                  {detail.description}
                </p>
              )}

              {detail.icons && detail.icons}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto z-10 flex w-full flex-col px-2.5 py-20">
        <DynamicMap />
      </div>

      <TestimonialsCarousel className="bg-sky-50" />
      <ScrollToTopButton />
    </section>
  )
}