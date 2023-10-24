<script>
  export let inspection;
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch('close');
  }
</script>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    max-width: 400px;
    position: relative;
  }

  button:active {
    outline: none;
    border: none;
  }

  .close-button {
    position: absolute;
    top: -10px;
    right: 3px;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 1.5em;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
</style>

<div class="modal">
  <div class="modal-content">
    <button class="close-button" title="Close" on:click={closeModal}>×</button>
    <h2>{inspection.name} Details</h2>
    <table>
      <tr>
        <th>Type</th>
        <td>{inspection.type}</td>
      </tr>
      <tr>
        <th>Company</th>
        <td>{inspection.company}</td>
      </tr>
      <tr>
        <th>Construction Year</th>
        <td>{inspection.constructionYear}</td>
      </tr>
      <tr>
        <th>Diameter</th>
        <td>{inspection.diameter}</td>
      </tr>
      <tr>
        <th>Material</th>
        <td>{inspection.material}</td>
      </tr>
      <tr>
        <th>Coating</th>
        <td>{inspection.coating}</td>
      </tr>
    </table>
  </div>
</div>
