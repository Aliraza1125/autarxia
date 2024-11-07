"use client";
import React, { useState } from "react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firma: "",
    email: "",
    anrede: "",
    telefon: "",
    vorname: "",
    nachname: "",
    strasse: "",
    postleitzahl: "",
    ort: "",
    land: "",
    hybrid: false,
    photovoltaik: false,
    energiespeicher: false,
    blockheizkraftwerke: false,
    buildingType: "",
    stromverbrauch: 100,
    zusatzliche: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16 text-justify">
      {/* Title Section */}
      <div className="mb-12 ">
        <h2 className="text-[#00c3f3] text-5xl font-roboto font-light mb-12 tracking-widest">
          Kontakt
        </h2>
        <h3 className="text-xl font-roboto mb-2 tracking-wide">
          Sie würden gerne mehr erfahren?
        </h3>
        <p className="text-base font-roboto text-gray-700 tracking-wider">
          Gerne — Rufen Sie uns unter +49 175/5283795 an Oder füllen Sie das
          folgende Formular aus. Kreuzen Sie einfach die Themen an, zu denen wir
          Sie kontaktieren dürfen. Wir werden uns dann schnellstmöglichst bei
          Ihnen melden:
        </p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Firma */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              FIRMA
            </label>
            <input
              type="text"
              name="firma"
              value={formData.firma}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              EMAIL ADRESSE *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          {/* Anrede */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              ANREDE *
            </label>
            <select
              name="anrede"
              required
              value={formData.anrede}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="">Bitte wählen</option>
              <option value="herr">Herr</option>
              <option value="frau">Frau</option>
            </select>
          </div>

          {/* Telefon */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              TELEFONNUMMER *
            </label>
            <div className="flex mt-1">
              <div className="flex items-center px-3 tounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                <span className="text-sm">+49</span>
              </div>
              <input
                type="tel"
                name="telefon"
                required
                value={formData.telefon}
                onChange={handleInputChange}
                className="mt-0 block w-full rounded-r-md border border-gray-300 px-3 py-2"
              />
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {/* Vorname */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              VORNAME *
            </label>
            <input
              type="text"
              name="vorname"
              required
              value={formData.vorname}
              onChange={handleInputChange}
              className="mt-1 block w-[50%] rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          {/* Nachname */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              NACHNAME *
            </label>
            <input
              type="text"
              name="nachname"
              required
              value={formData.nachname}
              onChange={handleInputChange}
              className="mt-1 block w-[50%] rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
        </div>

        {/* Address Information */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {/* Strasse */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              STRASSE *
            </label>
            <input
              type="text"
              name="strasse"
              required
              value={formData.strasse}
              onChange={handleInputChange}
              className="mt-1 block w-[50%] rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          {/* Postleitzahl */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              POSTLEITZAHL *
            </label>
            <input
              type="text"
              name="postleitzahl"
              required
              value={formData.postleitzahl}
              onChange={handleInputChange}
              className="mt-1 block w-[50%] rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          {/* Ort */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              ORT *
            </label>
            <input
              type="text"
              name="ort"
              required
              value={formData.ort}
              onChange={handleInputChange}
              className="mt-1 block w-[50%] rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          {/* Land */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              LAND
            </label>
            <select
              name="land"
              value={formData.land}
              onChange={handleInputChange}
              className="mt-1 block w-[50%] rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="">Bitte wählen</option>
              <option value="deutschland">Deutschland</option>
              <option value="osterreich">Österreich</option>
              <option value="schweiz">Schweiz</option>
            </select>
          </div>
        </div>

        {/* Contact Options */}
        <div className="space-y-4">
          <p className="font-medium text-xl text-gray-700 mb-8">
            Bitte kontaktieren Sie mich zu (Mehrfachnennung möglich):
          </p>
          <div className="space-y-7">
            {/* Photovoltaik Section */}
            <div className="space-y-2">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="pvEinfamilienhaus"
                  checked={formData.pvEinfamilienhaus}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <span className="text-lg text-gray-700">
                  <span className="text-green-800">Photovoltaik-Anlage</span>{" "}
                  auf <span className="text-red-800">Einfamilienhaus</span>
                </span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="pvMehrfamilienhaus"
                  checked={formData.pvMehrfamilienhaus}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <span className="text-lg text-gray-700">
                  <span className="text-green-800">Photovoltaik-Anlage</span>{" "}
                  auf <span className="text-red-800">Mehrfamilienhaus</span>
                </span>
              </label>
              <label className="flex items-center space-x-3 mb-5">
                <input
                  type="checkbox"
                  name="pvGewerbeGebaude"
                  checked={formData.pvGewerbeGebaude}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <span className="text-lg text-gray-700">
                  <span className="text-green-800">Photovoltaik-Anlage</span>{" "}
                  auf <span className="text-red-800">Gewerbe-Gebäude</span>
                </span>
              </label>
            </div>
            {/* Energiespeicher Section */}
            <div className="space-y-2">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="energiespeicherEinfamilienhaus"
                  checked={formData.energiespeicherEinfamilienhaus}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <span className="text-lg text-gray-700">
                  <span className="text-green-800">Energiespeicher</span> für{" "}
                  <span className="text-red-800">Einfamilienhaus</span>
                </span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="energiespeicherMehrfamilienhaus"
                  checked={formData.energiespeicherMehrfamilienhaus}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <span className="text-lg text-gray-700">
                  <span className="text-green-800">Energiespeicher</span> für{" "}
                  <span className="text-red-800">Mehrfamilienhaus</span>
                </span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="energiespeicherGewerbe"
                  checked={formData.energiespeicherGewerbe}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <span className="text-lg text-gray-700">
                  <span className="text-green-800">Energiespeicher</span> für{" "}
                  <span className="text-red-800">
                    Gewerbe- / Industriebetrieb
                  </span>
                </span>
              </label>
            </div>
            {/* Additional Options */}
            <div className="space-y-2">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="blockheizkraftwerke"
                  checked={formData.blockheizkraftwerke}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <span className="text-lg text-gray-700">
                  <span className="text-green-800">Blockheizkraftwerke</span>{" "}
                  als Teil des autarxia{" "}
                  <span className="text-red-800">Hybridkraftwerks</span>
                </span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="warmepumpen"
                  checked={formData.warmepumpen}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <span className="text-lg text-gray-700">
                  <span className="text-green-800">Wärmepumpen</span> als Teil
                  des autarxia{" "}
                  <span className="text-red-800">Hybridkraftwerks</span>
                </span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="ladelosungen"
                  checked={formData.ladelosungen}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <span className="text-lg text-gray-700">
                  <span className="text-green-800">Ladelösungen</span> für{" "}
                  <span className="text-red-800">Elektroautos</span>
                </span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="energiemanagement"
                  checked={formData.energiemanagement}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <span className="text-lg text-gray-700">
                  <span className="text-green-800">
                    Energiemanagement-Lösungen
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Building Type */}
        <div>
          <p className="font-medium text-gray-700 mb-3">TYP MEINES GEBÄUDES:</p>
          <div className="flex flex-wrap gap-4">
            {[
              "EINFAMILIENHAUS",
              "MEHRFAMILIENHAUS",
              "INDUSTRIE-/ GEWERBEGEBÄUDE",
              "GARTENHAUS",
            ].map((type) => (
              <label
                key={type}
                className={`px-4 py-2 border rounded-md cursor-pointer ${
                  formData.buildingType === type
                    ? "bg-blue-50 border-blue-500"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="buildingType"
                  value={type}
                  checked={formData.buildingType === type}
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <span className="text-sm">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="font-medium text-gray-700 mb-3">
            JÄHRLICHER STROMVERBRAUCH VON CA.
          </p>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              name="stromverbrauch"
              min="0"
              max="200"
              value={formData.stromverbrauch}
              onChange={handleInputChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm text-gray-700">{formData.stromverbrauch}kWh</span>
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            ZUSÄTZLICHE INFORMATIONEN
          </label>
          <textarea
            name="zusatzliche"
            value={formData.zusatzliche}
            onChange={handleInputChange}
            rows={4}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        {/* Submit Field */}
        <div>
          <label className="block text-sm font-medium text-red-800">
            Absenden
          </label>
          <input
            type="text"
            name="submit"
            className="mt-1 block w-full rounded-none border border-gray-300 px-3 py-2"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactFormSection;
