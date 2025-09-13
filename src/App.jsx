import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function AnniversaryPage() {
  const [showLetter, setShowLetter] = useState(false);
  const [currentPoem, setCurrentPoem] = useState(0);

  const poems = [
    {
      title: "Sevgi nima ekanligini bilmasdim",
      text:
        "Nilufar, seni uchratgunimcha sevgi nima ekanini tushunmaganman.\nSeni ko‘rmasdan ham qalbimda bir mehr uyg‘ondi.\nIchimdagi tuyg‘ularni so‘z bilan ifodalash qiyin, ammo ular cheksiz.",
    },
    {
      title: "Omad keltirgan yulduzim",
      text:
        "Sen kelgach, hayotim tubdan o‘zgardi.\nQorong‘i hayotimga sen baxt nurini olib kelding.\nHar bir qadamimda sen bilan omad, sen bilan ilhom bor.",
    },
    {
      title: "Ko‘zlaring sehri",
      text:
        "Nilufar, ko‘zlaring katta, qora va mehrga to‘la.\nUlarni ko‘rsam, o‘zimni yo‘qotib qo‘yaman.\nU boshqacha, u oldingda go‘yo yosh boladek his qilaman.\nAslida juda jiddiyman, lekin sen meni o‘zgartirding.\nUni yo‘qotishdan qo‘rqaman, menga boshqa mehrning keragi yo‘q.\nYonimda bo‘lsang bas, seni juda qattiq sevaman.",
    },
  ];

  const nextPoem = () => setCurrentPoem((p) => (p + 1) % poems.length);
  const prevPoem = () => setCurrentPoem((p) => (p - 1 + poems.length) % poems.length);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 text-slate-900 antialiased">
      <header className="max-w-4xl mx-auto py-6 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/80 rounded-2xl shadow-md backdrop-blur">
            <Heart className="w-6 h-6 text-pink-500 animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Nilufar va Men</h1>
            <p className="text-xs text-slate-600">
              Bizning sevgimiz — 2024-09-06 dan abadiyatga
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowLetter(true)}
          className="rounded-full px-4 py-2 bg-pink-600 text-white shadow hover:scale-105 transition"
        >
          Nilufarga maktub
        </button>
      </header>

      {/* Birinchi ko‘rinadigan xabar */}
      <section className="max-w-4xl mx-auto px-4 mb-6">
        <div className="bg-white/80 p-4 rounded-2xl shadow text-center text-pink-700 font-semibold">
          Sevgimizga mana bir yil bo‘ldi. Senga bo‘lgan sevgim abadiy — shuni
          unutma. Biz hali ko‘p yutuqlarga erishamiz, to‘xtab qolish yo‘q! 💖
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4">
        {/* She’rlar bo‘limi */}
        <section id="poems" className="mt-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/70 rounded-2xl p-6 shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-pink-700">
                  Nilufar haqidagi she’rlar
                </h3>
                <p className="text-sm text-slate-600">
                  Har bir satr — mening qalbimdagi izhor.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prevPoem}
                  className="px-3 py-1 rounded-full border text-sm"
                >
                  « Oldingi
                </button>
                <button
                  onClick={nextPoem}
                  className="px-3 py-1 rounded-full bg-pink-600 text-white"
                >
                  Keyingi »
                </button>
              </div>
            </div>

            <article className="mt-6">
              <motion.h4
                key={poems[currentPoem].title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl font-semibold text-pink-700"
              >
                {poems[currentPoem].title}
              </motion.h4>

              <motion.p
                key={poems[currentPoem].text}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 whitespace-pre-line text-slate-700 leading-relaxed"
              >
                {poems[currentPoem].text}
              </motion.p>
            </article>
          </motion.div>
        </section>

        {/* YouTube qo‘shiq */}
        <section className="mt-8 bg-white/70 rounded-2xl p-6 shadow text-center">
          <h4 className="text-xl font-bold text-pink-700 mb-4">
            Bizning qo‘shig‘imiz 🎶
          </h4>
          <div className="w-full flex justify-center">
            <iframe
              width="100%"
              height="315"
              className="rounded-2xl shadow-lg"
              src="https://www.youtube.com/embed/q8eti5XNj1M?start=53"
              title="Jamshid Sultonov - Erkatoyim"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <footer className="mt-8 mb-16 text-center text-sm text-slate-600">
          <p>Bu sayt — Nilufarga bo‘lgan muhabbatimning ramzi.</p>
        </footer>
      </main>

      {showLetter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowLetter(false)}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-2xl w-full bg-white rounded-3xl p-8 shadow-2xl z-10"
          >
            <button
              onClick={() => setShowLetter(false)}
              className="absolute right-4 top-4 text-slate-500"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-pink-700">Nilufarga maktub</h3>
            <p className="mt-4 text-slate-700 leading-relaxed whitespace-pre-line">
              Aziz Nilufar,  
              Seni uchratgunimcha sevgi nima ekanini tushunmaganman.  
              Sen kelgach, hayotimga baxt va omad olib kirding.  
              Men seni qadrlayman va butun umr yoningda bo‘lishni istayman.  
              Ko‘zlaring esa qalbimni sehrlaydi, ularni ko‘rsam o‘zimni yo‘qotib qo‘yaman.  
              Sevgi bilan,  
              Sening sevgiling 💌
            </p>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowLetter(false)}
                className="px-4 py-2 rounded-full bg-pink-600 text-white"
              >
                Yopish
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
