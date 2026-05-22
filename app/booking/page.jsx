"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { zones } from "@/app/data/zones";

function BookingForm() {
  const searchParams = useSearchParams();
  const zoneId = searchParams.get("zone");

  const [formData, setFormData] = useState({
    nume: "",
    email: "",
    perioada: "",
    zona: zoneId || "",
    copii: [],
  });

  const adaugaCopil = () => {
    setFormData({...formData, copii: [...formData.copii, ""]});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rezervare trimisă:", formData);
    alert("Rezervare recepționată!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold">Rezervare</h2>
      
      <input required placeholder="Nume" className="w-full p-3 border rounded" onChange={(e) => setFormData({...formData, nume: e.target.value})} />
      <input type="email" required placeholder="Email valid" className="w-full p-3 border rounded" onChange={(e) => setFormData({...formData, email: e.target.value})} />
      <input type="date" required className="w-full p-3 border rounded" onChange={(e) => setFormData({...formData, perioada: e.target.value})} />

      <select 
        value={formData.zona}
        required 
        className="w-full p-3 border rounded" 
        onChange={(e) => setFormData({...formData, zona: e.target.value})}
      >
        <option value="">Alege zona...</option>
        {Object.values(zones)
          .filter(z => z.isCampable)
          .map(z => <option key={z.id} value={z.id}>{z.name} ({z.priceInfo})</option>)}
      </select>

      <button type="button" onClick={adaugaCopil} className="text-sm text-teal-700 underline">
        + Adaugă copil sub 6 ani
      </button>

      {formData.copii.map((_, i) => (
        <input key={i} placeholder={`Vârstă copil ${i+1}`} type="number" className="w-full p-2 border rounded" />
      ))}

      <button className="w-full bg-teal-900 text-white p-4 rounded font-bold">Trimite</button>
    </form>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Se încarcă formularul...</div>}>
      <BookingForm />
    </Suspense>
  );
}