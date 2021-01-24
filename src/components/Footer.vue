<template>
    <footer id="bottom">
        <div>
            <h2>Bienvenido al Faketube, mi primera aplicación en Vue.js.</h2>
            <p>Mi nombre es Arturo y soy un desarrollador web. Estoy muy interesado por realizar proyectos más ambiciosos y seguir aprendiendo. Si lo deseas, podrás conocer un poco más sobre mi trabajo accediendo a los enlaces de esta sección.</p>
            <p>Mi idea al crear Faketube era la de poder practicar y aprender más de <a href="https://v3.vuejs.org/" target="_blank" lang="en">V3</a> y <a href="https://next.vuex.vuejs.org/" target="_blank" lang="en">Vuex</a>.</p>
            <h3>Cosas a mejorar:</h3>
            <ul>
                <li>
                    La mayoría de la lógica de los componentes pudiese ser extraida al utilizar mejor una de las nuevas características en V3: <a href="https://v3.vuejs.org/api/composition-api.html" target="_blank" lang="en">Composition</a>.
                </li>
                <li>
                    Estructurar y estandarizar la aplicación siguiendo la <a href="https://v3.vuejs.org/guide/contributing/doc-style-guide.html#documentation-style-guide" target="_blank" lang="en">Style Guide</a> de Vue.
                </li>
            </ul>
        </div>
        <div>
            <a class="button" href="https://github.com/r2abreu/FaketubeVue" taget="_blank">Mira el código</a>
            <a class="button" href="https://www.linkedin.com/in/artuabreu/" taget="_blank">Conecta</a>
            <a class="button" href="mailto:axa.gomez@gmail.com" taget="_blank">Contactame</a>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>

    * + * {
        margin: 1em 0 0;
    }
    footer {
        border-top: var(--border-divider);
        padding-top: 2em;
        color: var(--secondary-color);
        max-width: 70%;
        margin: 2rem auto;
        display: flex;
        gap: 2em;
        line-height: 1.5;

        div:last-of-type {
            display: flex;
            flex-direction: column;
            flex: 1 1 40%;
            min-width: 160px;

            a {
                width: 100%;
            }

            a:first-of-type {
                background: no-repeat url(../../public/assets/github.svg) 90% 50% / 15%, #42b883;
            }
            a:nth-of-type(2) {
                background: no-repeat url(../../public/assets/linkedin.svg) 90% 50% / 15%, #42b883;
            }
            a:last-of-type {
                background: no-repeat url(../../public/assets/email.svg) 90% 50% / 15%, #42b883;
            }
        }

        p {
            font-size: 1.3em;
        }
    }

    ul {
        list-style-position: inside;
    }


    a {
        width: 100%;
        text-decoration: none;
        color: #42b883;
        border-bottom: 2px solid transparent;
        transition: all 0.1s ease-in;
        font-weight: bold;
    }
    
    a:not([class="button"]):hover {
        border-bottom: 2px solid #42b883;
    }

    .button {
        padding: 1em;
        color: #fcfcfc;
        background: #42b883;
        border-bottom: transparent;
        width: max-content;
        border-radius: 0.5em;
        cursor: pointer;
        transition: all 0.1s ease-in;
      
    }

    .button:hover {
        transform: translateY(-5px);
        box-shadow: 1px 1px 10px 5px lighten(#202020, 10%);
    }

    @media screen and (max-width: 800px) {
        footer {
            flex-direction: column;
            max-width: 100%;
            width:100%;
            padding: 2rem 4rem;
        }
    }

    @media screen and (max-width: 450px) {
        footer {
            padding: 2rem 2rem;
        }
    }

</style>