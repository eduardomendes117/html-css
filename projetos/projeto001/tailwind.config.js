/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        //adicione cores
      },

      height: {
        '700': '43.75rem',
      },

      backgroundImage: {
        'iframe': "url('/imagens/iframe-image.png')",
        'bio': "url('/imagens/link-bio-image.png')",
      },
    },
    fontFamily: {
      'body': ['"Open Sans"',],
    }
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["false"], // falso: apenas claro + escuro | verdadeiro: todos os temas | array: temas específicos como este ["light", "dark", "cupcake"]

    darkTheme: "dark", // nome de um dos temas incluídos para o modo escuro

    base: true, // aplica a cor de fundo e de primeiro plano ao elemento raiz por padrão

    styled: true, // inclui cores daisyUI e decisões de design para todos os componentes

    utils: true, // adiciona classes utilitárias responsivas e modificadoras

    prefix: "", // prefixo para nomes de classes daisyUI (componentes, modificadores e nomes de classes responsivos. Não cores)

    logs: true, // Mostra informações sobre a versão daisyUI e configuração usada no console ao construir seu CSS

    themeRoot: ":root", // O elemento que recebe as variáveis CSS da cor do tema
  }
}

