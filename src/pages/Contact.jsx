import React, { useState } from 'react';
import axios from 'axios';
import { SignFootMenu } from '../components/layout/SignFootMenu';
import { Transport } from '../components/contact/Transport';
import { ContactForm } from '../components/contact/ContactForm';
import { WelcomeMessage } from '../components/contact/WelcomeMessage';
import { Localisation } from '../components/contact/Localisation';

export function Contact() {
  return (
    
<div className="pt-20">
<div className="container mx-auto px-4 py-14">
<h1 className="text-4xl font-light mb-8 mt-10">Contact</h1>

<section className="mb-12">
  <h2 className="text-xl font-bold mb-4">Localisation</h2>
  <hr className="mb-4" />
<Localisation />
</section> 

<section className="mb-12">
  <h2 className="text-xl font-bold mb-4">Transports</h2>
  <hr className="mb-4" />
<Transport />
</section> 
        
<section className="mb-12">
  <h2 className="text-xl font-bold mb-4">Formulaire de Contact</h2>
  <hr className="mb-4" />
  <h3 className="text-sm font-base mb-4">(Patientiez 1 minute lors son envoi svp)</h3>
  <ContactForm />
</section>

<section className="mb-12">
  <h2 className="text-xl font-bold mb-4">Bienvenue !</h2>
  <hr className="mb-4" />
<WelcomeMessage />
</section>

</div>
<SignFootMenu />
</div> );
}