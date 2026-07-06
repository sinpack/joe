import HeroSection from './components/HeroSection'
import EmblaCarousel from './components/EmblaCarousel/EmblaCarousel'
import type { EmblaOptionsType } from 'embla-carousel'
import sliderData from '../utils/sliderData'
import Image from 'next/image'
import holistic from '../../public/holistic2.jpg'
import NavigationButton from './components/Buttons/NavigationButton'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import { FcApproval } from 'react-icons/fc'

export default function Home() {
  const OPTIONS: EmblaOptionsType = {
    dragFree: true,
    align: 'center',
    watchResize: true
  }

  const items = [
    'Μείωση του άγχους',
    'Διακοπή καπνίσματος',
    'Απώλεια βάρους',
    'Επίτευξη προσωπικών / επαγγελματικών στόχων',
    'Αντιμετώπιση προβλημάτων',
    'Θέματα σχέσεων',
    'Αύξηση αυτοπεποίθησης – αυτοεκτίμησης',
    'Αλλαγή καριέρας',
    'Αυτοβελτίωση – προσωπική εξέλιξη',
    'Περιοριστικές πεποιθήσεις',
    'Συναισθηματική διαχείριση'
  ]

  const FeaturesSection = () => {
    return (
      <section className="relative w-full overflow-hidden bg-[#FEEBE7] py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-white/50 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-100/50 blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
              Με τι μπορούμε να ασχοληθούμε
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-800 md:text-4xl">
              Περιοχές υποστήριξης
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((title) => (
              <div key={title} className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/70 shadow-sm ring-1 ring-white/80">
                  <FcApproval size="30" />
                </div>

                <h4 className="max-w-xs text-base font-semibold leading-7 text-slate-700">
                  {title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-[#F7FAFD] text-slate-700">
      <HeroSection />

      <section className="w-full bg-[#F7FAFD] px-4 pb-32 pt-20">
        <div className="mx-auto flex max-w-4xl flex-col justify-center text-center">
          <div className="flex place-self-center pb-20">
            <NavigationButton text="ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ" link="/contact" />
          </div>

          <h2 className="text-balance text-xl leading-9 text-slate-700 md:text-2xl">
            Ονομάζομαι Γεώργιος Αντωνόπουλος και είμαι πιστοποιημένος Ολιστικός
            - Συνθετικός Coach, διαθέτοντας πλούσιο υπόβαθρο στις Τέχνες και τις
            Επιστήμες.
            <br className="lg:hidden" />
            <a href="/about" className="ml-2.5 text-base font-semibold text-blue-600">
              Διαβάστε περισσότερα
            </a>
          </h2>
        </div>
      </section>

      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={holistic}
            alt="holistic"
            fill
            className="object-cover"
            quality={100}
            loading="lazy"
          />
        </div>

        <div className="absolute inset-0 bg-white/10" />

        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-between text-center">
          <div className="flex flex-col space-y-5 px-2.5 md:px-40 lg:mt-10 lg:px-60">
            <h1 className="mt-5 font-bold tracking-normal text-slate-700">
              Holistic - Integrative Coaching Psychology
            </h1>

            <h3 className="mb-10 text-balance font-semibold text-slate-700">
              Το holistic - integrative coaching psychology εστιάζει στην ισορροπία μεταξύ
              σώματος, νου, συναισθήματος και πνεύματος, προσφέροντας μια
              σφαιρική προσέγγιση για την αντιμετώπιση των προκλήσεων και την
              επίτευξη προσωπικών/επαγγελματικών στόχων.
              <br className="lg:hidden" />
              <a
                href="/holistic-integrative-coaching"
                className="ml-2.5 text-base font-semibold text-blue-600"
              >
                Διαβάστε περισσότερα
              </a>
            </h3>
          </div>
        </div>
      </section>

      <FeaturesSection />

      <TestimonialsCarousel className="bg-gradient-to-b from-[#FEEBE7] via-[#FDF8F5] to-[#F7FAFD]" />

      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F7FAFD] via-white to-[#FEEBE7] px-4 py-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-white/70 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-orange-100/50 blur-[160px]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col justify-center space-y-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
            Υπηρεσίες
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-800 md:text-4xl">
            Υπηρεσίες - Θεραπείες
          </h2>

          <h3 className="mx-auto mb-10 max-w-3xl text-pretty text-lg leading-8 text-slate-700">
            Ως holistic - integrative psychology coach, προσφέρω μια σειρά υπηρεσιών
            προσαρμοσμένων στις μοναδικές σας ανάγκες και στόχους. Μαζί,
            μπορούμε να εργαστούμε για την ευημερία σας.
            <br className="lg:hidden" />
            <a href="/treatments" className="ml-2.5 text-base font-semibold text-blue-600">
              Διαβάστε περισσότερα
            </a>
          </h3>

          <EmblaCarousel slides={sliderData} options={OPTIONS} />

          <div className="flex place-self-center pt-10">
            <NavigationButton text="ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ" link="/contact" />
          </div>
        </div>
      </section>
    </main>
  )
}