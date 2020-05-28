<template>

    <b-card-body>
        <b-form action="javascript:void(0)" @submit="guardarUsuario()">
  
            <b-form-group id="id_mecanico" label-for="id_mecanico">
                <b-form-input
                    id="id_mecanico"
                    v-model="asignacion.id_mecanico"
                    required
                    placeholder="Ingrese identificación del mecanico"
                    :options="options"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="in-placa" label="placa:" label-for="placa">
                <b-form-input
                id="placa"
                v-model="asignacion.placa"
                required
                placeholder="Ingrese placa"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="in-fecha" label="fecha:" label-for="fecha">
                <b-form-input
                id="fecha"
                v-model="asignacion.fecha"
                required
                placeholder="Ingrese fecha YYYY-MM-DD"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="in-trabajos_realizados" label="trabajos_realizados:" label-for="trabajos_realizados">
                <b-form-input
                id="trabajos_realizados"
                v-model="asignacion.trabajos_realizados"
                required
                placeholder="Ingrese trabajos realizados"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="in-horas_invertidas" label="horas_invertidas:" label-for="horas_invertidas">
                <b-form-input
                id="horas_invertidas"
                v-model="asignacion.horas_invertidas"
                required
                placeholder="Ingrese horas invertidas"
                ></b-form-input>
            </b-form-group>

            
            <b-button type="submit" variant="primary" v-if="!enEdicion">Registrar</b-button>
            <b-button @click="actualizarAsignacionBD()" variant="danger" v-else>Actualizar datos</b-button>
      </b-form>    
            <b-table responsive hover :items="lista_asignacion" :fields="fields" head-variant="dark">
            <template v-slot:cell(acciones)="row">
                <div>
                    <b-button size="sm" @click="cargarUsuarioEditar(row)" class="mr-2">Editar</b-button>
                    <b-button size="sm" @click="eliminarUsuario(row)" class="mr-2">Eliminar</b-button>
                </div>
            </template>
      </b-table>
    </b-card-body>
     
</template>

<script src="@/assets/asignacion.js"/>