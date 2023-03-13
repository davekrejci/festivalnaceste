<template>
    <div class="grid min-h-full place-items-center py-24 px-6 sm:py-32 lg:px-8">
        <div class="text-center">
            <p class="text-base font-semibold text-orange-400">404</p>
            <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Stránka nenalezena</h1>
            <p class="mt-6 text-base leading-7 text-gray-300">Omlouváme se, nenašli jsme stránku kterou hledáte.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <NuxtLink to="/">
                    <div class="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Vrátit se domů</div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>