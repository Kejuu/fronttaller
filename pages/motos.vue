<template>
    <b-card-body>

      <b-form action="javascript:void(0)" @submit="guardarMoto()">
        <b-form-group id="in-placa" label="Placa:" label-for="placa">
          <b-form-input
            id="placa"
            v-model="moto.placa"
            placeholder="Ingrese placa"
          ></b-form-input>
        </b-form-group>

      <b-form-group id="in-estado" label="estado:" label-for="estado">
          <b-form-input
            id="estado"
            v-model="moto.estado"
            placeholder="Ingrese el estado de la moto"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="in-clase" label="clase:" label-for="clase">
          <b-form-input
            id="clase"
            v-model="moto.clase"
            placeholder="Clase de moto"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="in-marca" label="marca:" label-for="marca">
          <b-form-input
            id="marca"
            v-model="moto.marca"
            placeholder="Ingrese la marca"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="in-modelo" label="modelo:" label-for="modelo">
          <b-form-input
            id="modelo"
            v-model="moto.modelo"
            placeholder="Ingrese el modelo"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="in-color" label="color:" label-for="color">
          <b-form-input
            id="color"
            v-model="moto.color"
            placeholder="Ingrese color"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="in-cilindraje" label="cilindraje:" label-for="cilindraje">
          <b-form-input
            id="cilindraje"
            v-model="moto.cilindraje"
            placeholder="Ingrese cilindraje"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="in-id_propietario" label="Cedula propietario:" label-for="id_propietario">
          <b-form-input
            id="id_propietario"
            v-model="moto.id_propietario"
            placeholder="Ingrese cedula del propietario"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="in-nro_soat" label="Numero SOAT:" label-for="nro_soat">
          <b-form-input
            id="nro_soat"
            v-model="moto.nro_soat"
            placeholder="Ingrese numero de SOAT"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="in-vencimiento_soat" label="Vencimiento SOAT:" label-for="vencimiento_soat">
          <b-form-input
            id="vencimiento_soat"
            v-model="moto.vencimiento_soat"
            placeholder="Fecha de vencimiento del SOAT YYYY-MM-DD"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="in-nro_tecnomecanica" label="Numero tecnomecanica:" label-for="nro_tecnomecanica">
          <b-form-input
            id="nro_tecnomecanica"
            v-model="moto.nro_tecnomecanica"
            placeholder="Ingrese numero de tecnomecanica"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="in-vencimiento_tecnomecanica" label="Vencimiento tecnomecanica:" label-for="vencimiento_tecnomecanica">
          <b-form-input
            id="vencimiento_tecnomecanica"
            v-model="moto.vencimiento_tecnomecanica"
            placeholder="Fecha de vencimiento de tecnomecanica YYYY-MM-DD"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="danger" v-if="!enEdicion">Registrar</b-button>
        <b-button @click="actualizarMotoBD()" variant="danger" v-else>Actualizar datos</b-button>
        <b-table responsive hover :items="lista_motos" :fields="fields"  head-variant="dark"
        class="border border-danger text-center">
          <template v-slot:cell(acciones)="row">
            <div>
              <b-button size="sm" @click="cargarMotoEditar(row)" class="mr-2">Modificar</b-button>
            </div>
          </template>
        </b-table>
      </b-form>
    </b-card-body>
  </b-card>
</template>

<script src="../assets/moto.js" />