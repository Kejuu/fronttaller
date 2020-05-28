<template>
  <div class="body">
    <b-container>
      <b-col>
        <b-form action="javascript:void(0)">
          <b-form-group @submit.stop.prevent label="Documento" label-for="id">
            <b-form-input
              class="form-control"
              v-model="usuario.documento"
              type="number"
              placeholder="Ingrese su documento de identidad"
              id="id"
              :rules="reglas"/>
          </b-form-group>

          <b-form-group @submit.stop.prevent label="Contraseña" label-for="password">
            <b-form-input
              class="form-control"
              type="password"
              v-model="usuario.clave"
              placeholder="Ingrese su contraseña"
              id="password"
			  :rules="reglas"/>
          </b-form-group>

          <b-button @click="login()" type="submit" block variant="danger">Ingresar</b-button>
          <div class="text">
            <br />
          </div>
        </b-form>
        <br />
      </b-col>
    </b-container>
  </div>
</template>

<script src="../assets/login.js" />