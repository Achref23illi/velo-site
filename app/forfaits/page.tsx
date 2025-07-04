"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"
import { usePackageTranslations } from "@/lib/packages-i18n"
import { 
  MotionSection, 
  ScrollReveal, 
  StaggerContainer, 
  MotionDiv, 
  AnimatedImage,
  TextReveal,
  RedLineSeparator,
  PageTransition,
  ImageMaskReveal
} from "@/components/motion/motion-components"

export default function ForfaitsPage() {
  const { t } = useI18n();
  const { getAllPackages } = usePackageTranslations();
  const { language } = useI18n();
  
  // Get all translated packages
  const allPackages = getAllPackages();
  
  const buildPkg = (id: string, color: string, textColor: string) => {
    const base: any = allPackages.find((p: any) => p?.id === id) || {}
    return {
      ...base,
      image: base.mainSection?.image || "/images/gallery-1.jpg",
      startingPrice: base.options && base.options.length > 0 ? base.options[0].price : (base.startingPrice || 'Sur devis'),
      color,
      textColor,
    }
  }

  const packages = [
    buildPkg('la-petite-koki', 'bg-primary-red', 'text-white'),
    buildPkg('pop-solo', 'bg-secondary-yellow', 'text-dark-charcoal'),
    buildPkg('double-fun', 'bg-trust-blue', 'text-white'),
    buildPkg('ready-set-blend', 'bg-accent-green', 'text-white'),
    buildPkg('defi-parent-enfant', 'bg-creative-purple', 'text-white'),
    buildPkg('la-smoothie-parade', 'bg-primary-red', 'text-white'),
    buildPkg('signature', 'bg-dark-charcoal', 'text-white'),
  ]

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />

        <main className="pt-20">
          {/* Page Hero */}
          <MotionSection className="page-hero bg-gradient-to-br from-primary-red to-secondary-yellow text-white py-20">
            <div className="container mx-auto px-4 text-center">
              <TextReveal>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('packages.pageHero.title', "Nos forfaits")}</h1>
              </TextReveal>
              
              <RedLineSeparator className="w-16 mx-auto mb-8" />
              
              <ScrollReveal delay={0.3}>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                  {t('packages.pageHero.description', "Festivals, événements corporatifs, collectes de fonds ou programmes scolaires - nous avons le forfait parfait pour vous.")}
                </p>
              </ScrollReveal>
            </div>
          </MotionSection>

          {/* Intro Section */}
          <MotionSection className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-2">
                  <ImageMaskReveal className="rounded-xl overflow-hidden">
                    <Image 
                      src="/images/Packages-596-Edit.jpg" 
                      alt="Nos vélos à smoothies en action" 
                      width={600} 
                      height={400}
                      className="w-full h-auto"
                    />
                  </ImageMaskReveal>
                </div>
                
                <div className="md:col-span-3 text-center md:text-left">
                  <ScrollReveal>
                    <p className="text-2xl text-gray-700 leading-relaxed italic mb-8">
                      {t('packages.intro.description1', "Nos vélos à smoothies sont disponibles pour la location dans toute la région. Que vous organisiez un petit événement familial ou un grand festival, nous avons une solution adaptée à vos besoins.")}
                    </p>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={0.2}>
                    <p className="text-lg text-gray-600">
                      {t('packages.intro.description2', "Tous nos forfaits comprennent la livraison, l'installation et la désinstallation, ainsi qu'un animateur professionnel pour guider vos invités à travers l'expérience. Nous fournissons également tous les ingrédients frais, gobelets, et autres accessoires nécessaires.")}
                    </p>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </MotionSection>

          {/* Packages Grid - New Design */}
          <MotionSection className="py-20 bg-light-gray">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <TextReveal>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">{t('packages.packagesGrid.title', "Découvrez nos forfaits")}</h2>
                </TextReveal>
                
                <RedLineSeparator className="w-16 mx-auto mb-8" />
                
                <ScrollReveal delay={0.3}>
                  <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('packages.packagesGrid.subtitle', "Une expérience unique et mémorable pour tous types d'événements")}
                  </p>
                </ScrollReveal>
              </div>
              
              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {packages.map((pkg, index) => (
                  <MotionDiv
                    key={pkg.id}
                    variant="fadeUp"
                    custom={index}
                    className="item-packages h-full"
                  >
                    <AnimatedImage 
                      hoverEffect="lift" 
                      className={`${pkg.color} rounded-xl overflow-hidden shadow-lg h-full flex flex-col`}
                    >
                      <div className="relative overflow-hidden h-48 group">
                        <Image
                          src={pkg.image}
                          alt={pkg.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <span className="text-white text-lg font-bold transform -translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            {t('packages.packagesGrid.seeDetails', "Voir les détails")}
                          </span>
                        </div>
                      </div>
                      
                      <div className={`p-6 flex-grow flex flex-col ${pkg.textColor}`}>
                        <div className="text-center mb-4">
                          <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                          <p className="text-lg font-semibold opacity-90 mb-4">{pkg.tagline}</p>
                          <RedLineSeparator className="w-12 mx-auto mb-4" />
                        </div>
                        
                        <ul className="mb-6 flex-grow">
                          {(pkg.features || []).map((feature, idx) => (
                            <li key={idx} className="mb-3 flex items-start">
                              <span className="inline-block mr-2">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-auto text-center">
                          {/* Remove price display from package cards */}
                          {/* <div className="font-bold text-xl mb-4">
                            {pkg.startingPrice === "Sur devis" ? pkg.startingPrice : `${pkg.startingPrice}$`}
                          </div> */}
                          
                          <AnimatedImage hoverEffect="scale">
                            <Link href={`/forfaits/${pkg.id}`} className="block w-full">
                              <Button className={`w-full ${pkg.textColor === 'text-white' ? 'bg-white text-black hover:bg-gray-100' : 'bg-dark-charcoal text-white hover:bg-dark-charcoal/90'} py-3 text-lg font-semibold`}>
                                {t('packages.packagesGrid.learnMore', "En savoir plus")}
                              </Button>
                            </Link>
                          </AnimatedImage>
                        </div>
                      </div>
                    </AnimatedImage>
                  </MotionDiv>
                ))}
              </StaggerContainer>
            </div>
          </MotionSection>

          {/* CTA Section */}
          <MotionSection className="py-20 bg-gradient-to-br from-primary-red to-secondary-yellow text-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <StaggerContainer className="cta-content">
                  <MotionDiv variant="fadeUp">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('packages.help.title', "Besoin d'aide pour choisir?")}</h2>
                  </MotionDiv>
                  
                  <RedLineSeparator className="w-16 mb-6" />
                  
                  <MotionDiv variant="fadeUp">
                    <p className="text-xl mb-8">
                      {t('packages.help.description', "Notre équipe peut vous aider à sélectionner le forfait parfait pour votre événement ou créer une solution entièrement personnalisée.")}
                    </p>
                  </MotionDiv>
                  
                  <MotionDiv variant="fadeUp" className="flex flex-col sm:flex-row gap-4">
                    <AnimatedImage hoverEffect="lift">
                      <Link href="/contact">
                        <Button className="bg-white text-primary-red px-8 py-3 text-lg font-semibold hover:bg-gray-100">
                          {t('packages.help.requestQuote', "Demander un devis")}
                        </Button>
                      </Link>
                    </AnimatedImage>
                    
                    <AnimatedImage hoverEffect="lift">
                      <Link href={`tel:+1-${t('common.footer.phone', 'XXX-XXX-XXXX')}`}>
                        <Button 
                          variant="outline" 
                          className="border-white text-white hover:bg-white hover:text-primary-red px-8 py-3 text-lg font-semibold">
                          {t('packages.help.callUs', "Appelez-nous")}
                        </Button>
                      </Link>
                    </AnimatedImage>
                  </MotionDiv>
                </StaggerContainer>
                
                <ScrollReveal>
                  <div className="testimonial-card bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                    <div className="quote-icon text-4xl mb-4 text-white/80">"</div>
                    <p className="text-xl italic mb-6">{t('packages.help.testimonial.text', "Nous avons réservé Voilà Vélo Fruité pour notre journée corporative et ce fut un succès retentissant! L'équipe était professionnelle et nos employés ont adoré l'expérience.")}</p>
                    <div className="testimonial-author flex items-center">
                      <div className="author-avatar w-12 h-12 bg-white/30 rounded-full mr-4"></div>
                      <div className="author-info">
                        <h4 className="font-bold">{t('packages.help.testimonial.author', "Marie Lemieux")}</h4>
                        <p className="text-sm">{t('packages.help.testimonial.company', "Directrice RH, Entreprise XYZ")}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </MotionSection>
        </main>

        <Footer />
      </div>
    </PageTransition>
  )
}