/**
 * Aquì se encuentran los metodos para el crud de los autores
 */
const axios = require('axios');
export default {
    data() {
        return {
            enEdicion: false,
            options: [
            ],
            //se guardan todos los autores nuevos que se registran 
            asignacion: {
                id_mecanico: "",
                placa: "",
                fecha:"",
                trabajos_realizados: "",
                horas_invertidas: "",
            },
            fields: [
                {
                    key: 'id_mecanico',
                    label: 'id_mecanico',
                },
                {
                    key: 'placa',
                    label: 'placa',
                },
                {
                    key: 'fecha',
                    label: 'fecha'

                },
                {
                    key: 'trabajos_realizados',
                    label: 'trabajos_realizados'

                },
                {
                    key: 'horas_invertidas',
                    label: 'horas_invertidas'

                },
                {
                    key: 'acciones',
                    class: 'center'

                }
              
            ],
            //se inicializa el array autores para luego guardar todos los seguimientos ahí
            lista_asignacion: [

            ],
             show: true
            
        }

    },
    mounted() {
        this.cargar();
        this.cargarUsuarios();
    },
    methods: {
        cargar() {
            let token = localStorage.getItem("token");
            let url = "http://localhost:3001/";
            let direccion = url + "asignar/";
            axios.get(direccion, {headers: {token}}).then(respuesta => {
                let data = respuesta.data;
                let lista = data.info;

                if (data.ok) {
                    this.lista_asignacion = lista;
                }
                this.mensaje = data.mensaje;
                console.log(respuesta);
            }).catch(error => {
                console.log(this.mensaje = "Ha ocurrido un error")
            });

        },
        eliminarAsignacion({ item }) {
            let token = localStorage.getItem("token");
            let i = item.documento;
            let url = "http://localhost:3001/";
            let direccion = url + "asignar/" + i;
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

        actualizarAsignacionBD() {
            let token = localStorage.getItem("token");
            let meca = localStorage.getItem("autor");
            let id = meca.id_mecanico;
            let url = "http://localhost:3001/";
            let direccion = url + "asignar/" + id;
            axios
                .put(direccion, this.asignacion,  {headers: {token}})
                .then((response) => {
                    alert("El usuario se editó correctamente");
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                    alert("Lo sentimos, el usuario no se pudo editar correctamente");
                });

            this.asignacion = {
                id_mecanico: "",
                placa: "",
                fecha:"",
                trabajos_realizados: "",
                horas_invertidas: "",
            };
        },

        cargarUsuarioEditar({ item }) {
            let editar = this.lista_asignacion.find(asignacion => asignacion.documento == item.documento);
            this.enEdicion = true;
            this.asignacion = Object.assign({}, editar);
        },
        cargarUsuarios() {
            let token = localStorage.getItem("token");
            let url = "http://localhost:3001/";
            let direccion = url + "usuarios/";
            axios.get(direccion, {headers: {token}}).then(respuesta => {
                let data = respuesta.data;
                let lista = data.info;

                if (data.ok) {
                    this.options = lista;
                }
                this.mensaje = data.mensaje;
                console.log(respuesta);
            }).catch(error => {
                console.log(this.mensaje = "Ha ocurrido un error")
            });

        },
        guardarUsuario() {
            let url = "http://localhost:3001/";
            let direccion = url + "asignar";

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
                this.asignacion = {
                    id_mecanico: "",
                    placa: "",
                    fecha:"",
                    trabajos_realizados: "",
                    horas_invertidas: "",
                };    

        },
    }

};