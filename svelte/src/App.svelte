<script lang="ts">
    import { onMount } from "svelte";
    import Functional from "./lib/Functional.svelte";
    import Card from "./lib/Card.svelte";
    import { type APICallResult, letsCallAPI } from "../../intermediate_api";

    let v: undefined | APICallResult; 
    onMount(async () => {
        v = await letsCallAPI();
    });
</script>

<main class="w-screen h-screen flex flex-col gap-y-2">
    <Functional/>
    <div class="w-screen h-screen flex justify-center items-center">
        <Card apiResult={v}/>
    </div>
</main>
