import React from 'react';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Rezervare Camping
          </h1>
          
          {/* Formular Tally integrat */}
          <iframe 
            src="https://tally.so/r/LZ6X6G?transparentBackground=1" 
            width="100%" 
            height="800" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0" 
            title="Rezervare Camping">
          </iframe>
        </div>
      </div>
    </div>
  );
}