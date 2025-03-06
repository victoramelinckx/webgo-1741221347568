
"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

            <Hero
              headline="Maximiza Tus Ventas Online con Webgo"
              subheadline="Transforma tu presencia online con diseño web centrado en las ventas, tecnología de vanguardia y la integración de IA. Deja atrás tu antigua y poco práctica web. No más pérdidas de dinero debido a malas presentaciones. Incluso si no tienes un sitio web, podemos crear uno profesional para ti, completamente gratis."
              cta1="Da el primer paso ahora. ¡Descubre cómo Webgo puede impulsar tus ventas online!"
              cta2="¿Listo para una web a la medida de tu negocio? ¡Comienza gratis hoy con Webgo!"
            />

            <How
              step1Title="Regístrate Gratis"
              step1Desc="Empieza tu viaje con nosotros sin costo. Crea tu página web y da vida a tu emprendimiento."
              step2Title="Optimiza tu Presencia Online"
              step2Desc="Transforma tu vieja web en una plataforma práctica y amigable, optimizada para SEO con nuestros servicios."
              step3Title="Integración de Tecnología Avanzada"
              step3Desc="Integramos IA para mejorar y optimizar tu sistema, enfocándonos en ventas, tecnología y experiencia del usuario."
            />

            <Aboutus
              step1Title="Acerca de nosotros"
              step1Desc="Descripción"
              step2Title="Beneficio 1"
              step2Desc="Descripción beneficio 1"
              step3Title="Beneficio 2"
              step3Desc="Descripción beneficio 2"
            />

            <Services
              heading="Nuestros Servicios"
              description="Ofrecemos una gran variedad de servicios."
              services={[]}
            />
<BeforeAndAfter />

            <Faq
              faqs={[{"pregunta":"¿Por qué no debería usar una plataforma de creación de sitios web gratuitos para mi empresa?","respuesta":"Aunque las plataformas gratuitas pueden parecer atractivas al principio, a largo plazo pueden resultar ineficientes. Normalmente, no ofrecen la flexibilidad y la personalización que tu empresa necesita para destacar. Además, a menudo carecen de características esenciales como la optimización de SEO, lo que puede hacer que tu sitio web sea difícil de encontrar para tus clientes. En [companyName], nuestro equipo de expertos en diseño web puede crear un sitio web profesional y moderno que atraerá a tu [targetAudience] y superará tus [challenges]."},{"pregunta":"¿Por qué es importante tener un diseño web moderno y práctico?","respuesta":"El diseño de tu sitio web es a menudo la primera impresión que un cliente potencial tiene de tu empresa. Un diseño obsoleto o poco práctico puede dar la impresión de que tu negocio también lo es. En [companyName], nos enfocamos en crear diseños web limpios, modernos y fáciles de navegar que reflejen la profesionalidad de tu empresa y atraigan a tu [targetAudience]."},{"pregunta":"¿Cómo puede un diseño web de calidad ayudar a mi empresa a ahorrar dinero?","respuesta":"Invertir en un diseño web de calidad puede en realidad ahorrar dinero a tu empresa a largo plazo. Un sitio web bien diseñado y fácil de usar puede aumentar la tasa de conversión, lo que significa más ventas y menos dinero gastado en publicidad. Además, un diseño web optimizado para SEO puede aumentar tu visibilidad en línea, lo que puede reducir la cantidad de dinero que necesitas gastar en anuncios pagados."},{"pregunta":"¿Cómo puede la tecnología moderna mejorar mi sitio web?","respuesta":"La tecnología moderna puede hacer que tu sitio web sea más eficiente, fácil de usar y atractivo para los visitantes. Por ejemplo, la inteligencia artificial puede utilizarse para personalizar la experiencia del usuario, mientras que las últimas tendencias en diseño web pueden hacer que tu sitio sea más atractivo visualmente. En [companyName], utilizamos la última tecnología para asegurarnos de que tu sitio web es lo mejor que puede ser."},{"pregunta":"¿Cómo puede [services] ayudar a mi empresa a tener una presencia en línea más fuerte?","respuesta":"Nuestro [services] puede ayudarte a crear un sitio web que destaque en línea. Podemos optimizar tu sitio web para SEO, lo que significa que aparecerá más alto en los resultados de búsqueda de Google. También podemos ayudarte a crear contenido atractivo que atraiga a tu [targetAudience] y a superar tus [challenges]. Con [companyName], puedes estar seguro de que tu presencia en línea es fuerte y efectiva."}]}
            />

            <BookAppointment
              heading="Empresas con presencia online, ¡no más pérdidas de dinero en publicidad y diseños web obsoletos! Es hora de renovar y optimizar con Webgo"
              description="En Webgo entendemos los retos de mantener una presencia online efectiva. Muchas veces, las empresas invierten en publicidad online, pero descuidan aspectos fundamentales como un diseño web actualizado, práctico y atractivo. Además, la falta de integración de tecnologías como la Inteligencia Artificial puede resultar en una pérdida de dinero y oportunidades. Aquí es donde entramos nosotros. Ofrecemos la creación de páginas web gratuitas para aquellos que están comenzando su emprendimiento y requieren un espacio en la web. Además, proporcionamos la creación de sitios web profesionales para empresas más establecidas que buscan una mejora significativa."
              services={[{"name":"Creación de páginas web gratuitas para emprendedores"},{"name":"Diseño de sitios web profesionales para empresas"},{"name":"Optimización de publicidad online"},{"name":"Integración de Inteligencia Artificial para mejorar y optimizar sistemas"}]}
            />
<Footer />
    </main>
  );
}
    