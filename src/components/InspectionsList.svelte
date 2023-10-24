<script>
  export let inspectionData;
  import Modal from './Modal.svelte';
  let selectedInspection;
  let showModal = false;
</script>

<style>
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    width: 90%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fbf8f3;
  }

  @media (min-width: 1024px) {
    li {
      display: flex;
      padding: 30px;
      width: 60%;
      justify-content: space-between;
    }
  }

  strong {
    font-size: 1.2em;
    margin-bottom: 8px;
    display: block;
  }

  p {
    margin: 0;
    color: #555;
  }

  button {
    padding: 8px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
</style>

<ul>
  {#if inspectionData.length > 0}
    <ul>
      {#each inspectionData as inspection (inspection.name)}
        <li>
          <strong>{inspection.name}</strong>
          <p>{inspection.type}, {inspection.company}</p>
          <button on:click={() => { selectedInspection = inspection; showModal = true; }}>View Details</button>
        </li>
      {/each}
    </ul>
  {:else}
    <p>Loading...</p>
  {/if}

  {#if showModal}
    <Modal bind:inspection={selectedInspection} on:close={() => showModal = false} />
  {/if}
</ul>
