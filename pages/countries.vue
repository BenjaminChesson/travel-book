<template>
  <div>
    <Header />
    <main>
      <div class="container">
        <content>
          <h1 class="title">Countries</h1>
          <Table />
        </content>
      </div>
    </main>
  </div>
</template>
<script>
import Header from "~/components/02-molecules/Header/header"
import Table from "~/components/02-molecules/Table/table"

export default {
  components: {
    Header,
    Table
  }
}
</script>
<style></style>
