'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import clsx from 'clsx'

type Testimonial = {
    name: string
    rating: number
    text: string
}

type TestimonialsCarouselProps = {
    className?: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Joe',
        rating: 5,
        text: 'Όταν αποφάσισα να πάω για πρώτη φορά στη ζωή μου ήμουν ανυποψίαστη, δεν περίμενα να νιώσω έτσι! Στο πρώτο δεκάλεπτο μου έφυγαν όλοι οι ενδοιασμοί και οι προκαταλήψεις. Με έκανε να νιώσω ελεύθερη και μου έδωσε τροφή για πολλή σκέψη, χωρίς ποτέ να μου επιβάλει τη γνώμη του. ΤΕΛΕΙΑ εμπειρία!'
    },
    {
        name: 'Γιάννης Ρούπας',
        rating: 5,
        text: 'Επιστήμονας που μπορεί να σε βοηθήσει να εντοπίσεις τι σου πειράζει την ψυχή και να δουλέψεις πάνω σε αυτό. Ψυχοθεραπευτής μάγκας. Επτά μήνες μαζί του με έκαναν να αναθεωρήσω την εικόνα που είχα για τον κλάδο.'
    },
    {
        name: 'Nikos Drakopoulos',
        rating: 5,
        text: 'Άψογη προσέγγιση σε επαγγελματικό και ανθρώπινο επίπεδο, με έμφαση στη λεπτομέρεια, την ενσυναίσθηση και την ουσιαστική δράση. Σε προσωπική εμπειρία, βοηθήθηκα σε θέματα άγχους και λήψης σημαντικών αποφάσεων ζωής.'
    },
    {
        name: 'Δήμητρα Ζήση',
        rating: 5,
        text: 'Ο κύριος Αντωνόπουλος είναι ένας εξαιρετικός άνθρωπος με τεράστια ενσυναίσθηση και πολλές γνώσεις. Ο ιδανικός συνδυασμός που του επιτρέπει να βοηθά τους ανθρώπους με μοναδικό τρόπο. Από προσωπική εμπειρία τον συστήνω ανεπιφύλακτα!'
    },
    {
        name: 'maria mp',
        rating: 5,
        text: 'Με έχει βοηθήσει πάρα πολύ στο να διαχειρίζομαι σωστά ορισμένες καταστάσεις χωρίς φόβο και άγχος!'
    },
    {
        name: 'Maria Parpouna',
        rating: 5,
        text: 'Ένα μοναδικό ταξίδι με στόχο την αυτοβελτίωση. Αξίζει να το χαρίσετε στον εαυτό σας!'
    },
    {
        name: 'ΚΟΛΛΙΑΣ ΘΕΟΔΩΡΟΣ',
        rating: 5,
        text: 'Βοηθήθηκα σε θέματα άγχους και λήψης σημαντικών αποφάσεων. Σε έναν ήρεμο χώρο, με στόχο την αυτοβελτίωση, ο άνθρωπος αυτός σε βοηθά να γνωρίσεις καλύτερα τον εαυτό σου και να σταθείς ξανά στα πόδια σου.'
    },
    {
        name: 'Στέλλα Δημητριάδη',
        rating: 4,
        text: 'Σε ένα ήρεμο και γαλήνιο περιβάλλον, επιτέλους ένας άνθρωπος που με άκουγε πραγματικά. Με βοήθησε να καταλάβω καλύτερα τον εαυτό μου και να δω τα πράγματα πιο καθαρά. Ευχαριστώ πολύ από καρδιάς.'
    },
    {
        name: 'Ματίνα Στούπη',
        rating: 5,
        text: 'Εξαιρετικός επαγγελματίας, με κατανόηση και πραγματικό ενδιαφέρον για τον άνθρωπο. Με βοήθησε ουσιαστικά να δω τα πράγματα πιο καθαρά και να κάνω πρόοδο. Τον προτείνω ανεπιφύλακτα!'
    },
    {
        name: 'Μαριάντα Τυροσβούτη',
        rating: 5,
        text: 'Εξαιρετική εμπειρία! Είναι πολύ σημαντικό να νιώθεις ότι είσαι στα σωστά χέρια και ότι έχεις να κάνεις με πραγματικό επαγγελματία. Τον συστήνω ανεπιφύλακτα!'
    }
]

function cn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ')
}

function Stars({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
                <Icon
                    key={index}
                    icon="material-symbols:star-rounded"
                    className={index < rating ? 'text-amber-400' : 'text-neutral-200'}
                    width={22}
                    height={22}
                />
            ))}
        </div>
    )
}

function getInitials(name: string) {
    return name
        .split(' ')
        .filter(Boolean)
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
}

export default function TestimonialsCarousel({
    className
}: TestimonialsCarouselProps) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            skipSnaps: false
        },
        [
            Autoplay({
                delay: 6000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
                stopOnFocusIn: true,
            })
        ]
    )

    const scrollPrev = useCallback(() => {
        emblaApi?.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        emblaApi?.scrollNext()
    }, [emblaApi])

    const scrollTo = useCallback(
        (index: number) => {
            emblaApi?.scrollTo(index)
        },
        [emblaApi]
    )

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        setScrollSnaps(emblaApi.scrollSnapList())
        onSelect()

        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)

        return () => {
            emblaApi.off('select', onSelect)
            emblaApi.off('reInit', onSelect)
        }
    }, [emblaApi, onSelect])

    return (
        <section
            className={clsx(
                'relative w-full overflow-hidden py-28',
                className
            )}
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden ">
                <div className="absolute left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-100/35 blur-[150px]" />
                <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-white/45 blur-[150px]" />
                <div className="absolute -right-40 top-24 h-[420px] w-[420px] rounded-full bg-sky-100/35 blur-[150px]" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
                        Κριτικές Πελατών
                    </h2>

                    <p className="mx-auto mt-5 text-base leading-7 text-neutral-600 md:text-lg">
                        Σχόλια ανθρώπων που δουλέψαμε μαζί και μοιράστηκαν την προσωπική
                        τους εμπειρία.
                    </p>
                </div>

                <div className="relative mt-14">
                    <div
                        ref={emblaRef}
                        className="overflow-hidden py-6"
                    >
                        <div className="-ml-5 flex">
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.name}
                                    className={`min-w-0 flex-[0_0_100%] pl-5 md:flex-[0_0_50%] xl:flex-[0_0_33.333%]`}
                                >
                                    <article
                                        className="
        group
        flex
        h-full
        min-h-[320px]
        flex-col
        rounded-[2rem]
        bg-white/95
        border
        border-white/70
        p-7
        shadow-[0_10px_30px_rgba(15,23,42,0.06)]
        transition-all
        duration-300
        hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]
    "
                                    >
                                        <div className="flex items-center justify-between gap-4">
                                            <Stars rating={testimonial.rating} />

                                            <div className="rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-500">
                                                Google
                                            </div>
                                        </div>

                                        <p className="mt-6 flex-1 text-base leading-8 text-neutral-700">
                                            “{testimonial.text}”
                                        </p>

                                        <div className="mt-8 flex items-center gap-4 border-t border-neutral-200/70 pt-6">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-800 ring-1 ring-amber-200/70">
                                                {getInitials(testimonial.name)}
                                            </div>

                                            <div>
                                                <p className="font-semibold text-neutral-950">
                                                    {testimonial.name}
                                                </p>

                                                <p className="mt-1 text-sm text-neutral-500">
                                                    Google Review
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={scrollPrev}
                        aria-label="Previous testimonial"
                        className="absolute -left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white/90 text-neutral-700 shadow-md shadow-black/10 backdrop-blur transition duration-300 hover:-translate-x-0.5 hover:bg-white md:flex"
                    >
                        <Icon icon="material-symbols:arrow-back-rounded" width={24} />
                    </button>

                    <button
                        type="button"
                        onClick={scrollNext}
                        aria-label="Next testimonial"
                        className="absolute -right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white/90 text-neutral-700 shadow-md shadow-black/10 backdrop-blur transition duration-300 hover:translate-x-0.5 hover:bg-white md:flex"
                    >
                        <Icon icon="material-symbols:arrow-forward-rounded" width={24} />
                    </button>
                </div>

                <div className="mt-9 flex items-center justify-center gap-2">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => scrollTo(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                            className={clsx(
                                'h-2.5 rounded-full transition-300',
                                index === selectedIndex
                                    ? 'w-8 bg-amber-600'
                                    : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
                            )}
                        />
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <a
                        href="https://www.google.com/search?q=%CE%93%CE%B5%CF%8E%CF%81%CE%B3%CE%B9%CE%BF%CF%82+%CE%91%CE%BD%CF%84%CF%89%CE%BD%CF%8C%CF%80%CE%BF%CF%85%CE%BB%CE%BF%CF%82+Holistic+-+Integrative+Coaching+Psychology+%CE%A0%CE%AC%CF%84%CF%81%CE%B1+%CE%A5%CF%80%CE%B7%CF%81%CE%B5%CF%83%CE%AF%CE%B5%CF%82+%CE%A3%CF%85%CE%BC%CE%B2%CE%BF%CF%85%CE%BB%CE%B5%CF%85%CF%84%CE%B9%CE%BA%CE%AE%CF%82&sca_esv=b1849c266fe4f382&sxsrf=APpeQns_xiunqbrN87XYzkM_TpNROlFZVQ%3A1783318128664&ei=cEZLavLxJ72O9u8P6PmegQ8&biw=2133&bih=1050&ved=0ahUKEwjy6dHcsb2VAxU9h_0HHei8J_AQ4dUDCBA&uact=5&oq=%CE%93%CE%B5%CF%8E%CF%81%CE%B3%CE%B9%CE%BF%CF%82+%CE%91%CE%BD%CF%84%CF%89%CE%BD%CF%8C%CF%80%CE%BF%CF%85%CE%BB%CE%BF%CF%82+Holistic+-+Integrative+Coaching+Psychology+%CE%A0%CE%AC%CF%84%CF%81%CE%B1+%CE%A5%CF%80%CE%B7%CF%81%CE%B5%CF%83%CE%AF%CE%B5%CF%82+%CE%A3%CF%85%CE%BC%CE%B2%CE%BF%CF%85%CE%BB%CE%B5%CF%85%CF%84%CE%B9%CE%BA%CE%AE%CF%82&gs_lp=Egxnd3Mtd2l6LXNlcnAijwHOk861z47Pgc6zzrnOv8-CIM6Rzr3PhM-Jzr3PjM-Azr_Phc67zr_PgiBIb2xpc3RpYyAtIEludGVncmF0aXZlIENvYWNoaW5nIFBzeWNob2xvZ3kgzqDOrM-Ez4HOsSDOpc-AzrfPgc61z4POr861z4IgzqPPhc68zrLOv8-FzrvOtc-Fz4TOuc66zq7PgjIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwA0jWCVCxA1ixA3ABeAGQAQCYAQCgAQCqAQC4AQPIAQD4AQL4AQGYAgGgAgiYAwCIBgGQBgiSBwExoAcAsgcAuAcAwgcDMi0xyAcFgAgB&sclient=gws-wiz-serp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full btn-gray px-6 py-3 text-sm text-dark shadow-md shadow-black/10  transition duration-300"
                    >
                        Δείτε όλες τις αξιολογήσεις στο Google
                        <Icon icon="material-symbols:arrow-forward-rounded" width={20} />
                    </a>
                </div>
            </div>
        </section>
    )
}