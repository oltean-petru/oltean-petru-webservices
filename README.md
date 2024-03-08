# PUT & PATCH
## Quelle est la différence entre un PUT un PATCH

La différence entre PUT et PATCH est que PUT est utilisé pour mettre à jour un enregistrement entier, alors que PATCH est utilisé pour mettre à jour une partie de l'enregistrement.

# FETCH/AXIOS
## Pourquoi un call vers mon api depuis Postman fonctionne mais semble bloqué lorsque le même call est exécuté par Firefox?

La raison pour laquelle un appel vers l'API depuis Postman fonctionne mais semble bloqué l'appel est exécuté par Firefox est que Firefox (et la majorité des navigateurs) implémente une politique de sécurité "Same-Origin Policy" (cors) qui bloque les appels cross-origin. Pour contourner cette politique, configurer l'API pour accepter les appels cross-origin (ou whitelist l'origine de l'appel).

# NGINX/APACHE
## Qu'est ce qui justifie d'avoir en plus de notre api node un serveur web comme Apache ou Nginx?

Il est justifié d'avoir un serveur web comme Apache ou Nginx en plus de notre API Node pour plusieurs raisons:
- **Load Balancing**
- **Reverse Proxy**

Le load balancing permet de distribuer la charge entre plusieurs serveurs, ce qui permet de répartir la charge et d'assurer une meilleure disponibilité.

Le reverse proxy permet de cacher l'infrastructure derrière le serveur web, ce qui permet de protéger l'infrastructure et de cacher les détails de l'implémentation.

# PERFORMANCES
## Citez 3 axes vus en cours pour améliorer les performance d'une api Rest

- **Caching**: Utiliser des caches pour stocker les réponses des requêtes précédentes et les réutiliser pour les requêtes futures.
- **Compression**: Compresser les réponses avec des standards comme gzip pour réduire la taille des données envoyées.
- **Load Balancing**: Distribuer la charge entre plusieurs serveurs pour améliorer la disponibilité et la performance.