"use client";

import { activitiesData } from "./data";
import ActivityCard from "./ActivityCard";

export default function LotruSection() {
  if (!activitiesData) return <div>Se încarcă...</div>;

  return (
    <section id="activitati" className="py-24 bg-stone-50">
      {/* AICI AM RECREAT STILUL ELEGANT (FĂRĂ IMPORTURI):
        max-w-5xl = lățimea îngustă și elegantă
        bg-stone-100 = fundalul secțiunii
        rounded-2xl, shadow-xl, p-10 = aspectul finisat
      */}
      <div className="max-w-5xl mx-auto bg-stone-100 text-stone-800 rounded-2xl p-6 md:p-10 lg:p-16 shadow-xl">
        
        <h2 className="text-4xl font-serif text-teal-900 text-center mb-16">
          Valea Lotrului
        </h2>

        {Object.entries(activitiesData).map(([catName, data]) => (
          <div key={catName} className="mb-16">
            <h3 className="text-2xl font-serif text-teal-800 mb-8 flex items-center gap-3">
              {data.icon} {catName}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.items?.map((item, idx) => (
                <div key={idx} className="w-full">
                  <ActivityCard item={item} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}