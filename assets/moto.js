/**
 * Aquì se encuentran los metodos para el crud de los autores
 */
const axios = require('axios');
export default {
    data() {
        return {
            enEdicion: false,

            moto: {
                placa: "",
                estado: "",
                clase:"",
                marca: "",
                modelo: "",
                color: "",
                cilindraje: "",
                id_propietario: "",
                nro_soat:"",
                vencimiento_soat:"",
                nro_tecnomecanica:"",
                vencimiento_tecnomecanica:"",
                acciones: true
            },
            fields: [
                {
                    key: 'placa',
                    label: 'placa',
                },
                {
                    key: 'estado',
                    label: 'estado',
                },
                {
                    key: 'clase',
                    label: 'clase'

                },
                {
                    key: 'marca',
                    label: 'marca'

                },
                {
                    key: 'modelo',
                    label: 'modelo'

                },

                {
                    key: 'color',
                    label: 'color'

                },
                {
                    key: 'cilindraje',
                    label: 'cilindraje'

                },
                {
                    key: 'id_propietario',
                    label: 'id_propietario'

                },
                {
                    key: 'nro_soat',
                    label: 'nro_soat'

                },
                {
                    key: 'vencimiento_soat',
                    label: 'vencimiento_soat'

                },
                {
                    key: 'nro_tecnomecanica',
                    label: 'nro_tecnomecanica'

                },
                {
                    key: 'vencimiento_tecnomecanica',
                    label: 'vencimiento_tecnomecanica'

                },
                {
                    key: 'acciones',
                    class: 'center'

                }
              
            ],
            //se inicializa el array autores para luego guardar todos los seguimientos ahí
            lista_motos: [

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
            let direccion = url + "motos/";
            axios.get(direccion, {headers:{token}}).then(respuesta => {
                let data = respuesta.data;
                let lista = data.info;

                if (data.ok) {
                    this.lista_motos = lista;
                }
                this.mensaje = data.mensaje;
                console.log(respuesta);
            }).catch(error => {
                console.log(this.mensaje = "Ha ocurrido un error")
            });

        },
        actualizarMotoBD() {
            let token = localStorage.getItem("token");
            let id_Editar = this.moto.placa;
            let url = "http://localhost:3001/";
            let direccion = url + "motos/" + id_Editar;
            axios
                .put(direccion, this.moto,{headers:{token}})
                .then((response) => {
                    alert("El usuario se editó correctamente");
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                    alert("Lo sentimos, el usuario no se pudo editar correctamente");
                });

            this.moto = {
                placa: "",
                estado: "",
                clase:"",
                marca: "",
                modelo: "",
                color: "",
                cilindraje: "",
                id_propietario: "",
                nro_soat:"",
                vencimiento_soat:"",
                nro_tecnomecanica:"",
                vencimiento_tecnomecanica:"",
                acciones: true
            };
        },

        cargarMotoEditar({ item }) {
            let editar = this.lista_motos.find(moto => moto.placa == item.placa);
            this.enEdicion = true;
            this.moto = Object.assign({}, editar);
        },
        guardarMoto() {
            let token = localStorage.getItem("token");
            let url = "http://localhost:3001/";
            let direccion = url + "motos";
            let moto = {
                placa:this.moto.placa,
                estado: this.moto.estado,
                clase:this.moto.clase,
                marca: this.moto.marca,
                modelo: this.moto.modelo,
                color: this.moto.color,
                cilindraje:this.moto.cilindraje,
                id_propietario:this.moto.id_propietario,
                nro_soat:this.moto.nro_soat,
                vencimiento_soat:new Date(this.moto.vencimiento_soat),
                nro_tecnomecanica:this.moto.nro_tecnomecanica,
                vencimiento_tecnomecanica:new Date(this.moto.vencimiento_tecnomecanica),
                acciones: true
            }
            console.log(this.moto)
            axios
                .post(direccion, moto, {headers: {token}})
                .then((response) => {
                    console.log(this.moto) 
                console.log("Moto agregado correctamente");
                console.log(response);

                })
                .catch((error) => {
                console.log(error);
                });
                this.moto = {
                    placa: "",
                    estado: "",
                    clase:"",
                    marca: "",
                    modelo: "",
                    color: "",
                    cilindraje: "",
                    id_propietario: "",
                    nro_soat:"",
                    vencimiento_soat:"",
                    nro_tecnomecanica:"",
                    vencimiento_tecnomecanica:"",
                    acciones: true
                  }

        },
    }

};