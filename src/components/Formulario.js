import React, {Component, Fragment} from 'react';
import Collapsable from './Collapsable';
        class Formulario extends Component {
            constructor(props) {
                super(props);

                this.state = {
                data: {
                    name: '',
                    job: '',
                    image: '',
                    email: '',
                    phone: '',
                    github: '',
                    linkedin: '',
                    skills: '',
                    palette: '',
                    typography: ''
                }
                }

            // rellena inputs binds

            this.handleNameInput = this.handleNameInput.bind(this);
            this.handleJobInput = this.handleJobInput.bind(this);
            this.handleEmailInput = this.handleEmailInput.bind(this);
            this.handlePhoneInput = this.handlePhoneInput.bind(this);
            this.handleGithubInput = this.handleGithubInput.bind(this);
            this.handleLinkedinInput = this.handleLinkedinInput.bind(this);

            // imagen

            this.fileInput = React.createRef();
            this.handleAddImage = this.handleAddImage.bind(this);
            this.handleClickImage = this.handleClickImage.bind(this);

            }

            // handle rellena inputs

            handleNameInput(event) {
                this.setState ({
                    data: {
                        ...this.state.data,
                        name: event.target.value
                    }
                })
            }

            handleJobInput(event) {
                this.setState ({
                    data: {
                        ...this.state.data,
                        job: event.target.value
                    }
                })
            }

            handleEmailInput(event) {
                this.setState ({
                    data: {
                        ...this.state.data,
                        email: event.target.value
                    }
                })
            }

            handlePhoneInput(event) {
                this.setState ({
                    data: {
                        ...this.state.data,
                        phone: event.target.value
                    }
                })
            }

            handleGithubInput(event) {
                this.setState ({
                    data: {
                        ...this.state.data,
                        github: event.target.value
                    }
                })
            }

            handleLinkedinInput(event) {
                this.setState ({
                    data: {
                        ...this.state.data,
                        name: event.target.value
                    }
                })
            }

            // handle imagen load

            handleAddImage(event) {
                this.fileInput.current.click()
            }

            handleClickImage(event) {
                const fr = new FileReader();

                fr.addEventListener('load', () =>{
                    this.setState ({
                        data: {
                            ...this.state.data,
            image: fr.result
                        }
                    })
                } )
                
                fr.readAsDataURL(event.target.files[0]); 
            }

            //handle button

            handleAbilities() {
                console.log('habilidad añadida')
            }

            handleCreateCard() {
                console.log('tarjeta creada')
            }

            handleTwitter() {
                console.log('compartido en twitter')
            }

            render() {
                const stateForm = this.state.data;
                return (
                    <div className="container-izquierda">
                        <form className="form" action="/signup" method="post">
                            <Collapsable seccion={`DISEÑA`} icono={`far fa-object-ungroup`}>
                                <fieldset className="fieldset-colors">
                                    <div className="container-legend-label-input">
                                        <legend className="form__subtitle">COLORES</legend>
                                        <div className="container__input__labels">
                                            <label className="container_input_div" for="form__subtitle__first-color">
                                                <input
                                                    className="clikable local--palette radio-color"
                                                    data-donde="greenTarget"
                                                    id="form__subtitle__first-color"
                                                    type="radio"
                                                    value="1"
                                                    name="palette"
                                                    checked/>
                                                <span className="checkmark"></span>
                                                <div className="container__square">
                                                    <div className="first-color__square1"></div>
                                                    <div className="first-color__square2"></div>
                                                    <div className="first-color__square3"></div>
                                                </div>
                                            </label>
                                            <label className="container_input_div" for="form__subtitle__second-color">
                                                <input
                                                    className="clikable local--palette radio-color"
                                                    data-donde="redTarget"
                                                    id="form__subtitle__second-color"
                                                    type="radio"
                                                    value="2"
                                                    name="palette"/>
                                                <span className="checkmark"></span>
                                                <div className="container__square">
                                                    <div className="second-color__square1"></div>
                                                    <div className="second-color__square2"></div>
                                                    <div className="second-color__square3"></div>
                                                </div>
                                            </label>
                                            <label className="container_input_div" for="form__subtitle__third-color">
                                                <input
                                                    className="clikable local--palette radio-color"
                                                    data-donde="greyTarget"
                                                    id="form__subtitle__third-color"
                                                    type="radio"
                                                    value="3"
                                                    name="palette"/>
                                                <span className="checkmark"></span>
                                                <div className="container__square group-square2">
                                                    <div className="third-color__square1"></div>
                                                    <div className="third-color__square2"></div>
                                                    <div className="third-color__square3"></div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>

                                <div className="fieldset-font">
                                    <div className="container-legend-label-input">
                                        <legend className="form__subtitle">FUENTES</legend>
                                        <div className="container__input__labels ">
                                            <label
                                                className="font1 container_input_font container_input_div"
                                                for="form__subtitle__first-font">
                                                <input
                                                    className="clikable local--typography radio-font"
                                                    data-donde="ubuntuFont"
                                                    id="form__subtitle__first-font"
                                                    type="radio"
                                                    value="1"
                                                    name="typography"/>
                                                <span className="checkmark"></span>
                                                <div className="container__font">
                                                    Ubuntu
                                                </div>
                                            </label>
                                            <label
                                                className="font2 container_input_font container_input_div"
                                                for="form__subtitle__second-font">
                                                <input
                                                    className="clikable local--typography radio-font"
                                                    data-donde="comicFont"
                                                    id="form__subtitle__second-font"
                                                    type="radio"
                                                    value="2"
                                                    name="typography"
                                                    checked/>
                                                <span className="checkmark"></span>
                                                <div className="container__font">
                                                    Comic Sans
                                                </div>
                                            </label>
                                            <label className="font3 container_input_div" for="form__subtitle__third-font">
                                                <input
                                                    className="clikable local--typography radio-font"
                                                    data-donde="montFont"
                                                    id="form__subtitle__third-font"
                                                    type="radio"
                                                    value="3"
                                                    name="typography"/>
                                                <span className="checkmark"></span>
                                                <div className="container__font">
                                                    Montserrat
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </Collapsable>
                            <Collapsable seccion={`RELLENA`} icono={`far fa-keyboard`}>
                                <div className="form__container">
                                    <label className="form__label" htmlFor="nombre">Nombre completo</label>
                                    <input
                                        className="form__input form__input--nombre local--input--name"
                                        id="nombre"
                                        type="text"
                                        name="name"
                                        placeholder="Ej. Martirio"
                                        maxlength="19"
                                        value={stateForm.name}
                                        onChange={this.handleNameInput}
                                        />
                                    <label className="form__label" for="puesto">Puesto</label>
                                    <input
                                        className="form__input form__input--puesto local--input--job"
                                        id="puesto"
                                        type="text"
                                        name="job"
                                        placeholder="Ej. Reina de la canción"
                                        maxlength="22"
                                        value={stateForm.job}
                                        onChange={this.handleJobInput}
                                        />
                                    <label className="form__label">Imagen de perfil</label>
                                    
                                    <div className="form__container--imagen">
                    <div className="action form__container--imagen">
                    <button className="action__upload-btn boton__añadir-imagen" type="button" onClick={this.handleAddImage}>Añadir imagen</button>
                    <input
                        type="file"
                        name="photo"
                        id="img-selector"
                        className="action__hiddenField"
                        ref={this.fileInput}
                        onChange={this.handleClickImage} />
                    </div>
                    <div className="profile-image contenedor--imagen">
                    <img
                        className="profile-image__item"
                        src={this.state.image}
                        alt="Foto de perfil" />
                    </div>
                </div>
                                    <label className="form__label" for="email">Email</label>
                                    <input
                                        className="form__input inputhref form__mail local--input--email"
                                        id="email"
                                        type="mail"
                                        name="email"
                                        placeholder="Ej. reinadelacancion@ole.es"
                                        value={stateForm.email}
                                        onChange={this.handleEmailInput}
                                        />
                                    <label className="form__label" for="telefono">Teléfono</label>
                                    <input
                                        className="form__input inputhref form__telefono local--input--phone"
                                        id="telefono"
                                        type="number"
                                        name="phone"
                                        placeholder="Ej. 982938437"
                                        value={stateForm.phone}
                                        onChange={this.handlePhoneInput}
                                        />
                                    <label className="form__label " for="linkedin">Linkedin</label>
                                    <input
                                        className="form__input inputhref form__linkedin local--input--linkedin"
                                        id="linkedin"
                                        type="text"
                                        name="linkedin"
                                        placeholder="Ej. martirio.reina"
                                        value={stateForm.linkedin}
                                        onChange={this.handleLinkedin}/>
                                    <label className="form__label" for="github">Github</label>
                                    <input
                                        className="form__input inputhref form__github local--input--github"
                                        id="github"
                                        type="text"
                                        name="github"
                                        placeholder="Ej. martirio-reina"
                                        value={stateForm.github}
                                        onChange={this.handleGithubInput}/>
                                    <div className="form__container--habilidades">
                                        <label className="form__label" for="habilidades">Habilidades (máximo 3)</label>
                                    </div>
                                
                                <div className="form__container--habilidad">
                                    <div id="mama">
                                        <button
                                            type="button"
                                            id="fetch"
                                            className="button"
                                            onClick={this.handleAbilities}>
                                            <div className="content-button-habilities">
                                                +
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                </div>
                            </Collapsable>
                            <Collapsable seccion={`COMPARTE`} icono={`fas fa-share-alt`}>
                                <div className="contenedor-boton">
                                    <a
                                        href="#"
                                        className="makecard submit"
                                        id="submit"
                                        onClick={this.handleCreateCard}>&nbsp;&nbsp;CREAR TARJETA
                                        <i className="far fa-address-card"></i>
                                    </a>
                                    <span className="rectangl2"></span>
                                </div>
                                <div className="contenedor-twitter">
                                    <h2 className="titletarjeta response parraphtarjeta"></h2>
                                    <a href="" className="maketwitter" target="_blank" onClick={this.handleTwitter}>&nbsp;&nbsp;Compartir en Twitter
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <span className="rectangl2"></span>
                                </div>
                            </Collapsable>
                        </form>
                    </div>
                );
            }
        }
        export default Formulario;
