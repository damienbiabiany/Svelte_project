
<script>
  import InspectionsList from './components/InspectionsList.svelte';
  import { inspections } from './data/InspectionData.json';
</script>

<style>
</style>

<main>
  <InspectionsList inspectionData={inspections} />
</main>