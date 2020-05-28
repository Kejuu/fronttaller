/**
 * Aquì se encuentran los metodos para el crud de los autores
 */
const axios = require('axios');
export default {
    data() {
        return {
            enEdicion: false,
            options: [
                { value: null, text: 'Porfavor escoge una opción', disabled: true },
                { value: '1', text: 'CC' },
                { value: '2', text: 'CE'},
                { value: '3', text: 'NIT'},
                { value: '4', text: 'Pasaporte'}
            ],

            optionsrol: [
                { value: null, text: 'Porfavor escoge una opción', disabled: true },
                { value: '1', text: 'Mecanico' },
                { value: '2', text: 'Administrador'},
            ],
            //se guardan todos los autores nuevos que se registran 
            usuario: {
                tipo_documento: "",
                documento: "",
                nombre:"",
                apellidos: "",
                celular: "",
                correo: "",
                clave: "",
                rol: "",
                acciones: true
            },
            fields: [
                {
                    key: 'tipo_documento',
                    label: 'Tipo de documento',
                },
                {
                    key: 'documento',
                    label: 'Documento',
                },
                {
                    key: 'nombre',
                    label: 'Nombre'

                },
                {
                    key: 'apellidos',
                    label: 'Apellidos'

                },
                {
                    key: 'celular',
                    label: 'Celular'

                },

                {
                    key: 'correo',
                    class: 'Correo'

                },
                {
                    key: 'rol',
                    label: 'Rol'

                },
                {
                    key: 'acciones',
                    class: 'center'

                }
              
            ],
            //se inicializa el array autores para luego guardar todos los seguimientos ahí
            lista_usuario: [

            ],
             show: true
            
        }

    },
    mounted() {
        this.cargar();
    },
    methods: {
        cargar() {
            let token = localStorage.getItem("token");
            let url = "http://localhost:3001/";
            let direccion = url + "usuarios/";
            axios.get(direccion, {headers: {token}}).then(respuesta => {
                let data = respuesta.data;
                let lista = data.info;

                if (data.ok) {
                    this.lista_usuario = lista;
                }
                this.mensaje = data.mensaje;
                console.log(respuesta);
            }).catch(error => {
                console.log(this.mensaje = "Ha ocurrido un error")
            });

        },
        eliminarUsuario({ item }) {
            let token = localStorage.getItem("token");
            let i = item.documento;
            let url = "http://localhost:3001/";
            let direccion = url + "usuarios/" + i;
            axios
                .delete(direccion, i,  {headers: {token}})
                .then((response) => {
                    alert("El usuario se eliminó correctamente");
                    this.cargar();
                    console.log(response);
                })
                .catch((error) => {
                    alert("Lo sentimos, el usuario no se pudo borrar correctamente");
                    console.log(error);
                });
        },

        actualizarUsuarioBD() {
            let token = localStorage.getItem("token");
            let id_Editar = this.seg.id;
            let url = "http://localhost:3001/";
            let direccion = url + "usuarios/" + id_Editar;
            axios
                .put(direccion, this.seg,  {headers: {token}})
                .then((response) => {
                    alert("El usuario se editó correctamente");
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                    alert("Lo sentimos, el usuario no se pudo editar correctamente");
                });

            this.usuario = {
                tipo_documento: "",
                documento: "",
                nombre:"",
                apellidos: "",
                celular: "",
                correo: "",
                clave: "",
                rol: "",
                acciones: true
            };
        },

        cargarUsuarioEditar({ item }) {
            let editar = this.lista_usuario.find(usuario => usuario.documento == item.documento);
            this.enEdicion = true;
            this.usuario = Object.assign({}, editar);
        },
        guardarUsuario() {
            let url = "http://localhost:3001/";
            let direccion = url + "usuarios";

            let token = localStorage.getItem("token");
            
            axios
                .post(direccion, this.usuario, {headers: {token}})
                .then((response) => {
                console.log("Persona agregado correctamente");
                console.log(response);

                })
                .catch((error) => {
                console.log(error);
                });
                this.usuario = {
                    tipo_documento: "",
                    documento: "",
                    nombre:"",
                    apellidos: "",
                    celular: "",
                    correo: "",
                    clave: "",
                    rol: "",
                    acciones: true
                  };

        },
    }

};