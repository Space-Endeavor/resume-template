import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-3">
            <Mail className="text-blue-500" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">john@example.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="text-blue-500" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="text-blue-500" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-600">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}