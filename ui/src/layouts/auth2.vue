<template>
  <VaLayout
    v-if="breakpoint.lgUp"
    class="h-screen bg-[var(--va-background-secondary)]"
  >
    <template #left>
      <RouterLink
        class="bg-primary h-full flex items-center justify-center"
        style="width: 35vw"
        to="/"
        aria-label="Visit homepage"
      >
        <VuesticLogo view="lg" />
      </RouterLink>
    </template>
    <template #content>
      <main
        class="h-full flex items-center justify-center mx-auto max-w-[460px]"
      >
        <RouterView />
      </main>
    </template>
  </VaLayout>

  <VaLayout v-else class="h-screen bg-[var(--va-background-secondary)]">
    <template #content>
      <div class="p-4">
        <main
          class="h-full flex flex-row items-center justify-start mx-auto max-w-[420px]"
        >
          <div class="flex flex-col items-start">
            <RouterLink class="py-4" to="/" aria-label="Visit homepage">
              <VuesticLogo class="mb-2" view="sm" />
            </RouterLink>
            <RouterView />
          </div>
        </main>
      </div>
    </template>
  </VaLayout>
</template>

<script setup>
import { useBreakpoint } from "vuestic-ui";

const breakpoint = useBreakpoint();
</script>
