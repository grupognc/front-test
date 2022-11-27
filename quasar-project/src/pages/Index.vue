<template>
  <q-page>
    <div class="row">
      <q-table title="Tabela Dinâmica - Star Wars People" :data="posts" :columns="columns" row-key="name" class="col" separator="cell"/>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
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
