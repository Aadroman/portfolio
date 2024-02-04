// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Application bancaire',
		category: 'Application Java',
		img: require('@/assets/images/ui-project-1.jpg'),
		date: 'été 2022',
		tag: 'JavaFX / IHM',
		client: {
			name: 'IUT de Blagnac',
			services: 'Developpement d\'applications',
			website: 'https://www.iut-blagnac.fr/fr/',
			phone: '05 62 74 75 75',
		},
		objectives: 'Réalisation d\'une application bancaire en JAVA sur Eclipse avec Java FX et SceneBuilder, permettant de gérer les comptes bancaires de clients. Gestion de ce projet sur GitHub et rédaction des documentations.',
		technologies: [
			'JAVA',
			'JavaFX',
			'SceneBuilder',
			'Github',
		],
		challenge: [
			'Cette application a été réalisée lors de notre première année de BUT informatique, nous avions pour but de réaliser une application nommée "DAILY BANK", celle-ci nous permettra de simuler des actions que l’on peut retrouver dans une banque du monde réel.',
			'La banque DailyBank souhaite développer une application JAVA-Oracle de gestion des comptes clients pour remplacer plusieurs outils obsolètes. Ce développement s’inscrit dans le cadre de la restructuration de ses services bancaires et l’application sera déployée dans les 100 agences que compte son réseau. Nous travaillerons à partir d’une application existante « Daily Bank » qu’il faudra adapter aux nouveaux besoins de la banque.',
			'L’application doit permettre de gérer des comptes bancaires de dépôt pour des clients préalablement créés. Elle devra permettre de débiter, créditer un compte soit par virement c’est à dire un échange d’argent entre deux comptes distincts mais domiciliés dans le réseau bancaire, soit par une personne physique se présentant devant un guichet.',
		],
		socialSharings: [
			{
				id: 1,
				name: 'Github',
				icon: 'github',
				url: 'https://github.com/Mazlai/SAE2.01-2.05',
			},
			// ... autres réseaux sociaux
		],
		images: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/ui-project-1.jpg'),
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/web-project-2.jpg'),
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/mobile-project-2.jpg'),
			},
		],
	},
	{
		id: 2,
		title: 'Application web de gestion de vacataires',
		category: 'Application Web',
		img: require('@/assets/images/web-project-2.jpg'),
		date: 'Automne 2023',
		tag: 'App de gestion Web / Angular',
		client: {
			name: 'IUT de Blagnac',
			services: 'Developpement d\'applications',
			website: 'https://www.iut-blagnac.fr/fr/',
			phone: '05 62 74 75 75',
		},
		objectives: 'La réforme du BUT a vu exploser le nombre de nos vacataires. Le département informatique souhaite affecter un responsable des vacataires. Il lui faut une interface de gestion de ses vacataires qui soit en lien avec l\'embryon de base existante déjà dans Flop!Edt.',
		technologies: [
			'Typescript',
			'Angular',
			'MangoDB',
			'Docker',
			'Github',
		],
		challenge: [
			"La gestion des vacataires à l’IUT actuelle laisse à désirer en termes d'efficacité et d'optimisation. Actuellement, elle repose sur des méthodes manuelles, chaque gestion de vacataire étant consignée sur des fiches en papier. Pour remédier à cette situation, Jean-Michel Bruel a entrepris le développement d'une application web dédiée à cette tâche. Cependant, en raison de contraintes de temps, il nous a confié ce projet, fournissant une maquette de base. Notre mission était donc de poursuivre le développement de cette application en apportant des améliorations substantielles.",
			"Depuis la réforme du BUT, le nombre de vacataires employés par l’IUT a grandement augmenté. A tel point qu’il a été décidé de définir un responsable des vacataires qui aura pour rôle de les affecter et désaffecter. Pour cela, ce responsable a besoin d’une interface web lui permettant de facilement gérer les vacataires mais aussi les différents cours affectables. Cet outil, à l’heure actuelle inexistant, sera créé par des élèves de troisième année de la filière informatique de l’établissement dans le cadre des heures de SAE.",		],
		socialSharings: [
			{
				id: 1,
				name: 'Github',
				icon: 'github',
				url: 'https://github.com/SAE-IUT/sae5.01-gestion_vacataires/',
			},
			// ... autres réseaux sociaux
		],
		images: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/ui-project-1.jpg'),
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/web-project-2.jpg'),
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/mobile-project-2.jpg'),
			},
		],
	},
	{
		id: 3,
		title: 'Site web e-commerce',
		category: 'Site Web',
		img: require('@/assets/images/mobile-project-2.jpg'),
		date: 'hiver 2022-2023',
		tag: 'Website / IHM / PHP / e-commerce',
		client: {
			name: 'Cheribou (Fictif) - IUT de Blagnac',
			services: 'Developpement d\'applications',
			website: 'https://www.iut-blagnac.fr/fr/',
			phone: '05 62 74 75 75',
		},
		objectives: "Développement d'un site web de vente de bonbons en PHP, HTML, et CSS, intégré à une base de données SQL. Création d'une application JAVAFX pour visualiser et configurer les données des capteurs, avec accès au fichier de configuration YML. Gestion du projet sur GitHub avec documentation associée.",
		technologies: [
			'JAVA',
			'JavaFX',
			'PHP',
			'HTML/CSS',
		],
		challenge: [
			"Ce site web d’E-commerce a été réalisée lors de notre deuxième année de BUT informatique, nous avions pour but de réaliser un site web permettant de vendre les produits de notre client 'Cheribou' celui-ci nous permettra de simuler des actions que l’on peut retrouver dans une boutique de vente en ligne.",
			"Le site web doit permettre la vente des bonbons et autres produits proposés par notre client de dépôt. Les produits ainsi que les données personnelles des clients sont stockées dans une base de données. Le client devra pouvoir se connecter/créer un compte, visiter le catalogue des produits, ajouter un produit au panier et de valider son panier pour accèder au paiement.",
			"L’entreprise Cheribou souhaitant re-conceptualiser son site internet pour que celui-ci soit le plus attractif possible afin d’augmenter le nombre de clients inscrits et d’améliorer le nombre de ventes en ligne. De plus, Cheribou a la volonté et les ressources pour se développer à l’international afin degagner en notoriété et en visibilité. Cheribou cherche à s’introduire et à s’exporter sur les marchés Allemand et Américain. Mais le site internet actuel est désuet et n’est pas adapté à pour une future expansion internationale. Une version anglaise du site devra donc être créée afin de s’adapter au nouveau type de clients. Le nouveau site web devra être adapté pour des enfants, adolescents et jeunes adultes, être simple à parcourir et être sécurisé pour permettre une bonne utilisation du site web et une fidélisation de la clientèle.",
		],
		socialSharings: [
			{
				id: 1,
				name: 'Github',
				icon: 'github',
				url: 'https://github.com/IUT-Blagnac/sae3-01-devapp-g1b-5',
			},
			// ... autres réseaux sociaux
		],
		images: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/ui-project-1.jpg'),
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/web-project-2.jpg'),
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/mobile-project-2.jpg'),
			},
		],
	},
	{
		id: 4,
		title: 'Application web de gestion de la SAE "Koh-Lanta"',
		category: 'Application Web',
		img: require('@/assets/images/web-project-1.jpg'),
		date: 'hiver 2023',
		tag: 'App de gestion Web / Angular / Symfony',
		client: {
			name: 'IUT de Blagnac',
			services: 'Developpement d\'applications',
			website: 'https://www.iut-blagnac.fr/fr/',
			phone: '05 62 74 75 75',
		},
		objectives: "Développement d'une application web de gestion de la SAÉ 5 'Koh-Lanta' avec Symfony (PHP) et Angular (TypeScript). Automatisation des processus de constitution des équipes, saisie des sujets et gestion des évaluations. Projet documenté sur GitHub.",
		technologies: [
			'PHP',
			'Symfony',
			'Typescript',
			'Angular',

		],
		challenge: [
			"Bienvenue dans l’application de gestion dédiée à la SAÉ 'Kho Lanta'. Notre application a été créée dans le but de simplifier et d’automatiser plusieurs aspects clés de la gestion de la SAÉ 5 'Kho Lanta'. Cette initiative vise à rendre le processus de gestion plus efficace en offrant des fonctionnalités automatisées pour la constitution des équipes, la saisie des sujets, la gestion des évaluations, et bien plus encore.",
			'L’objectif principal de notre application est de fournir une plateforme conviviale et efficace pour les responsables de la SAÉ afin de faciliter la gestion de diverses tâches liées à l’événement "Kho Lanta". Nous nous efforçons de simplifier les processus administratifs, d’améliorer la communication entre les membres et les équipes, et de garantir une expérience fluide tout au long de la SAÉ.',
		],
		socialSharings: [
			{
				id: 1,
				name: 'Github',
				icon: 'github',
				url: 'https://github.com/IUT-Blagnac/sae-5-1-01-phase4-groupe-de-5',
			},
			// ... autres réseaux sociaux
		],
		images: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/ui-project-1.jpg'),
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/web-project-2.jpg'),
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/mobile-project-2.jpg'),
			},
		],
	},
	{
		id: 5,
		title: 'Refactoring d\'une application existante',
		category: 'Application Java',
		img: require('@/assets/images/mobile-project-1.jpg'),
		date: 'été 2022',
		tag: 'JavaFX / IHM',
		client: {
			name: 'IUT de Blagnac',
			services: 'Developpement d\'applications',
			website: 'https://www.iut-blagnac.fr/fr/',
			phone: '05 62 74 75 75',
		},
		objectives: 'Amélioration d\'une application de gestion de tournoi de Belote en Java avec Swing. Refactoring du code existant en intégrant des patrons de conception, en appliquant les principes SOLID et en mettant en place des bonnes pratiques de conception orientée objet.',
		technologies: [
			'Java',
			'Swing',
			// Ajoutez d'autres technologies au besoin
		],
		challenge: [
			'Le projet initial, nommé "belote2019", a été développé par un ancien étudiant de l’IUT de Blagnac. Il utilise Java avec Swing pour créer une application de gestion de tournoi de Belote.',
			'L\'objectif du refactoring est d\'intégrer des patrons de conception, d\'appliquer les principes SOLID et de mettre en place des bonnes pratiques de conception orientée objet. Cela comprend l\'analyse détaillée des fonctionnalités existantes, l\'amélioration de l\'organisation et de la visibilité du code, ainsi que l\'ajout éventuel de nouvelles fonctionnalités facilitées par le refactoring.',
			'Le travail doit être réalisé sur GitHub, avec des commits bien documentés et une utilisation éventuelle des issues GitHub pour organiser les idées de refactoring. Le rapport final doit être inclus dans le README, expliquant chaque modification avec des extraits de code illustratifs et justifiant chaque choix de refactoring.'
		],
		socialSharings: [
			{
				id: 1,
				name: 'Github',
				icon: 'github',
				url: 'https://github.com/IUT-Blagnac/sae4-01-2023-gt',
			},
			// ... autres réseaux sociaux
		],
		images: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/ui-project-1.jpg'),
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/web-project-2.jpg'),
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/mobile-project-2.jpg'),
			},
		],
	},
	{
		id: 6,
		title: 'Application web de gestion d\'une bibliothèque (en cours)',
		category: 'Application Web',
		img: require('@/assets/images/web-project-1.jpg'),
		date: 'début 2023',
		tag: 'App de gestion Web / API / Angular Symfony',
		client: {
			name: 'IUT de Blagnac',
			services: 'Developpement d\'applications',
			website: 'https://www.iut-blagnac.fr/fr/',
			phone: '05 62 74 75 75',
		},
		objectives: 'Développer une appli web de gestion de bibliothèque avec Symfony, EasyAdmin, Angular et API REST.',
		technologies: [
			'Symfony',
			'EasyAdmin',
			'Angular',
			'API Platform'
		],
		challenge: [
			'Le défi consiste à développer une application web de gestion de bibliothèque en utilisant Symfony, EasyAdmin, Angular et une API REST. L\'objectif est d\'administrer les auteurs, les livres, les catégories, ainsi que de gérer les adhérents et leurs emprunts.',
			'Un Back-Office avec Symfony et EasyAdmin doit être implémenté pour permettre l\'ajout, la modification et la suppression des entités. Il faudra également créer une API REST avec Symfony pour fournir des informations sur les livres, auteurs, emprunts et adhérents.',
			'L\'objectif est de mettre en place un Front-Office avec Angular pour permettre aux internautes et adhérents de rechercher des livres, de réserver des livres et de gérer leur compte adhérent.',
			'Une partie du challenge consiste en l\'implémentation d\'un formulaire complexe dans EasyAdmin pour gérer les emprunts. Cela permettra à un adhérent de demander l\'emprunt de plusieurs livres, avec des vérifications telles que la disponibilité des livres et la limite d\'emprunt (maximum 5 emprunts en cours par adhérent).',
			'Il est nécessaire de mettre en place au moins un webservice REST complexe pour gérer la recherche de livres selon des caractéristiques de l\'auteur (période, nationalité, etc.) et/ou la recherche des emprunts associés à un livre donné.',
			'Le respect des cas d\'utilisation détaillés, notamment pour les internautes, les adhérents, les bibliothécaires et les responsables de la bibliothèque, est un élément essentiel du défi.',
			'L\'implémentation du diagramme de classes minimal est nécessaire pour créer les entités, avec une prévoyance pour les fixtures afin de peupler la base de données.',
			'Une utilisation efficace de Git est requise pour gérer le code source du projet, en suivant les instructions Git fournies.'
			],


		socialSharings: [
			{
				id: 1,
				name: 'Github',
				icon: 'github',
				url: 'https://github.com/AimvenDragtow/SAE6-bibliotheque',
			},
			// ... autres réseaux sociaux
		],
		images: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/ui-project-1.jpg'),
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/web-project-2.jpg'),
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/mobile-project-2.jpg'),
			},
		],
	},
	{
		id: 7,
		title: 'Site web Portfolio',
		category: 'Site Web',
		img: require('@/assets/images/web-project-2.jpg'),
		date: 'été 2022',
		tag: 'JavaFX / IHM',
		client: {
			name: 'IUT de Blagnac',
			services: 'Developpement d\'applications',
			website: 'https://www.iut-blagnac.fr/fr/',
			phone: '05 62 74 75 75',
		},
		objectives: 'Réalisation d\'une application bancaire en JAVA sur Eclipse avec Java FX et SceneBuilder, permettant de gérer les comptes bancaires de clients. Gestion de ce projet sur GitHub et rédaction des documentations.',
		technologies: [
			'JAVA',
			'JavaFX',
			'SceneBuilder',
			'Github',
		],
		challenge: [
			'Cette application a été réalisée lors de notre première année de BUT informatique, nous avions pour but de réaliser une application nommée "DAILY BANK", celle-ci nous permettra de simuler des actions que l’on peut retrouver dans une banque du monde réel.',
			'La banque DailyBank souhaite développer une application JAVA-Oracle de gestion des comptes clients pour remplacer plusieurs outils obsolètes. Ce développement s’inscrit dans le cadre de la restructuration de ses services bancaires et l’application sera déployée dans les 100 agences que compte son réseau. Nous travaillerons à partir d’une application existante « Daily Bank » qu’il faudra adapter aux nouveaux besoins de la banque.',
			'L’application doit permettre de gérer des comptes bancaires de dépôt pour des clients préalablement créés. Elle devra permettre de débiter, créditer un compte soit par virement c’est à dire un échange d’argent entre deux comptes distincts mais domiciliés dans le réseau bancaire, soit par une personne physique se présentant devant un guichet.',
		],
		socialSharings: [
			{
				id: 1,
				name: 'Github',
				icon: 'github',
				url: 'https://github.com/Mazlai/SAE2.01-2.05',
			},
			// ... autres réseaux sociaux
		],
		images: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/ui-project-1.jpg'),
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/web-project-2.jpg'),
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: require('@/assets/images/mobile-project-2.jpg'),
			},
		],
	},
];

export default projects;
