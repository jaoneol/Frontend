<script>
    let menus = ["Home", "Movies", "About"];
</script>

<main>
    <nav class="navbar">
        <ul>
            {#each menus as menu}
                <li><a href="https://www.naver.com">{menu}</a></li>
            {/each}
        </ul>
    </nav>
</main>

<style>
    .navbar {
        background-color: #333;
        padding: 10px 20px;
        display: flex;
        justify-content: center;
    }

    ul {
        list-style: none;
        display: flex;
        gap: 20px;
        margin: 0;
        padding: 0;
    }

    li a {
        color: #fff;
        text-decoration: none;
        font-weight: 500;
    }

    li a:hover {
        text-decoration: underline;
    }
</style>
