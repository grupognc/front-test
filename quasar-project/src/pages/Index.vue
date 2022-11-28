<template>
  <q-page>
    <div class="row">
      <q-table  title="Tabela Dinâmica - Star Wars People"
        :data="posts"
        :columns="columns"
        row-key="name"
        :filter="filter"
        class="col"
        separator="cell"
        selection="single"
        :selected.sync="selected"
        >
        <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
        >
        <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn size="sm" color="blue" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">Nome: {{ props.row.name}}.
            </div>
            <div class="text-left">Altura: {{ props.row.height}}.
            </div>
            <div class="text-left">Peso: {{ props.row.mass}}.
            </div>
            <div class="text-left">Cor do Cabelo: {{ props.row.hair_color}}.
            </div>
            <div class="text-left">Cor da Pele: {{ props.row.skin_color}}.
            </div>
            <div class="text-left">Cor dos Olhos: {{ props.row.eye_color}}.
            </div>
            <div class="text-left">Aniversário: {{ props.row.birth_year}}.
            </div>
            <div class="text-left">Gênero: {{ props.row.gender}}.
            </div>
            <div class="text-left">Planeta Natal: {{ props.row.homeworld}}.
            </div>
            <div class="text-left">Filmes: {{ props.row.films}}.
            </div>
            <div class="text-left">Espécies: {{ props.row.species}}.
            </div>
            <div class="text-left">Veículos: {{ props.row.vehicles}}.
            </div>
            <div class="text-left">Nave Estelar: {{ props.row.starships}}.
            </div>
            <div class="text-left">Criado: {{ props.row.created}}.
            </div>
            <div class="text-left">Editado: {{ props.row.edited}}.
            </div>
            <div class="text-left">URL: {{ props.row.url}}.
            </div>
          </q-td>
        </q-tr>
      </template>
      </q-table>
        />
    </div>
      {{selected}}
  </q-page>
</template>

<script>

import { ref } from 'vue'
export default {
  name: 'PageIndex',
  data () {
    return {
      model: ref(),
      options: ['fair', 'gold', 'light'],
      filter: ref(''),
      columns: [
        {
          name: 'name',
          label: 'Nome',
          field: 'name',
          align: 'left',
          sortable: true
        },
        {
          name: 'height',
          label: 'Altura',
          field: 'height',
          align: 'left',
          sortable: true
        },
        {
          name: 'mass',
          label: 'Peso',
          field: 'mass',
          align: 'left',
          sortable: true
        },
        {
          name: 'birth_year',
          label: 'Aniversário',
          field: 'birth_year',
          align: 'left',
          sortable: true
        },
        {
          name: 'gender',
          label: 'Gênero',
          field: 'gender',
          align: 'left',
          sortable: true
        }
      ],
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    getPosts () {
      this.$axios.get('https://swapi.dev/api/people/')
        .then((res) => {
          this.posts = res.data.results
          console.log(res.data.results)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
