# projet2-vue
Installation

1 • Installer Vue :
npm install -g @vue/cli
vue --version
Vue CLI v4.5.15

2 • Installer Tailwind et ses dépendances :
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

⚠️ WARNING ⚠️
Attention de ne pas installer tailwind et ses dépendances avec
npm install postcss@latest

Postcss 8 étant particulièrement récent, vous aurez une erreur “PostCSS plugin tailwindcss requires PostCSS 8” si vous l’installez avec @latest.

vue create projet3-vue
installation automatique
npm run serve 

L’étape suivante est de générer les fichiers de configuration associés à TailwindCSS :
npx tailwind init -p

Cela va créer un fichier tailwind.config.js et un fichier postcss.config.js à la racine de votre application.

Vous pouvez modifier la valeur de purge dans le fichier tailwind.config.js afin d’éviter des rafraîchissements inutiles lors de la modification de certains fichiers.

purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

Nous avons maintenant besoin d’un fichier ./src/index.css afin d’importer Tailwind dans le css de notre application Vue…

… et de l’importer dans notre application Vue directement dans le fichier ./src/main.js en rajoutant la ligne :
import './index.css'


npm install router


npm install tw-elements

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
