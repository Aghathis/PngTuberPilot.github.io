const settings = [
	{	"name":"Mafuteru",
		"categorieImage":"Image/Categorie/23 - mafuteru accesoires.png",
		"type":"mascotte",
		"base":"Image/Mafuteru/Mafuteru - corps.png",
		"layer":[
			{"name":"birthday",	"path":"Image/Mafuteru/birthday.png"},
			{"name":"normal"	,	"path":"Image/Mafuteru/Mafuteru - accesories - normal.png"},
			{"name":"pokemon"	,	"path":"Image/Mafuteru/Mafuteru - accesories - pokemon.png"}
		],
		"wiggling":{
			"amplitude":20,
			"frequencies":1,
			"wiggle":true
		}
	},
	{	"name":"plug",
		"categorieImage":"Image/Categorie/plug.png",
		"type":"accessoire",
		"layer":[
			{"name":"plug_chat","path":"Image/Mafuyu/Accessoires type chat/Mafuyu - Accessoires - Chat queue.png"}
		]
	},
	{	"name":"Mafuyu_Hair_Back",
		"categorieImage":"Image/Categorie/4 - cheveux.png",
		"type":"corps",
		"layer":[
			{"name":"couette","path":"Image/Mafuyu/4 - cheveux/Cheveux - Couette.png","param":["default"]},
			{"name":"couette_Valentine" ,"path":"Image/Mafuyu/4 - cheveux/Cheveux - Couette Valentine.png"},
			{"name":"long" ,"path":"Image/Mafuyu/4 - cheveux/Cheveux - long.png"},
		]
	},
	{ 	"name":"Accessoire_tete",
		"categorieImage":"Image/Categorie/3 - oreilles.png",
		"type":"accessoire",
		"layer":[
			{"name":"oreille_chat"	   ,"path":"Image/Mafuyu/3 - oreilles/3 - Oreille Chat.png"},
			{"name":"aureole" ,"path":"Image/Mafuyu/3 - oreilles/Aureole.png","param":["hover"]}
		]
	},
	{	"name":"corps",
		"categorieImage":"Image/Categorie/1 - corps.png",
		"type":"corps",
		"layer":[
			{"name":"corps_cleans", "path":"Image/Mafuyu/1 - Corps/Corps - 1.png"},
			{"name":"corps_cleans_shadow", "path":"Image/Mafuyu/1 - Corps/Corps - 2.png","param":["default"]},
			{"name":"corps_details", "path":"Image/Mafuyu/1 - Corps/Corps - 3.png"},
		]
	},
	{	"name":"dessous",
		"categorieImage":"Image/Categorie/25 - Haut -18.png",
		"type":"vetement",
		"layer":[
			{"name":"body_dentelle", 		"path":"Image/Mafuyu/24 - Lingerie/bodydentelle.png"},
			{"name":"nuisettetransparente", "path":"Image/Mafuyu/24 - Lingerie/nuisette transparente.png"},
			{"name":"VioletstringJartelle",	"path":"Image/Mafuyu/24 - Lingerie/stringJartelleViolet.png","param":["default"]},
		]
	},
	{	"name":"joue",
		"categorieImage":"Image/Categorie/8 - joue.png",
		"type":"visage",
		"layer":[
			{"name":"code_barre" ,"path":"Image/Mafuyu/8 - Joues/Blush Code Barre.png"},
			{"name":"cicatrice" ,"path":"Image/Mafuyu/8 - Joues/Cicatrice.png"},
			{"name":"Cute" ,"path":"Image/Mafuyu/8 - Joues/Cute - 1.png"},
			{"name":"Cute_Blush" ,"path":"Image/Mafuyu/8 - Joues/Cute - 1.png","param":["default"]},
			{"name":"Valentine" ,"path":"Image/Mafuyu/8 - Joues/Valentine.png"},
		]
	},
	{	"name":"cheuveux",
		"categorieImage":"Image/Categorie/2 - frange.png",
		"type":"corps",
		"base":"Image/Mafuyu/2 - frange/Frange.png",
		"layer":[
			{"name":"Ahoge" ,"path":"Image/Mafuyu/2 - frange/Ahoge.png","param":["default"]},
			{"name":"meche" ,"path":"Image/Mafuyu/2 - frange/meche.png"}
		]
	},
	{	"name":"Accessoire_cheveux",
		"categorieImage":"Image/Categorie/10 - Accessoires head.png",
		"type":"accessoire",
		"layer":[
			{"name":"Bonnet_Pokemon" 		,"path":"Image/Mafuyu/10 - Accessoires cheveux/Bonet Pokemon.png"},
			{"name":"Noeud_Anniversaire" 	,"path":"Image/Mafuyu/10 - Accessoires cheveux/Noeud anniversaire.png"},
			{"name":"Noeud_Decora" 			,"path":"Image/Mafuyu/10 - Accessoires cheveux/Noeud Decora.png"},
			{"name":"Noeud_Rose" 			,"path":"Image/Mafuyu/10 - Accessoires cheveux/Noeud Rose.png","param":["default"]},
			{"name":"Noeud_Valentine" 		,"path":"Image/Mafuyu/10 - Accessoires cheveux/Noeud Valentine.png"}
		]
	},
	{ 	"name":"Haut",
		"categorieImage":"Image/Categorie/14 - Haut base.png",
		"type":"vetement",
		"layer":[
			{"name":"Normal"	   ,"path":"Image/Mafuyu/14 - Haut Base/Haut - Normal.png","param":["default"]},
			{"name":"Chemise_Bretelle"	   ,"path":"Image/Mafuyu/14 - Haut Base/Chemise Brettelle.png"},
			{"name":"Chemise"	   ,"path":"Image/Mafuyu/14 - Haut Base/Chemise.png"},
			{"name":"Chemise_Valentine"	   ,"path":"Image/Mafuyu/14 - Haut Base/Chemise Valentine.png"},
			{"name":"Animal"	   ,"path":"Image/Mafuyu/14 - Haut Base/Haut - Animal.png"},
			{"name":"Pokemon"	   ,"path":"Image/Mafuyu/14 - Haut Base/Haut - Pokemon.png"}
		]
	},
	{ 	"name":"jupe",
		"categorieImage":"Image/Categorie/bas.png",
		"type":"vetement",
		"layer":[
			{"name":"jupe_rouge"	   ,"path":"Image/Mafuyu/17 - bas/Mafuyu - Dressup - jupe rouge.png","param":["default"]},
			{"name":"jupe_valentine"   ,"path":"Image/Mafuyu/17 - bas/Jupe Valentine.png"},
			{"name":"jupe_rouge_fonce" ,"path":"Image/Mafuyu/17 - bas/Mafuyu - Dressup - jupe rouge fonce.png"}
		]
	},
	{	
		"name":"Par_dessus",
		"categorieImage":"Image/Categorie/15 - Haut Top.png",
		"type":"vetement",
		"layer":[
			{"name":"Animal"	   ,"path":"Image/Mafuyu/16 - haut dessus/Gilet Animal.png"},
			{"name":"Normal"	   ,"path":"Image/Mafuyu/16 - haut dessus/Mafuyu - Dressup - gilet.png","param":["default"]},
			{"name":"Veste"		   ,"path":"Image/Mafuyu/16 - haut dessus/Veste.png"}
		]
	},
	{	
		"name":"Accessoires_haut",
		"categorieImage":"Image/Categorie/16 - Haut accesoire .png",
		"type":"vetement",
		"layer":[
			{"name":"Noeud_Grand"	   ,"path":"Image/Mafuyu/15 - Haut accesoires/Noeud Grand.png"},
			{"name":"Noeud_Petit"	   ,"path":"Image/Mafuyu/15 - Haut accesoires/Noeud Petit.png","param":["default"]}
		]
	},
	{ 	"name":"chocker",
		"categorieImage":"Image/Categorie/chocker.png",
		"type":"accessoire",
		"layer":[
			{"name":"Chocker_Metal"	   ,"path":"Image/Mafuyu/9 - Accesoires cou/Ras de cou Coeur Metal.png"},
			{"name":"Chocker_Valentine" ,"path":"Image/Mafuyu/9 - Accesoires cou/Ras de cou Saint Valentin.png"}
		]
	},
	{ 	"name":"yeux",
		"categorieImage":"Image/Categorie/6 - yeux.png",
		"type":"visage",
		"layer":[
			{"name":"Yeux_Coeur","frames":[
				{"path":"Image/Mafuyu/6 - yeux/Yeux - Coeur Pupil.png"	,"duration":2000},
				{"path":"Image/Mafuyu/6 - yeux/Yeux - plat.png"		,"duration":200}
			],"param":["animated","default"]},
			{"name":"Yeux_Normal","frames":[
				{"path":"Image/Mafuyu/6 - yeux/Yeux - normal.png"		,"duration":2000},
				{"path":"Image/Mafuyu/6 - yeux/Yeux - plat.png"		,"duration":200}
			],"param":["animated"]},
			{"name":"fermer_sourire","path":"Image/Mafuyu/6 - yeux/Yeux - Fermer.png"},
			{"name":"tristitude","path":"Image/Mafuyu/6 - yeux/Yeux - tristitude.png","param":["autowiggle"]}
		],
		"non_empty":true,
		"wiggling":{
			"amplitude":4,
			"frequencies":10,
			"wiggle":false
		}
	},
	{	"name":"sourcil",
		"categorieImage":"Image/Categorie/5 - sourcils.png",
		"type":"visage",
		"layer":[
			{"name":"plat" ,"path":"Image/Mafuyu/5 - Sourcils/flat.png","param":["default"]},
			{"name":"bas"  ,"path":"Image/Mafuyu/5 - Sourcils/down.png"},
			{"name":"haut" ,"path":"Image/Mafuyu/5 - Sourcils/up.png"},
		]
	},
	{ 
		"name":"bouche",
		"categorieImage":"Image/Categorie/7 - Bouche.png",
		"type":"visage",
		"layer":[
			{"name":"fermerSourire","path":"Image/Mafuyu/7 - Bouche/Fermer - Sourire.png","param":["default"]},
			{"name":"fermerTriste","path":"Image/Mafuyu/7 - Bouche/Fermer - Triste.png"},
			{"name":"bave","path":"Image/Mafuyu/7 - Bouche/ouverte - bave.png"},
			{"name":"ouverte","path":"Image/Mafuyu/7 - Bouche/ouverte.png"},
		],
		"non_empty":true,
		"wiggling":{
			"amplitude":4,
			"frequencies":10,
			"wiggle":false
		}
	}
];


var sets = [
	{"name":"valentine","listItem":[
			{"name":"yeux","item":"Yeux_Coeur"},
			{"name":"Accessoires_haut","item":"none"},
			{"name":"chocker","item":"Chocker_Valentine"},
			{"name":"Par_dessus","item":"none"},
			{"name":"jupe","item":"jupe_valentine"},
			{"name":"haut","item":"Chemise_Valentine"},
			{"name":"Accessoire_cheveux","item":"Noeud_Valentine"},
			{"name":"joue","item":"Valentine"},
			{"name":"Mafuyu_Hair_Back","item":"couette_Valentine"}
		]
	}
];

















