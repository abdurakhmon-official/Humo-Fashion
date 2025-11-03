<template>
    <div>
        <section class="md:h-screen py-36 flex items-center bg-primary/10 dark:bg-primary/20 bg-center bg-no-repeat bg-cover" :style="{backgroundImage:`url(${bg})`}">
            <div class="container relative">
                <div class="grid grid-cols-1">
                    <div class="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                        <div class="grid md:grid-cols-2 grid-cols-1 items-center">
                            <div class="relative md:shrink-0">
                                <img class="h-full w-full object-cover md:h-[44rem]" :src="image" alt="">
                            </div>

                            <div class="p-8 lg:px-20">
                                <div class="text-center">
                                    <NuxtLink to="/">
                                        <img :src="logoDark" class="mx-auto block dark:hidden" alt="">
                                        <img :src="logoLight" class="mx-auto hidden dark:block" alt="">
                                    </NuxtLink>
                                </div>

                                <form class="text-start lg:py-20 py-8">
                                    <div class="grid grid-cols-1">
                                        <div class="mb-4">
                                            <label class="font-semibold" for="RegisterName">Your Name:</label>
                                            <input id="RegisterName" type="text" class="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Harry">
                                        </div>
        
                                        <div class="mb-4">
                                            <label class="font-semibold" for="LoginEmail">Email Address:</label>
                                            <input id="LoginEmail" type="email" class="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="name@example.com">
                                        </div>
        
                                        <div class="mb-4">
                                            <label class="font-semibold" for="LoginPassword">Password:</label>
                                            <input id="LoginPassword" type="password" class="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Password:">
                                        </div>
        
                                        <div class="mb-4">
                                            <div class="flex items-center w-full mb-0">
                                                <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-primary checked:appearance-auto dark:accent-primary focus:border-primary-300 focus:ring focus:ring-offset-0 focus:ring-primary-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="AcceptT&C">
                                                <label class="form-check-label text-slate-400" for="AcceptT&C">I Accept <NuxtLink :to="[]" class="text-primary">Terms And Condition</NuxtLink></label>
                                            </div>
                                        </div>
        
                                        <nuxt-link to="/signup-success">
                                        <div class="mb-4">
                                            <input type="submit" class="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-primary text-white rounded-md w-full" value="Register">
                                        </div>
                                    </nuxt-link>
        
                                        <div class="text-center">
                                            <span class="text-slate-400 me-2">Already have an account ? </span> <NuxtLink to="/login" class="text-black dark:text-white font-bold inline-block">Sign in</NuxtLink>
                                        </div>
                                    </div>
                                </form>

                                <div class="text-center">
                                    <p class="mb-0 text-slate-400">© {{ date }} Cartzio. Design with <i class="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <switcher :switcherBack="false" />
    </div>
</template>

<script setup>
    import feather from 'feather-icons';
    import image from '~/assets/images/signup.jpg'
    import logoDark from '~/assets/images/logo-dark.png'
    import logoLight from '~/assets/images/logo-light.png'
    import bg from '~/assets/images/hero/bg-shape.png'

    const date = ref(new Date().getFullYear())

    onMounted(()=>{
        feather.replace();
    })

</script>
