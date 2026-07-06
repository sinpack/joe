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
    compact?: boolean
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

function Stars({ rating, compact = false }: { rating: number; compact?: boolean }) {
    return (
        <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
                <Icon
                    key={index}
                    icon="material-symbols:star-rounded"
                    className={index < rating ? 'text-amber-400' : 'text-neutral-200'}
                    width={compact ? 18 : 22}
                    height={compact ? 18 : 22}
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
    className,
    compact = false
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
                stopOnFocusIn: true
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
                'relative w-full overflow-hidden',
                compact ? 'py-12' : 'py-28',
                className
            )}
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-100/30 blur-[170px]" />
                <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-white/35 blur-[170px]" />
                <div className="absolute -right-40 top-24 h-[420px] w-[420px] rounded-full bg-sky-100/30 blur-[170px]" />
            </div>

            <div
                className={clsx(
                    'relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8',
                    compact ? 'max-w-[1080px]' : 'max-w-[1180px]'
                )}
            >
                <div className="mx-auto max-w-3xl text-center">
                    <h2
                        className={clsx(
                            'font-semibold tracking-tight text-neutral-700',
                            compact ? 'text-2xl md:text-3xl' : 'text-4xl md:text-5xl'
                        )}
                    >
                        Κριτικές Πελατών
                    </h2>

                    {!compact && (<p
                        className={clsx(
                            'mx-auto text-neutral-600',
                            compact
                                ? 'mt-3 text-sm leading-6 md:text-base'
                                : 'mt-5 text-base leading-7 md:text-lg'
                        )}
                    >
                        Σχόλια ανθρώπων που δουλέψαμε μαζί και μοιράστηκαν την προσωπική
                        τους εμπειρία.
                    </p>)}
                </div>

                <div className={clsx('relative', compact ? 'mt-8' : 'mt-14')}>
                    <div ref={emblaRef} className="overflow-hidden py-5">
                        <div className={clsx('flex', compact ? '-ml-4' : '-ml-5')}>
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.name}
                                    className={clsx(
                                        'min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] xl:flex-[0_0_33.333%]',
                                        compact ? 'pl-4' : 'pl-5'
                                    )}
                                >
                                    <article
                                        className={clsx(
                                            'group flex h-full flex-col rounded-[2rem] border border-white/70 bg-white/95 transition-all duration-300',
                                            compact
                                                ? 'min-h-[245px] p-5 shadow-[0_8px_22px_rgba(15,23,42,0.045)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.055)]'
                                                : 'min-h-[320px] p-7 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]'
                                        )}
                                    >
                                        <div className="flex items-center justify-between gap-4">
                                            <Stars rating={testimonial.rating} compact={compact} />

                                            <div
                                                className={clsx(
                                                    'rounded-full border border-neutral-200 bg-white/80 font-medium text-neutral-500',
                                                    compact ? 'px-2.5 py-0.5 text-[10px]' : 'px-3 py-1 text-xs'
                                                )}
                                            >
                                                Google
                                            </div>
                                        </div>

                                        <p
                                            className={clsx(
                                                'flex-1 text-neutral-700',
                                                compact
                                                    ? 'mt-4 text-[14px] leading-6'
                                                    : 'mt-6 text-base leading-8'
                                            )}
                                        >
                                            “{testimonial.text}”
                                        </p>

                                        <div
                                            className={clsx(
                                                'flex items-center gap-4 border-t border-neutral-200/70',
                                                compact ? 'mt-5 pt-4' : 'mt-8 pt-6'
                                            )}
                                        >
                                            <div
                                                className={clsx(
                                                    'flex shrink-0 items-center justify-center rounded-full bg-amber-100 font-semibold text-amber-800 ring-1 ring-amber-200/70',
                                                    compact ? 'h-10 w-10 text-xs' : 'h-12 w-12 text-sm'
                                                )}
                                            >
                                                {getInitials(testimonial.name)}
                                            </div>

                                            <div>
                                                <p
                                                    className={clsx(
                                                        'font-semibold text-neutral-950',
                                                        compact ? 'text-[15px]' : 'text-base'
                                                    )}
                                                >
                                                    {testimonial.name}
                                                </p>

                                                <p
                                                    className={clsx(
                                                        'text-neutral-500',
                                                        compact ? 'mt-0.5 text-xs' : 'mt-1 text-sm'
                                                    )}
                                                >
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
                        className={clsx(
                            'absolute -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white/90 text-neutral-700 shadow-md shadow-black/10 backdrop-blur transition duration-300 hover:-translate-x-0.5 hover:bg-white md:flex',
                            compact
                                ? '-left-3 top-1/2 hidden h-10 w-10'
                                : '-left-4 top-1/2 hidden h-12 w-12'
                        )}
                    >
                        <Icon icon="material-symbols:arrow-back-rounded" width={compact ? 21 : 24} />
                    </button>

                    <button
                        type="button"
                        onClick={scrollNext}
                        aria-label="Next testimonial"
                        className={clsx(
                            'absolute -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white/90 text-neutral-700 shadow-md shadow-black/10 backdrop-blur transition duration-300 hover:translate-x-0.5 hover:bg-white md:flex',
                            compact
                                ? '-right-3 top-1/2 hidden h-10 w-10'
                                : '-right-4 top-1/2 hidden h-12 w-12'
                        )}
                    >
                        <Icon icon="material-symbols:arrow-forward-rounded" width={compact ? 21 : 24} />
                    </button>
                </div>

                <div className={clsx('flex items-center justify-center gap-2', compact ? 'mt-5' : 'mt-9')}>
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => scrollTo(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                            className={clsx(
                                'h-2.5 rounded-full transition-all duration-300',
                                index === selectedIndex
                                    ? compact
                                        ? 'w-6 bg-amber-600'
                                        : 'w-8 bg-amber-600'
                                    : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
                            )}
                        />
                    ))}
                </div>

                {!compact && (
                    <div className="mt-10 text-center">
                        <a
                            href="https://www.google.com/search?q=%CE%93%CE%B5%CF%8E%CF%81%CE%B3%CE%B9%CE%BF%CF%82+%CE%91%CE%BD%CF%84%CF%89%CE%BD%CF%8C%CF%80%CE%BF%CF%85%CE%BB%CE%BF%CF%82+Holistic+-+Integrative+Coaching+Psychology+%CE%A0%CE%AC%CF%84%CF%81%CE%B1+reviews"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full btn-gray px-6 py-3 text-sm text-dark shadow-md shadow-black/10 transition duration-300"
                        >
                            Δείτε όλες τις αξιολογήσεις στο Google
                            <Icon icon="material-symbols:arrow-forward-rounded" width={20} />
                        </a>
                    </div>
                )}
            </div>
        </section>
    )
}