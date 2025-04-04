<script>
    export let movies_data;
    export let selectedMovie;
    export let closeModal;
</script>

<main>
    <div class="modal">
        <div class="inner">
            <h3>{movies_data[selectedMovie].title}</h3>
            <p>{@html movies_data[selectedMovie].story}</p>
            <button class="btn btn-close"
                on:click={closeModal}>
                Close
            </button>
        </div>
    </div>    
</main>

<style>
    .modal {
        background: rgba(0, 0, 0, 0.7);
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal .inner {
        background: #fff;
        width: 40%;
        padding: 20px;
        border-radius: 10px;
    }

    .btn {
        display: inline-block;
        padding: 0.3rem 0.3rem;
        /* font-size: 1rem; */
        /* font-weight: 500; */
        /* text-align: center; */
        /* text-decoration: none; */
        border-radius: 0.375rem;
        cursor: pointer;
        /* transition: background-color 0.2s, border-color 0.2s; */
        border: 1px solid transparent;
    }

    .btn-close {
    color: #fff;
    background-color: #b81aa3;
    border-color: #142436;
  }

</style>