<script>
    import {passport} from '@imtbl/sdk'
    import passportInstance from "$lib" 
    async function handleLogin(){
        const provider = passportInstance.connectEvm();
        const accounts = await provider.request({ method: "eth_requestAccounts" });
    }
</script>

<div class="header">
    <h1> Simple Notes</h1>
    <button on:click={handleLogin}> Login </button>
</div>

<style>
    .header {
        height: 4rem;
        width: 100%;
        background-color: yellow;
        font-family:'Courier New', Courier, monospace;
        color: black;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    button {
        padding: 2rem;
        border-radius: 3rem;
        background-color: black;
        color: white;
    }
</style>