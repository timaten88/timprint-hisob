// Faqat o'rnatish uchun; ma'lumot hech qachon keshlanmaydi (API boshqa domen, har doim tarmoqdan)
self.addEventListener('install',function(e){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){});
