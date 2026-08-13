'use client';

import { useState } from 'react';

const copy = {
  fr: {
    bakery: 'Boulangerie · Hawkesbury',
    nav: { products: 'Produits', catering: 'Traiteur', about: 'À propos', visit: 'Nous visiter' },
    eyebrow: 'Boulangerie · Pâtisserie · Lunch',
    title1: 'Du bon,', title2: 'du frais,', title3: 'au cœur de Hawkesbury.',
    lead: 'Une adresse locale sur la rue Main pour vos pains, pâtisseries, lunchs et commandes pour vos événements.',
    seeProducts: 'Voir nos produits', findUs: 'Nous trouver', rating: '★ 4.5/5 sur Tripadvisor',
    essentials: 'Ce qu’on y trouve',
    products: [
      ['Pains & viennoiseries', 'Des classiques de boulangerie pour la maison ou la pause-café.'],
      ['Sandwichs & lunch', 'Sandwichs réguliers, mini-sandwichs, wraps et options déjeuner.'],
      ['Pâtisseries', 'Mini-pâtisseries, douceurs et desserts pour toutes sortes d’occasions.'],
      ['Quiches & pâtés', 'Quiches variées, pâté au poulet et pâté à la viande.'],
      ['Plateaux & commandes', 'Charcuteries, fromages, crudités et autres options pour les groupes.'],
    ],
    cateringEyebrow: 'Menu traiteur · commandes de groupe',
    cateringTitle: 'Un lunch simple à organiser, pour petits et grands groupes.',
    cateringText: 'Le menu traiteur trouvé pour Le Petit Pain comprend plusieurs formules de sandwichs, des plateaux, des hors-d’œuvre, des quiches et des pâtés. Appelez pour confirmer les prix et la disponibilité.',
    optionsTitle: 'Formules sandwichs',
    options: [
      ['Option #1', '$12.00 / $12.50 p.p.', 'Sandwichs réguliers ou mini-sandwichs, crudités & trempette, fromage'],
      ['Option #2', '$16.00 / $16.50 p.p.', 'Sandwichs, crudités & trempette, fromage, salades'],
      ['Option #3', '$18.00 / $18.50 p.p.', 'Sandwichs, crudités & trempette, fromage, salades, biscuits'],
    ],
    buildTitle: 'Lunch style buffet — à la carte',
    buildItems: [
      ['Sandwich régulier', '$5.50 / $7.00–$7.50 avec fromage'],
      ['Mini-sandwich', '$3.00 chacun'],
      ['Crudités & trempette', '$3.00 p.p.'],
      ['Fromage (doux, suisse & brie)', '$3.50 p.p.'],
      ['Salades', '$4.00 p.p.'],
      ['Biscuits', '$2.00 p.p.'],
      ['Mini-pâtisseries', '$3.00 par pâtisserie'],
      ['Pâtisseries régulières', '$4.00–$6.50 par pâtisserie'],
    ],
    moreTitle: 'Encore plus pour vos événements',
    moreItems: ['Hors-d’œuvre variés', 'Plateau charcuteries & fromages', 'Plateau mixte', 'Quiches', 'Pâté au poulet', 'Pâté à la viande'],
    callOrder: 'Appeler pour commander',
    priceNote: '* Prix tirés d’un menu « Holidays 2025 » et sujets à changement. Confirmez toujours le prix au moment de commander.',
    aboutEyebrow: 'À propos',
    aboutTitle: 'Une boulangerie locale, bien ancrée sur la rue Main.',
    aboutText: 'Le Petit Pain fait partie du paysage du centre-ville de Hawkesbury. Le site met l’accent sur ce que les clients veulent savoir rapidement : ce qu’on y trouve, les options pour les groupes, où aller et comment joindre l’équipe.',
    aboutScript: 'Au plaisir de vous accueillir.',
    planVisit: 'Planifier votre visite →',
    visitHours: 'Heures d’ouverture',
    visitHoursText: 'Lun–Ven : 9 h–15 h|Sam–Dim : Fermé|Les heures peuvent varier les jours fériés.',
    location: 'Nous trouver', map: 'Voir sur la carte →', contact: 'Nous joindre', follow: 'Suivez Le Petit Pain',
    footerMock: 'Maquette conceptuelle — non affiliée officiellement à Le Petit Pain.'
  },
  en: {
    bakery: 'Bakery · Hawkesbury',
    nav: { products: 'Products', catering: 'Catering', about: 'About', visit: 'Visit us' },
    eyebrow: 'Bakery · Pastries · Lunch',
    title1: 'Good food,', title2: 'made fresh,', title3: 'at the heart of Hawkesbury.',
    lead: 'A local Main Street stop for breads, pastries, lunches and group orders for your next occasion.',
    seeProducts: 'See our products', findUs: 'Find us', rating: '★ 4.5/5 on Tripadvisor',
    essentials: 'What you’ll find',
    products: [
      ['Bread & pastries', 'Bakery favourites for home or your coffee break.'],
      ['Sandwiches & lunch', 'Regular sandwiches, mini sandwiches, wraps and lunch options.'],
      ['Pastries', 'Mini pastries, sweets and desserts for all kinds of occasions.'],
      ['Quiche & pies', 'Assorted quiche, chicken pot pie and meat pie.'],
      ['Platters & orders', 'Charcuterie, cheese, veggie and other group options.'],
    ],
    cateringEyebrow: 'Catering menu · group orders',
    cateringTitle: 'An easy lunch spread for groups big or small.',
    cateringText: 'A Le Petit Pain catering menu lists several sandwich packages, platters, hors d’oeuvres, quiches and savoury pies. Call to confirm current pricing and availability.',
    optionsTitle: 'Sandwich packages',
    options: [
      ['Option #1', '$12.00 / $12.50 p.p.', 'Regular or mini sandwiches, veggies & dip, cheese'],
      ['Option #2', '$16.00 / $16.50 p.p.', 'Sandwiches, veggies & dip, cheese, salads'],
      ['Option #3', '$18.00 / $18.50 p.p.', 'Sandwiches, veggies & dip, cheese, salads, cookies'],
    ],
    buildTitle: 'Build-your-own buffet lunch',
    buildItems: [
      ['Regular sandwich', '$5.50 / $7.00–$7.50 with cheese'],
      ['Mini sandwich', '$3.00 each'],
      ['Veggies & dip', '$3.00 p.p.'],
      ['Cheese (mild, Swiss & brie)', '$3.50 p.p.'],
      ['Salads', '$4.00 p.p.'],
      ['Cookies', '$2.00 p.p.'],
      ['Mini pastries', '$3.00 each'],
      ['Regular pastries', '$4.00–$6.50 each'],
    ],
    moreTitle: 'More for your event',
    moreItems: ['Assorted hors d’oeuvres', 'Charcuterie & cheese board', 'Mixed board', 'Quiche', 'Chicken pot pie', 'Meat pie'],
    callOrder: 'Call to order',
    priceNote: '* Prices shown are from a “Holidays 2025” menu and are subject to change. Always confirm pricing when ordering.',
    aboutEyebrow: 'About',
    aboutTitle: 'A local bakery, right at home on Main Street.',
    aboutText: 'Le Petit Pain is part of downtown Hawkesbury. This site focuses on what customers want to know quickly: what’s available, group-order options, where to go and how to reach the bakery.',
    aboutScript: 'We look forward to welcoming you.',
    planVisit: 'Plan your visit →',
    visitHours: 'Opening hours',
    visitHoursText: 'Mon–Fri: 9 a.m.–3 p.m.|Sat–Sun: Closed|Hours may vary on holidays.',
    location: 'Find us', map: 'View on map →', contact: 'Contact us', follow: 'Follow Le Petit Pain',
    footerMock: 'Concept mockup — not officially affiliated with Le Petit Pain.'
  }
};

export default function Home() {
  const [lang, setLang] = useState('fr');
  const t = copy[lang];
  const otherLang = lang === 'fr' ? 'EN' : 'FR';

  return (
    <main>
      <section id="top" className="hero">
        <img className="heroImage" src="/storefront.jpg" alt="Le Petit Pain bakery storefront in Hawkesbury" />
        <div className="heroShade" />
        <header className="nav shell">
          <a className="brand" href="#top" aria-label="Le Petit Pain">
            <span className="brandMark">LPP</span>
            <span><strong>Le Petit Pain</strong><small>{t.bakery}</small></span>
          </a>
          <nav>
            <a href="#produits">{t.nav.products}</a>
            <a href="#traiteur">{t.nav.catering}</a>
            <a href="#apropos">{t.nav.about}</a>
            <a href="#visiter">{t.nav.visit}</a>
            <button className="lang" onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} aria-label={`Switch to ${otherLang}`}>{otherLang}</button>
          </nav>
        </header>
        <div className="heroContent shell">
          <div className="heroCopy">
            <p className="eyebrow light">{t.eyebrow}</p>
            <h1>{t.title1}<br/>{t.title2}<br/><em>{t.title3}</em></h1>
            <p className="lead">{t.lead}</p>
            <div className="actions">
              <a className="button gold" href="#produits">{t.seeProducts} <span>→</span></a>
              <a className="button outline" href="#visiter">{t.findUs}</a>
            </div>
            <div className="proof"><span>{t.rating}</span><span>245 Main St E · Hawkesbury</span><span>{lang === 'fr' ? 'Lun–Ven · 9 h–15 h' : 'Mon–Fri · 9 a.m.–3 p.m.'}</span></div>
          </div>
        </div>
      </section>

      <section id="produits" className="section shell">
        <div className="sectionTitle"><span></span><p>{t.essentials}</p><span></span></div>
        <div className="productGrid">
          {t.products.map((p, i) => (
            <article className="productCard" key={p[0]}>
              <div className="productNumber">0{i + 1}</div>
              <div><h3>{p[0]}</h3><p>{p[1]}</p></div>
              <span className="arrow">→</span>
            </article>
          ))}
        </div>
      </section>

      <section id="traiteur" className="cateringWrap">
        <div className="shell cateringIntro">
          <div>
            <p className="eyebrow light">{t.cateringEyebrow}</p>
            <h2>{t.cateringTitle}</h2>
          </div>
          <div className="cateringIntroText"><p>{t.cateringText}</p><a className="button gold" href="tel:+16136324486">{t.callOrder} <span>→</span></a></div>
        </div>

        <div className="shell packageGrid">
          {t.options.map((o) => (
            <article className="packageCard" key={o[0]}>
              <div className="packageTop"><h3>{o[0]}</h3><strong>{o[1]}</strong></div>
              <p>{o[2]}</p>
            </article>
          ))}
        </div>

        <div className="shell cateringDetails">
          <article className="pricePanel">
            <p className="eyebrow">{t.buildTitle}</p>
            <div className="priceList">
              {t.buildItems.map((item) => <div className="priceRow" key={item[0]}><span>{item[0]}</span><strong>{item[1]}</strong></div>)}
            </div>
          </article>
          <article className="morePanel">
            <p className="eyebrow light">{t.moreTitle}</p>
            <div className="moreTags">{t.moreItems.map((item) => <span key={item}>{item}</span>)}</div>
            <a className="phoneLight" href="tel:+16136324486">613 632-4486</a>
          </article>
        </div>
        <p className="shell priceNote">{t.priceNote}</p>
      </section>

      <section id="apropos" className="about shell">
        <div className="aboutPhotoWrap"><img className="aboutPhoto" src="/storefront.jpg" alt="Le Petit Pain on Main Street in Hawkesbury" /></div>
        <div className="aboutCopy">
          <p className="eyebrow">{t.aboutEyebrow}</p>
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
          <p className="script">{t.aboutScript}</p>
          <a className="textLink" href="#visiter">{t.planVisit}</a>
        </div>
      </section>

      <section id="visiter" className="visit">
        <div className="shell visitGrid">
          <div className="visitBlock"><div className="visitIcon">◷</div><div><p className="visitLabel">{t.visitHours}</p><p className="visitText hoursText">{t.visitHoursText.split('|').map((line, i) => <span className={i === 2 ? 'hoursNote' : ''} key={line}>{line}</span>)}</p></div></div>
          <div className="visitBlock"><div className="visitIcon">⌖</div><div><p className="visitLabel">{t.location}</p><p className="visitText">245 Main St E<br/>Hawkesbury, ON K6A 1A1</p><a className="textLink" href="https://www.google.com/maps/search/?api=1&query=245+Main+Street+East+Hawkesbury+Ontario" target="_blank" rel="noreferrer">{t.map}</a></div></div>
          <div className="visitBlock"><div className="visitIcon">☎</div><div><p className="visitLabel">{t.contact}</p><a className="phone" href="tel:+16136324486">613 632-4486</a><p className="socialLabel">{t.follow}</p><div className="socials"><a href="https://www.facebook.com/LePetitPain/" target="_blank" rel="noreferrer">Facebook</a><a href="https://www.instagram.com/lepetitpain.bakery/" target="_blank" rel="noreferrer">Instagram</a></div></div></div>
        </div>
      </section>

      <footer className="footer"><div className="shell footerInner"><p>© Le Petit Pain · Hawkesbury</p><p>{t.footerMock}</p></div></footer>
    </main>
  );
}
