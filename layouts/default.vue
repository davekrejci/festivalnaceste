
<template>
    <div class="flex flex-col h-screen text-neutral-300 bg-base-100">
        <header>
            <navbar></navbar>
        </header>
        <main class="flex-1 p-0 m-0">
            <slot />
        </main>
        <CustomFooter class="mt-32"></CustomFooter>
    </div>
</template>