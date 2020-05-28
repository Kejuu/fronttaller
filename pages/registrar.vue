<template>

    <b-card-body>
        <b-form action="javascript:void(0)" @submit="guardarUsuario()">
  
            <b-form-group id="tipo_documento" label-for="tipo_documento">
                <b-form-select
                    id="tipo_documento"
                    v-model="usuario.tipo_documento"
                    required
                    :options="options"
                ></b-form-select>
            </b-form-group>

            <b-form-group id="in-documento" label="Documento:" label-for="documento">
                <b-form-input
                id="documento"
                v-model="usuario.documento"
                required
                placeholder="Ingrese su Documento"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="in-nombre" label="Nombre:" label-for="nombre">
                <b-form-input
                id="nombre"
                v-model="usuario.nombre"
                required
                placeholder="Ingrese su nombre"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="in-apellidos" label="Apellidos:" label-for="apellidos">
                <b-form-input
                id="apellidos"
                v-model="usuario.apellidos"
                required
                placeholder="Ingrese sus apellidos"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="in-celular" label="Celular:" label-for="celular">
                <b-form-input
                id="celular"
                v-model="usuario.celular"
                required
                placeholder="Ingrese su celular"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="in-correo" label="Correo:" label-for="correo">
                <b-form-input
                id="correo"
                v-model="usuario.correo"
                required
                placeholder="Ingrese su correo"
                ></b-form-input>
            </b-form-group>

             <b-form-group id="in-rol" label="Rol:" label-for="rol">
                <b-form-select
                id="rol"
                v-model="usuario.rol"
                required
                :options="optionsrol"
                 ></b-form-select>
            </b-form-group>

            <b-form-group id="in-clave" label="Clave:" label-for="clave">
                <b-form-input
                id="clave"
                v-model="usuario.clave"
                required
                type="password"
                placeholder="Ingrese su clave"
                ></b-form-input>
            </b-form-group>
            
            <b-button type="submit" variant="primary" v-if="!enEdicion">Registrar</b-button>
            <b-button @click="actualizarUsuarioBD()" variant="danger" v-else>Actualizar datos</b-button>
      </b-form>    
            <b-table responsive hover :items="lista_usuario" :fields="fields" head-variant="dark">
            <template v-slot:cell(acciones)="row">
                <div>
                    <b-button size="sm" @click="cargarUsuarioEditar(row)" class="mr-2">Editar</b-button>
                    <b-button size="sm" @click="eliminarUsuario(row)" class="mr-2">Eliminar</b-button>
                </div>
            </template>
      </b-table>
    </b-card-body>
     
</template>

<script src="@/assets/registrar.js"/>