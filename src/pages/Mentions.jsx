import React, { useEffect } from 'react';
import { SignFootMenu } from '../components/layout/SignFootMenu';

const Mentions = () => {
 
  return (
<div className="container mx-auto px-6 py-2 flex flex-col items-center" style={{ marginTop: '150px' }}>
  {/* Titre principal */}
  <h1 className="text-3xl font-semibold mb-8">Mentions Légales</h1>

  {/* Section : Hébergeur */}
  <section className="mb-12 w-full max-w-3xl bg-ocre p-6 rounded-md shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-center">HÉBERGEUR</h2>
    <div className="border-b-2 border-black mb-8" />
    <div className="leading-relaxed text-center">
      <p>GitHub Inc </p>
      <p>www.github.com </p>
      <p>Adresse : 88 Colin P Kelly Jr. Street, San Francisco, California, 94107</p>
    </div>
  </section>

  {/* Section : Fournisseur du domaine */}
  <section className="mb-12 w-full max-w-3xl bg-ocre p-6 rounded-md shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-center">FOURNISSEUR DU DOMAINE</h2>
    <div className="border-b-2 border-black mb-8" />
    <div className="leading-relaxed text-center">
      <p>OVH</p>
      <p>SAS au capital de 10 069 020 €</p>
      <p>RCS Lille Métropole 424 761 419 00045</p>
      <p>Code APE 2620Z</p>
      <p>Siège social : 2 rue Kellermann, 59100 Roubaix, France</p>
    </div>
  </section>

  {/* Section : Données personnelles */}
  <section className="mb-12 w-full max-w-3xl bg-ocre p-6 rounded-md shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-center">DONNÉES PERSONNELLES</h2>
    <div className="border-b-2 border-black mb-8" />
    <p className="leading-relaxed text-center">
      Vous pouvez visiter notre site sur Internet sans avoir à décliner votre identité ni à fournir des informations personnelles.
    </p>
  </section>

  {/* Section : Limitation de responsabilité */}
  <section className="mb-12 w-full max-w-3xl bg-ocre p-6 rounded-md shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-center">LIMITATION DE RESPONSABILITÉ</h2>
    <div className="border-b-2 border-black mb-8" />
    <p className="leading-relaxed text-center">
      Ce site ne saurait être tenu pour responsable des erreurs rencontrées sur le site, problèmes techniques, interprétation des informations publiées et conséquences de leur utilisation. L’utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
    </p>
  </section>

  {/* Section : Propriété intellectuelle */}
  <section className="mb-12 w-full max-w-3xl bg-ocre p-6 rounded-md shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-center">PROPRIÉTÉ INTELLECTUELLE</h2>
    <div className="border-b-2 border-black mb-8" />
    <p className="leading-relaxed text-center">
      Les contenus de ce site (structure, design, texte, image, animation, logo…) sont la propriété exclusive de Laurent LEMAIRE, sauf mention contraire. Toute représentation totale ou partielle de ce site est soumise à l’autorisation préalable, écrite et expresse de Laurent LEMAIRE.
    </p>
  </section>

  {/* Section : Éditeur */}
  <section className="mb-12 w-full max-w-3xl bg-ocre p-6 rounded-md shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-center">ÉDITEUR</h2>
    <div className="border-b-2 border-black mb-8" />
    <div className="leading-relaxed text-center">
      <p>Laurent LEMAIRE</p>
      <p>174, avenue Diane, 83700 Saint-Raphaël</p>
      <p>Directeur de la publication : Laurent LEMAIRE</p>
    </div>
  </section>

  {/* Section : Entrepreneur individuel */}
  <section className="mb-12 w-full max-w-3xl bg-ocre p-6 rounded-md shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-center">ENTREPRENEUR INDIVIDUEL</h2>
    <div className="border-b-2 border-black mb-8" />
    <div className="leading-relaxed text-center">
      <p>Marc LEMAIRE</p>
      <p>174, avenue Diane, 83700 Saint-Raphaël</p>
      <p>Email : <a href="mailto:villaterredeprovence@gmail.com" className="text-black underline">villaterredeprovence@gmail.com</a></p>
    </div>
  </section>

  {/* Section : Politique de confidentialité */}
  <section className="mb-12 w-full max-w-3xl bg-ocre p-6 rounded-md shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-center">POLITIQUE DE CONFIDENTIALITÉ</h2>
    <div className="border-b-2 border-black mb-8" />
    <p className="leading-relaxed text-left">
      <strong>Quel type d'informations recueillez-vous ?</strong><br />
      Nous collectons les informations personnelles saisies sur notre site via le formulaire de contact, l’envoi d’un email, ou d’autres interactions avec notre site.
    </p><br />

    <p className="leading-relaxed text-left">
      <strong>Comment recueillez-vous des informations ?</strong><br />
      Lorsque vous effectuez une transaction sur notre site web, dans le cadre du processus, nous recueillons les informations personnelles que vous nous donnez, telles que votre nom, votre adresse et votre adresse e-mail. 
      <br /> Vos informations personnelles ne seront utilisées que pour les raisons spécifiques mentionnées ci-dessus.    </p>
      <br />
      <p className="leading-relaxed text-left">
      <strong>Pourquoi recueillez-vous de telles informations personnelles ?

</strong><br />
- Nous recueillons ces informations non personnelles et personnelles aux fins suivantes :
<br />
- Fournir et exploiter les services ;
<br />
- Fournir à nos utilisateurs une Assistance et un support technique permanents ;
<br />
- Pouvoir contacter nos visiteurs et utilisateurs avec des avis généraux ou personnalisés relatifs au service et des messages promotionnels ;
<br />
- Pour créer des données statistiques agrégées et d'autres informations non personnelles agrégées et/ou déduites, que nous ou nos partenaires commerciaux pouvons utiliser pour fournir et améliorer nos services respectifs ;
<br />
- Se conformer aux lois et règlements applicables. </p>

<br />
<p className="leading-relaxed text-left">
      <strong>Comment stockez-vous, utilisez, partagez-vous et divulguez-vous les informations personnelles des visiteurs de votre site ?</strong><br />
      Notre site est hébergé sur la plateforme GitHub Pages. 
      <br /> GitHub Pages nous fournit la plateforme en ligne qui nous permet de vous vendre nos produits et services. 
      <br /> Vos données peuvent être stockées par le biais du stockage de données, des bases de données et des applications générales de GitHub Pages Elles stockent vos données sur des serveurs sécurisés derrière un pare-feu.

      <br /> Toutes les passerelles de paiement direct proposées et utilisées par notre site respectent les normes établies par PCI-DSS, telles que gérées par le PCI Security Standards Council, qui est un effort conjoint de marques comme Visa, MasterCard, American Express et Discover.<br /> Les exigences PCI-DSS contribuent à garantir le traitement sécurisé des informations relatives aux cartes de crédit par notre magasin et ses fournisseurs de services. </p>
      <br />
      <p className="leading-relaxed text-left">
      <strong>Comment communiquez-vous avec les visiteurs de votre site ?</strong><br />
      Nous pouvons vous contacter pour vous informer sur une offre promotionnelle, pour résoudre des problèmes avec votre compte, pour résoudre un litige, pour collecter des frais ou des sommes dues, pour sonder votre opinion par le biais d'enquêtes ou de questionnaires, pour envoyer des mises à jour, ou si nécessaire pour vous contacter afin de faire respecter notre contrat d'utilisation, les lois nationales applicables, et tout accord que nous pourrions avoir avec vous. À ces fins, nous pouvons vous contacter par courrier électronique, téléphone, messages textuels et courrier postal.
Nous ne vendons, n’échangeons et ne transférons pas vos informations personnelles identifiables à des tiers.</p>
<br />
      <p className="leading-relaxed text-left">
      <strong>Comment utilisez-vous les cookies et autres outils de suivi ?

</strong><br />
Nous utilisons les cookies obligatoires proposé par GitHub Pages ainsi que les balises web fournie par Google Analytics à des fins statistique, de suivi et évolutions du nombre d’utilisateur, ceci afin d’améliorer la visibilité et son référencement naturel de ce site internet parmi les moteurs de recherche. </p>
<br />

      <p className="leading-relaxed text-left">
      <strong>Comment recueillez-vous des informations ?
      </strong><br />
      Si vous ne souhaitez plus que nous traitions vos données, veuillez nous contacter à villaterredeprovence@gmail.com ou nous envoyer via le formulaire de contact. </p>
      <br />

      <p className="leading-relaxed text-left">
      <strong>Mises à jour de la politique de confidentialité

</strong><br />
      Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment, aussi nous vous invitons à la consulter fréquemment. Les modifications et les clarifications prendront effet dès leur publication sur le site web. Si nous apportons des modifications importantes à la présente politique, nous vous informerons ici de sa mise à jour, afin que vous sachiez quelles informations nous recueillons, comment nous les utilisons et dans quelles circonstances, le cas échéant, nous les utilisons et/ou les divulguons. </p>

      <br />


  </section>

  {/* Section : Politique des cookies */}
  <section className="mb-12 w-full max-w-3xl bg-ocre p-6 rounded-md shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-center">POLITIQUE D’UTILISATION DES COOKIES</h2>
    <div className="border-b-2 border-black mb-8" />
    <p className="leading-relaxed text-left">
    Ce site utilise des cookies. Ces cookies enregistrent de façon anonyme des informations relatives à votre navigation sur notre site, et stockent ces informations, ainsi, vous n’aurez pas besoin, lors de votre prochaine visite, de les saisir à nouveau. Vous pouvez vous opposer à l’enregistrement de cookies en configurant les paramètres de votre navigateur.    </p>
    <br />
  
    <p className="leading-relaxed text-left">
      <strong>Qu’est-ce qu’un cookie ?</strong><br />
      Un cookie est un fichier qui est téléchargé sur votre terminal (ordinateur, smartphone, tablette…) lorsque vous consultez certains sites web. Les cookies permettent notamment à ces sites web de stocker et de récupérer des informations concernant les habitudes de navigation de l’utilisateur d'un site ou de son équipement puis, en fonction de ces informations, de le reconnaître. 

Toutefois, les données obtenues sont restreintes. Elles concernent uniquement le nombre de pages visitées, la ville où est localisée l’adresse IP de connexion au site web, la fréquence et la récurrence des visites, la durée de la visite, le navigateur, l’opérateur ou le type de terminal à partir duquel la visite est effectuée. Des données telles que le nom, le prénom de l’utilisateur ou l'adresse postale de connexion ne sont, en aucun cas, obtenues. </p>
<br />

      <p className="leading-relaxed text-left">
      <strong>Les cookies utilisés sur ce site web :
      </strong><br />
      Les cookies utilisés sur ce site web stockent un identifiant ou des instructions permettant de gérer la navigation de l’utilisateur sur notre site. Ils expirent pendant ou après la session, ou après un délai ne dépassant pas 13 mois, conformément aux recommandations de la CNIL.
 </p>
 <br />

      <p className="leading-relaxed text-left">
      <strong>Les cookies utilisés sur ce site web permettent :
 

 de faciliter la navigation de l’utilisateur sur notre site</strong><br />
 en suivant sa navigation au cours de la session afin d’assurer la qualité et la sécurité de la navigation sur le site ;

en conservant les informations saisies dans les champs prévus à cet effet lorsque l’utilisateur change de page ;

en permettant à l’utilisateur de rester sur le même serveur hôte pendant toute la durée de sa session ;

en redirigeant l’utilisateur vers le site de la langue ou de la filiale correspondante au pays depuis lequel il semble se connecter ;

en gérant les pics de charge ;

en permettant à l’utilisateur de rester connecté à certaines parties du site lors de sa navigation ;

en masquant l’information sur l’utilisation des cookies du site lorsque l’utilisateur a accepté leur utilisation ;

en prenant en compte le refus de l’utilisateur quant à l’analyse des données collectées sur le site.
</p>
<br />

      <p className="leading-relaxed text-left">
      <strong>et d’améliorer nos services
      </strong><br />
      en obtenant des données statistiques anonymes de fréquentation concernant l’utilisation du site visité ;

en permettant le suivi d’un clic effectué dans une newsletter jusqu’aux pages du site concerné ;

en identifiant les visiteurs du site qui proviendraient d'une campagne digitale. </p>
<br />
  
<p className="leading-relaxed text-left">
      <strong>Cookies et traceurs tiers :
      </strong><br />
      Il s’agit de cookies ou de traceurs téléchargés sur votre terminal par des entités tierces (partenaires, annonceurs…) lorsque vous naviguez sur certaines pages de notre site. 

Ces entités se sont engagées à respecter la législation en vigueur quant aux cookies/traceurs et garantissent la mise en œuvre de mesures de protection et de sécurisation des données recueillies. 
<br />

Vous pouvez autoriser, bloquer ou supprimer les cookies installés sur votre poste en paramétrant les options de votre navigateur. Pour les navigateurs les plus courants, vous trouverez des indications via les liens suivants : 
 

Firefox

Chrome

Internet Explorer

Opera

Safari
 

Enfin, nous tenons à vous informer que la désactivation d’un cookie pourrait empêcher ou rendre difficile la navigation ou la prestation des services proposés sur notre site Internet.

<br />
 
Vous pouvez activer l’option Opt-Out mise en place par AT Internet permettant de bloquer la collecte d’information de navigation par leurs services sur cette page.

Vous pouvez activer l’option Opt-Out mise en place par ABTasty permettant de bloquer la collecte d’information de navigation par leurs services sur cette page.</p>
  
      
  
  </section>

  <a href="#" className="text-blue-500 underline mb-4 block" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>

Retour en haut
</a>

       <SignFootMenu />

    </div>
  );
};

export default Mentions;
