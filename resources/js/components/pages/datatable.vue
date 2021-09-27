
<template>
  <div>
      <div class="d-flex justify-content-between py-3">
          <h1>DataTable</h1>
          <router-link class="btn btn-success text-center" :to="{name:'dataAdd'}">Add Data To Database</router-link>
      </div>
      <table class="table">

  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>


  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
